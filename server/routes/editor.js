const express = require('express');
const tempConferenceDetails = require("../model/tempConferenceDetails.js");
const Keynotes = require("../model/keynotes.js");
const conferenceTracks = require("../model/conferenceTracks");
const importantDates = require("../model/importantDates");
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

router.post('/keynotes',async (req,res)=>{
    const body = req.body;
    const keynote = new Keynotes(body);
    try{
       await keynote.save();
       res.send({success:'true',message:"Successfully keynote inserted"});
    }catch (e) {
        console.log(e);
    }

})

router.post('/addConferenceTracksForm',async (req,res)=>{
    const body =req.body;
    const conferenceTrack= new conferenceTracks(body);
    try {
        await conferenceTrack.save();
        res.send({success:'true',message:"Successfully conference Tracked Inserted"});
    }catch (e){
        console.log(e);
    }

})

router.post('/importantDatesForm',async (req,res)=>{
    const body =req.body;
    const importantDate = new importantDates(body);
    try {
        await importantDate.save();
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