const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    updated_at: { type: Date, default: Date.now },
});

UserSchema.pre('save', function hashPassword(next) {
    if (this.password) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }
                this.password = hash;
                return next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.statics.verifyUser = (id, done) => {
    User.findById(id).then(user => {
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
};

UserSchema.statics.getCount = () => {
    return User.countDocuments({}, (err, count) => {
        if (err) {
            console.log(err);
        } else {
            return count;
        }
    });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
