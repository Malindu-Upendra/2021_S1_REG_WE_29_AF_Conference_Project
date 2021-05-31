import express from "express";
const router = express.Router();
import workshop from "../model/workshop.js";
import researchPaper from "../model/researchPaper.js";
import Attendee from "../model/attendee.js";
import Payment from "../model/payment.js";

router.post('/uploadResearch',async (req,res) => {
    const p = req.body;

    const newPaper = new researchPaper(p);
    try {
        await newPaper.save();
        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

router.post('/uploadWorkShop',async (req,res) => {
    const p = req.body;

    const newWS = new workshop(p);
    try {
        await newWS.save();
        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

router.post('/attendee',async (req,res)=>{
    const details = req.body;

    const attendee = new Attendee({
        name: details.name,
        email: details.email,
        phoneNumber: details.phoneNumber
    })

    await attendee.save();

    const paid = new Payment({
        email: details.email,
        amount: details.amount
    })

    await paid.save()

    res.send({success:true})

})

export default router;