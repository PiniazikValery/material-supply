const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    company_name: String,
    phone: String,
});

module.exports = mongoose.model('Supplier', SupplierSchema);;
