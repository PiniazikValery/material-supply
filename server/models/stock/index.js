const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    name: String,
    phone: String,
});

module.exports = mongoose.model('Stock', StockSchema);
