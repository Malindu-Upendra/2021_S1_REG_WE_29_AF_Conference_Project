const express = require('express');
const router = express.Router();
const workshop = require("../model/workshop.js");
const researchPaper = require("../model/researchPaper.js");
const Attendee = require("../model/attendee.js");
const Payment = require("../model/payment.js");
const contactus = require("../model/contactUs.js");
const nodemailer = require("nodemailer");
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');

//------------------------------------
//sample checking cloudinary

router.post("/sample", upload.single("image"), async (req, res) => {
    console.log("came to backend 1")

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
        console.log("from method = ")

        // Create new user
        let wk = new workshop({
            title: req.body.title,
            description: req.body.description,
            wconductors: req.body.wconductors,
            flyer: result.url,
            cloudinary_id: result.public_id,
        });
        // Save user
        await wk.save();
        res.send({success:true})
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

module.exports = router;