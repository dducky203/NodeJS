const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: { type: String, require: true },
    produce: { type: String, require: true },
    yearOfManufacture: { type: Number, require: true },
    quantity: { type: Number, min: 1 },
    price: { type: Number, require: true },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;