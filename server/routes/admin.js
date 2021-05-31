import express from "express";
import Conference from '../model/conference.js';
import Attendee from "../model/attendee.js";
import Workshop from "../model/workshop.js";
import ResearchPaper from "../model/researchPaper.js";
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

router.post('/uploadDetails',async (req,res)=>{
    const body = req.body;
    console.log(body);

    const uploadDetails = new Conference(body);
    try{

        await uploadDetails.save()
        res.json({success:true})

    }catch (e) {
        console.log(e)
    }
})

export default router;