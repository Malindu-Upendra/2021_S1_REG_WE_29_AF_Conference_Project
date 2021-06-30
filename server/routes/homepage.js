const express = require('express');
const router = express.Router();
const TempKeynotes = require('../model/tempkeynotes.js');
const TempConferenceTracks = require('../model/tempConferenceTracks.js');

router.get('/getKeynotes',async (req,res) => {

    try {
        const keynotes = await TempKeynotes.find({ approval : 'Approved'}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getConferenceTracks',async (req,res) => {

    try {
        const keynotes = await TempConferenceTracks.find({ approval : 'Approved'}).exec();
        res.send({data:keynotes,success:true})
    }catch (e) {
        console.log(e)
    }

})

module.exports = router;