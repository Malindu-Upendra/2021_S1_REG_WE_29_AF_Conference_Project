import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Data Structure Of Conference
const paymentSchema = Schema({
    email: {
        type: String,
        unique:true,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
});

const payment = mongoose.model('payment', paymentSchema);

export default payment;