const express = require('express');
const Conference = require('../model/conference.js');
const Attendee = require("../model/attendee.js");
const Workshop = require("../model/workshop.js");
const ResearchPaper = require("../model/researchPaper.js");
const UserModal = require("../model/user.js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const TempKeynotes = require('../model/tempkeynotes.js');
const Keynote = require('../model/keynotes.js')
const TempConfereceTracks = require('../model/tempConferenceTracks.js')

router.get('/conferenceDetails',async (req,res)=>{

    try {
        const conDetails = await Conference.find();
        res.status(200).json(conDetails);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.get('/attendees', async (req,res) => {

    try {
        const attendees = await Attendee.find();
        res.status(200).json(attendees);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

});

router.get('/workshops', async (req,res) => {

    try {
        const workshops = await Workshop.find();
        res.status(200).json(workshops);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

});

router.get('/researchpapers', async (req,res) => {

    try {
        const papers = await ResearchPaper.find();
        res.status(200).json(papers);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

});

router.put('/updateConference/:id',async(req,res)=>{
    const id =req.params.id
    const details = req.body;

    try{
        await Conference.findByIdAndUpdate({id},{details})
        res.json({success:true})
    }catch (e){
        res.status(404).json({message: e.message});
    }
})

router.get('/getKeynotes', async (req,res) => {

    try {
        const keynotes = await TempKeynotes.find();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }
})

router.put('/approvekeynote/:id',async (req,res)=>{

    const id = req.params.id;
    console.log(id)

    try{

        await TempKeynotes.findByIdAndUpdate({_id:id},{ approval : 'Approved'});

        res.send({success:true})

    }catch (e) {
        console.log(e)
    }

})

router.put('/declinekeynote/:id',async (req,res)=>{

    const id = req.params.id;
    console.log(id)

    try{

        await TempKeynotes.findByIdAndUpdate({_id:id},{ approval : 'Declined'});
        res.send({success:true})

    }catch (e) {
        console.log(e)
    }

})

router.get('/getConferenceTracks',async (req,res) => {

    try{
        const tempCon = await TempConfereceTracks.find();
        res.send({data:tempCon,success:true});

    }catch (e) {
        console.log(e)
    }

})

router.put('/approveTracks/:id',async (req,res) => {

    const id = req.params.id;

    try{
        await TempConfereceTracks.findByIdAndUpdate({_id:id},{ approval : 'Approved'});
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.put('/declineTracks/:id',async (req,res) => {

    const id = req.params.id;

    try{
        await TempConfereceTracks.findByIdAndUpdate({_id:id},{ approval : 'Declined'});
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

const secret = 'test';

router.post('/login',async (req, res) => {
    const d = req.body;
    const user = new UserModal(d)

    console.log("from routes 1 " + user);
    const position = user.position;
    const password = user.password;

    try {
        const oldUser = await UserModal.findOne({ position });

        if (!oldUser) return res.send({ message: "User doesn't exist" ,success:false});

        if(password !== oldUser.password) {
            console.log("from routes 3 Invalid credentials")
            return res.send({message: "Invalid credentials",success:false});
        }
        const token = jwt.sign({ position: oldUser.position, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({token , success:true});
    } catch (err) {
        res.status(500).json({ message: "Something went wrong",success:false });
    }

});

module.exports = router;