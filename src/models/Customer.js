const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    birthday: { type: Number, required: true },
    gender: { type: String, required: true }

});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
