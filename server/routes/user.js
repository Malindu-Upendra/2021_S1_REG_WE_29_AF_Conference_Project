import express from "express";
const router = express.Router();
import workshop from "../model/workshop.js";
import researchPaper from "../model/researchPaper.js";
import Attendee from "../model/attendee.js";
import Payment from "../model/payment.js";
import contactus from "../model/contactUs.js";
import nodemailer from "nodemailer";
import cloudinary from '../utils/cloudinary.js'
import upload from '../utils/multer.js'
import sample from "../model/sample.js";

//------------------------------------
//sample checking cloudinary

router.post("/sample", upload.single("image"), async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create new user
        let user = new sample({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
        });
        // Save user
        await user.save();
        res.json(user);
    } catch (err) {
        console.log(err);
    }
});

//------------------------------------


router.post('/ContactUs',async (req,res) => {
    const p = req.body;

    const info = new contactus(p);
    try {
        await info.save();
        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})


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

    let transporter = nodemailer.createTransport({

        service:'gmail',
        auth: {
            user: 'sliit.conference2021@gmail.com',
            pass: '1m2a3l4i5n6d7u'
        }
    });

    let mailOptions = {
        from: 'sliit.conference2021@gmail.com',
        to: details.email,
        subject: 'Registering for SLIIT Conference',
        text: 'Thank you pakaya :D'
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

    res.send({success:true})

})

export default router;