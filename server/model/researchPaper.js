import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Data Structure Of Conference
const researchPaperSchema = Schema({

    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    phoneNumber:{
        type: Number,
        required:true
    },
    paper:{
        type: String,
        required: true
    },
    approval:{
        type:String,
        default:'Not Approved'
    }
});

const researchPaper = mongoose.model('researchPaper', researchPaperSchema);

export default researchPaper;