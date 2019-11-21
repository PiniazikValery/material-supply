const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: String,
    email: String,
    phone: String,
});

module.exports = mongoose.model('Client', ClientSchema);;
