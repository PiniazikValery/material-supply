const User = require('../../../models/account_models/user');
const Role = require('../../../models/account_models/role');

exports.register_user = (req, res) => {
    const { email, username, password, password2 } = req.body;
    const registration_errors = [];

    if (!email || !username || !password || !password2) {
        registration_errors.push({ err_msg: 'Please enter all fields' });
    } else {
        if (password != password2) {
            registration_errors.push({ err_msg: 'Passwords do not match' });
        }
        if (password.length < 6) {
            registration_errors.push({ err_msg: 'Password must be at least 6 characters' });
        }
    }

    if (registration_errors.length > 0) {
        res.status(500).json({
            registration_errors
        });
    } else {
        User.findOne({ email: email }).then(user => {
            if (user) {
                res.status(500).json({
                    error_msg: 'User with email already exist'
                });
            }

            Role.get_id_by_role('guest').then(id => {
                const new_user = new User({
                    username,
                    email,
                    password,
                    role: id
                });
                new_user.save().then(() => {
                    res.status(201).json({
                        message: `User with username ${username} has been created`,
                    });
                });
            })
                .catch(err => {
                    res.status(500).json({
                        message: 'Some internal error occurred',
                        err_msg: err
                    });
                });
        });
    }
};

exports.login_user = (req, res) => {
    res.status(200).json({
        token: req.user
    });
};