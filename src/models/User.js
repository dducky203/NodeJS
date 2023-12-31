
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    age: { type: Number, min: 18 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
