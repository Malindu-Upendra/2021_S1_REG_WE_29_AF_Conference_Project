const express = require('express');
const tempConferenceDetails = require("../model/tempConferenceDetails.js");
const tempKeynotes = require("../model/tempkeynotes");
const tempConferenceTracks = require("../model/tempConferenceTracks");
const tempImportance = require("../model/tempImportanceDates");
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');

const router = express.Router();

router.get('/',async (req,res) =>{

    try {
        const conDetails = await tempConferenceDetails.find();
        res.status(200).json(conDetails);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.delete('/delete/:id', async (req,res) => {

    const id = req.params.id;

    try {
        await tempConferenceDetails.findByIdAndRemove(id).exec();
        res.send({message:'successfully deleted',success:'true'});
    }catch (e) {
        console.log(e);
    }

})

router.post('/keynotes', upload.single("image"),async (req,res)=>{
    const body = req.body;

    try{
    const result = await cloudinary.uploader.upload(req.file.path);

    const tempKeynote = new tempKeynotes({

        title:req.body.title,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        university:req.body.university,
        description:req.body.description,
        speakerImg:result.url,
        cloudinaryID:result.public_id

     });

       await tempKeynote.save();
       res.send({success:'true',message:"Successfully keynote inserted"});
    }catch (e) {
        console.log(e);
    }
})

router.post('/addConferenceTracksForm',async (req,res)=>{
    const body =req.body;
    const tempConferenceTrack= new tempConferenceTracks(body);
    try {
        await tempConferenceTrack.save();
        res.send({success:'true',message:"Successfully conference Tracked Inserted"});
    }catch (e){
        console.log(e);
    }

})

router.post('/importantDatesForm',async (req,res)=>{
    const body =req.body;
    const tempImportantDate = new tempImportance(body);
    try {
        await tempImportantDate.save();
        res.send({success:'true',message:"Successfully important Dates form Inserted"});
    }catch (e){
        console.log(e);
    }

})

router.post('/uploadConDetails',async (req,res) => {
    const p = req.body;

    const newConDetails = new tempConferenceDetails(p);
    try {
        await newConDetails.save();

        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

module.exports = router;