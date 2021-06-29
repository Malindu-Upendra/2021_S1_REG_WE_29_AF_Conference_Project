const express = require('express');
const Conference = require('../model/conference.js');
const Attendee = require("../model/attendee.js");
const Workshop = require("../model/workshop.js");
const ResearchPaper = require("../model/researchPaper.js");
const UserModal = require("../model/user.js");
const jwt = require("jsonwebtoken");
const router = express.Router();

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


const secret = 'test';

router.post('/login',async (req, res) => {
    const d = req.body;
    const user = new UserModal(d)

    console.log("from routes 1 " + user);
    const email = user.email;
    const password = user.password;

    try {
        const oldUser = await UserModal.findOne({ email });
        console.log("from routes 2 " + oldUser);

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        if(password !== oldUser.password) {
            console.log("from routes 3 Invalid credentials")
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({oldUser, token , success:true});
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }

});

module.exports = router;