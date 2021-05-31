import express from "express";
const router = express.Router();
import researchPaper from "../model/researchPaper.js";
import Workshop from "../model/workshop.js";

router.put('/approveResearch/:id',async (req,res) => {
    const id = req.params.id;

    try {
        await researchPaper.findByIdAndUpdate({id},{ approval : 'Approved'})

        res.send({success:'true',message:"Successfully updated"});
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

router.put('/approveWorkShop',async (req,res) => {
    const id = req.params.id;

    try {
        Workshop.findByIdAndUpdate({id},{ approval : 'Approved'});

        res.send({success:'true',message:"Successfully updated"});
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