const mongoose = require('mongoose');
const init_data = require('./init_data.json')

const RoleSchema = new mongoose.Schema({
    name: String,
});

RoleSchema.statics.init_data = () => {
    init_data.roles.map(role => {
        Role.findOne({ name: role }).then(found_role => {
            if (!found_role) {
                const newRole = new Role({
                    name: role
                });
                newRole.save();
            }
        });
    });
};

const Role = mongoose.model('Role', RoleSchema);
module.exports = Role;
