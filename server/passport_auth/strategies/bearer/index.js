const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const config = require('config');
const jwt = require('jwt-simple');
const User = require('../../../models/account/user');

passport.use(new BearerStrategy((token, done) => {
    try {
        const { user_id } = jwt.decode(token, config.get('JWT.secret'));
        User.verifyUser(user_id, done);
    } catch (error) {
        done(null, false);
    }
}));

module.exports = passport;
