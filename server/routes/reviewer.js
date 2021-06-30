const express = require('express');
const router = express.Router();
const researchPaper = require("../model/researchPaper.js");
const Workshop = require("../model/workshop.js");
const nodemailer = require("nodemailer");

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

router.get('/getById/:id', async (req,res) => {

    const id = req.params.id;
    // console.log("id" + id)
    const result = await researchPaper.findOne({_id:id});
    // console.log("result" + result)
    res.send({data:result, success:true})
})

router.get('/workshopGetById/:id', async (req,res) => {

    const id = req.params.id;
    // console.log("id" + id)
    const result = await Workshop.findOne({_id:id});
    // console.log("result" + result)
    res.send({data:result, success:true})
})



router.put('/approveResearch/:id',async (req,res) => {
    const id = req.params.id;
    const body = req.body

    try {
        await researchPaper.findByIdAndUpdate({_id:id},{ approval : 'Approved'})

        let transporter = nodemailer.createTransport({

            service:'gmail',
            auth: {
                user: 'sliit.conference2021@gmail.com',
                pass: '1m2a3l4i5n6d7u'
            }
        });

        let mailOptions = {
            from: 'sliit.conference2021@gmail.com',
            to: body.email,
            subject: 'Regarding Research Paper Uploaded in ICAF',
            text: 'We have Approved your Research Paper to Present in ICAF. Thank You !'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        res.send({success:'true',message:"Successfully Research paper updated"});
    }catch (e) {
        console.log(e);
    }

})

router.put('/declineResearch/:id',async (req,res) => {
    const id = req.params.id;
    const body = req.body

    try {
        await researchPaper.findByIdAndUpdate({_id:id},{ approval : 'Declined'})

        let transporter = nodemailer.createTransport({

            service:'gmail',
            auth: {
                user: 'sliit.conference2021@gmail.com',
                pass: '1m2a3l4i5n6d7u'
            }
        });

        let mailOptions = {
            from: 'sliit.conference2021@gmail.com',
            to: body.email,
            subject: 'Regarding Research Paper Uploaded in ICAF',
            text: 'Sorry to inform that We have Declined your Research Paper that have been uploaded to ICAF. Thank You ! '
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        res.send({success:'true',message:"Successfully Research paper updated"});
    }catch (e) {
        console.log(e);
    }

})


router.put('/approveWorkShop/:id',async (req,res) => {
    const id = req.params.id;
    const body = req.body
    console.log(body)
    try {
      await  Workshop.findByIdAndUpdate({_id:id},{ approval : 'Approved'});

        let transporter = nodemailer.createTransport({

            service:'gmail',
            auth: {
                user: 'sliit.conference2021@gmail.com',
                pass: '1m2a3l4i5n6d7u'
            }
        });

        let mailOptions = {
            from: 'sliit.conference2021@gmail.com',
            to: body.email,
            subject: 'Regarding Workshop Uploaded in ICAF',
            text: 'We have Approved your Workshop to be Conducted in ICAF. Thank You ! '
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        res.send({success:'true',message:"Successfully WorkShop updated"});
    }catch (e) {
        console.log(e);
    }

})

router.put('/declineWorkShop/:id',async (req,res) => {
    const id = req.params.id;
    const body = req.body

    try {
     await Workshop.findByIdAndUpdate({_id:id},{ approval : 'Declined'});

        let transporter = nodemailer.createTransport({

            service:'gmail',
            auth: {
                user: 'sliit.conference2021@gmail.com',
                pass: '1m2a3l4i5n6d7u'
            }
        });

        let mailOptions = {
            from: 'sliit.conference2021@gmail.com',
            to: body.email,
            subject: 'Regarding Workshop Uploaded in ICAF',
            text: 'Sorry to inform that We have Declined your Workshop that have been uploaded to ICAF. Thank You ! '
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        res.send({success:'true',message:"Successfully WorkShop updated"});
    }catch (e) {
        console.log(e);
    }

})

module.exports = router;