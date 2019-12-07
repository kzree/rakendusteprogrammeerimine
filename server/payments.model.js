const mongoose = require("mongoose");

const paymentsScema = new mongoose.Schema({
    cart: {type: [String], required: true},
    amount: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId},
    created_at: { type: Date, default: Date.now},
})

const Payment = mongoose.model("Payment", paymentsScema);

module.exports = Payment;