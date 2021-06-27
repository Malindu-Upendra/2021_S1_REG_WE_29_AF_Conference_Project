import express from "express";
const router = express.Router();
import researchPaper from "../model/researchPaper.js";
import Workshop from "../model/workshop.js";

router.get('/uploadedResearchPapers',async (req,res)=>{

    try {
        const researchPapers = await researchPaper.find();
        res.status(200).json(researchPapers);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.get('/uploadedWorkshops',async (req,res)=>{

    try {
        const workShops = await Workshop.find();
        res.status(200).json(workShops);
    }catch (err) {
        res.status(404).json({message: err.message});
    }

})

router.put('/approveResearch/:id',async (req,res) => {
    const id = req.params.id;

    try {
        await researchPaper.findByIdAndUpdate({_id:id},{ approval : 'Approved'})

        res.send({success:'true',message:"Successfully Research paper updated"});
    }catch (e) {
        console.log(e);
    }

})

router.put('/declineResearch/:id',async (req,res) => {
    const id = req.params.id;

    try {
        await researchPaper.findByIdAndUpdate({_id:id},{ approval : 'Declined'})

        res.send({success:'true',message:"Successfully Research paper updated"});
    }catch (e) {
        console.log(e);
    }

})

router.post('/uploadResearch/new',async (req,res) => {
    const p = req.body;

    const newPaper = new researchPaper(p);
    try {
        await newPaper.save();

        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

router.put('/approveWorkShop/:id',async (req,res) => {
    const id = req.params.id;
    console.log(id)
    try {
      await  Workshop.findByIdAndUpdate({_id:id},{ approval : 'Approved'});

        res.send({success:'true',message:"Successfully WorkShop updated"});
    }catch (e) {
        console.log(e);
    }

})

router.put('/declineWorkShop/:id',async (req,res) => {
    const id = req.params.id;

    try {
     await Workshop.findByIdAndUpdate({_id:id},{ approval : 'Declined'});

        res.send({success:'true',message:"Successfully WorkShop updated"});
    }catch (e) {
        console.log(e);
    }

})

router.post('/uploadWorkShop/new',async (req,res) => {
    const p = req.body;

    const newWS = new Workshop(p);
    try {
        await newWS.save();

        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

export default router;