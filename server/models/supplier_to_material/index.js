const mongoose = require('mongoose');

const SupplierToMaterialSchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
});

module.exports = mongoose.model('SupplierToMaterial', SupplierToMaterialSchema);;
