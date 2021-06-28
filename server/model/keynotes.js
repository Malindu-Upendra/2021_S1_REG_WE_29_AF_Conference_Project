const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const KeynotesSchema = Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

const keynotes = mongoose.model('keynotes', KeynotesSchema);

module.exports = keynotes;