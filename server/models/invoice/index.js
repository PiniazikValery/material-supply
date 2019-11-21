const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    date: { type: Date, default: Date.now },
    total_price: Number,
});

module.exports = mongoose.model('Invoice', InvoiceSchema);;
