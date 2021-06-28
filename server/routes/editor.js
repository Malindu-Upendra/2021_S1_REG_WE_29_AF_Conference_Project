const express = require('express');
const tempConferenceDetails = require("../model/tempConferenceDetails.js");
const Keynotes = require("../model/keynotes.js");
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
       res.send({success:'true'});
    }catch (e) {
        console.log(e);
    }

})

// router.post('/addConferenceTracksForm',async (req,res)=>{
//
//     const body =req.body;
//
// })

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