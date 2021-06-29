const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const tempConferenceTracksSchema = Schema({
    heading: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});

const tempConferenceTracks= mongoose.model('tempConferenceTracks', tempConferenceTracksSchema);
module.exports = tempConferenceTracks;