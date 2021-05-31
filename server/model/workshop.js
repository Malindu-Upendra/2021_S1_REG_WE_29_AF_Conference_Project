import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Data Structure Of Conference
const workShopSchema = Schema({

    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    wconductors:{
        type: String,
        required: true
    },
    flyer:{
        type: String,
    },
    approval:{
        type:String,
        default:'Not Approved'
    }
});

const workshops = mongoose.model('workshops', workShopSchema);

export default workshops;