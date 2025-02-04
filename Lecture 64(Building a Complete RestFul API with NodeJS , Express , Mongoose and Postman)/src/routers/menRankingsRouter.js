const express = require('express')
const router = express.Router()
const MenRanking = require('../models/men')

//Handling POST request
router.post('/mens' , async (req,res) => {
    try{
        const mensRecord = new  MenRanking(req.body)
        const record = await mensRecord.save()
        res.status(201)
        res.send(record)
    }
    catch(err){
        res.status(400)
        res.send(err)
    }
})

//Handling GET Request
router.get('/mens' , async (req,res)=>{
    try{    
        const readData = await MenRanking.find().sort({"ranking":1})
        res.status(200)   
        res.send(readData)        
    }
    catch(err){
        res.status(400)
        res.send(err)
    }
})

//Handling GET find by name
router.get('/mens/:name' , async (req,res)=>{
    try{
        const name = req.params.name
        const readDataByName = await MenRanking.findOne({name})
        if(!readDataByName)
        {
            res.send("Please write the correct full name")
        }
        else{
            res.status(200).send(readDataByName)
        } 
    }
    catch(err){
        res.status(400).send(err)
    }
})

//Handling Update Request using PATCH Request
router.patch('/mens/:id' , async (req,res)=>{
    try
    {
        const _id = req.params.id;
        const updateDocument = await MenRanking.findByIdAndUpdate(_id , req.body , {new:true})
        res.status(200).send(updateDocument)
    }
    catch(err)
    {
        res.send(err)
    }
})

//Handling Delete Request using DELETE Request
router.delete('/mens/:id' , async (req,res)=>{
    try{
        const _id = req.params.id
        const deleteDocument = await MenRanking.findByIdAndDelete(_id)
        if(deleteDocument === null)
        {
            res.send("Document Already Deleted")
        }
        else
        {
        res.send(`succesfully deleted \n ${deleteDocument}`)
        }
    }
    catch(err){
        res.send(err)
    }
})
module.exports = router;

