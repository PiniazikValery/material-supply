const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock'
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductType'
    },
    invoice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    },
    name: String,
    price: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
