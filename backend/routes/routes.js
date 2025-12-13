const express = require("express")
const router = express.Router()
const postTemplateCopy = require('../models/postModel')
const { ObjectId } = require('mongodb');


// post data to mongodb database
router.post('/post', async (req, res) => {
    postUser = new postTemplateCopy({
        title:req.body.title,
        fullName:req.body.fullName,
        opsNumber:req.body.opsNumber
    })
    await postUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(e =>{
        res.json(e)
    })
} )

// get the data to display it on interface
router.get('/post', async (req, res) => {
    const result = await postTemplateCopy.find();
    res.send(result)
})

// get the a single data for edit
router.get('/post/:id', async (req, res) => {
    const id = req.params.id
    const result = await postTemplateCopy.findById({_id:id});
    res.json(result)
})

//send the edited data to database
router.put('/post/:id', async (req, res) =>{
try{
    const personnelId = req.params.id;
    console.log(personnelId)
    const result = await postTemplateCopy.replaceOne({_id: personnelId}, {
         title:req.body.title,
         fullName:req.body.fullName,
         opsNumber:req.body.opsNumber,
    })
    res.send({updatedCount: result.modifiedCount})
    res.send(result)
    res.redirect("/personnel")
    }
    catch(err){
        res.send.status(500).json({error: "something went wrong"})
    }
})

// delete a single in the database
router.delete('/post/:id', async(req, res) => {
    try{
        const personnelId = req.params.id;
        const result = await postTemplateCopy.deleteOne({_id: personnelId});
        res.json({deletedCount: result.deletedCount})
    }
    catch(err){
        res.send.status(500).json({ error: "Something went wrong"})
    }
})

module.exports = router