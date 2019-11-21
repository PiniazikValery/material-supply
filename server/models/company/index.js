const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    name: String,
    email: String,
    phone: String,
});

module.exports = mongoose.model('Company', CompanySchema);;
