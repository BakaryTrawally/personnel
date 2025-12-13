const express = require("express")
const router = express.Router()
const leaveSchemaCopy = require('../models/leaveTable')
const { ObjectId } = require('mongodb');


// post data
router.post('/post', (req, res) => {
    postUser = new leaveSchemaCopy({
        leaveName:req.body.leaveName,
        proceedDate:req.body.proceedDate,
        resumeDate:req.body.resumeDate,
        workingDays:req.body.workingDays
    })
    postUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(e =>{
        res.json(e)
    })
} )

// retrieve data
router.get('/post', async (req, res) => {
    const result = await leaveSchemaCopy.find();
    res.send(result)
})


// get data for editing
router.get('/post/:id', async (req, res) => {
    const id = req.params.id
    const result = await leaveSchemaCopy.findById({_id:id});
    console.log(result)
    res.json(result)
})


// post edited data
router.put('/post/:id', async (req, res) =>{
try{
    const personnelId = req.params.id;
    console.log(personnelId)
    const result = await leaveSchemaCopy.replaceOne({_id: personnelId}, {
        leaveName:req.body.leaveName,
        proceedDate:req.body.proceedDate,
        resumeDate:req.body.resumeDate,
        workingDays:req.body.workingDays
    })
    res.send({updatedCount: result.modifiedCount})
    res.send(result)
    res.redirect("/personnel")

    }
    catch(err){
        res.send.status(500).json({error: "something went wrong"})
    }
})


// delete function
router.delete('/post/:id', async(req, res) => {
    try{
        const personnelId = req.params.id;
        const result = await leaveSchemaCopy.deleteOne({_id: personnelId});
        res.json({deletedCount: result.deletedCount})
    }
    catch(err){
        res.send.status(500).json({ error: "Something went wrong"})
    }
})

module.exports = router