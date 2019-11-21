const mongoose = require('mongoose');

const ProductTypeSchema = new mongoose.Schema({
    name: String,
    description: Number,
});

module.exports = mongoose.model('ProductType', ProductTypeSchema);
