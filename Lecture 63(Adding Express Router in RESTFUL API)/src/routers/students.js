const express = require('express')
const router = new express.Router()
const StudentModel = require('../models/students')


//Create new student.
// app.post('/students' , (req,res) =>{

//     console.log(req.body)
//     const user = new StudentModel(req.body) //we can get the data using req.body

//     user.save().then(()=>{ //Storing in database
//         res.status(201)
//         res.send(user) //this is sending in postman body not our web browser , it is a confusion at first.
//     }).catch((err)=>{
//         res.status(400)
//         res.send(err)
//     })
// })

//WITH THE HELP OF ASYNC AWAIT
router.post ('/students' , async (req,res)=>{
    try{
        console.log(req.body)
        const user = new StudentModel(req.body)
        const createUser = await user.save()
        res.status(201)
        res.send(createUser)
    }
    catch(err){
        res.status(400)
        res.send(err)
    }
})

//Reading data from API through get request

router.get('/students' , async (req,res)=>{
try{
    const studentsData = await StudentModel.find()
    res.status(201)
    res.send(studentsData)
}
catch(err){
    res.status(400)
    res.send(err)
}
})

//Reading data from API of an individual student through get request

router.get('/students/:id' , async (req,res)=>{
try{
const _id = req.params.id
const studentData = await StudentModel.findById(_id)

if(!studentData){
    res.status(400)
    res.send("ERRORs")
}
else{
    res.status(200)
    res.send(studentData)
}
}
catch(err){
    res.status(500)
    res.send(err)
}
})

//Find by name
router.get('/students/:name' , async (req,res)=>{
try{
const name = req.params.name
const studentData = await StudentModel.findOne({name})

if(!studentData){
    res.status(400)
    res.send("ERRORs")
}
else{
    res.status(200)
    res.send(studentData)
}
}
catch(err){
    res.status(500)
    res.send(err)
}
})

//Updating a document using PATCH Request

router.patch('/students/:id' , async (req,res)=>{
try{
const _id = req.params.id 
const updateStudent = await StudentModel.findByIdAndUpdate( _id , req.body , {new:true})
if(!updateStudent){
    res.status(400).send()
}
res.status(200).send(updateStudent)
}
catch(err){
    res.status(404).send(err)
}
})
//Deleting a document using DELETE Request

router.delete('/students/:id' , async (req,res) =>{
try{
const _id = req.params.id 
const deleteStudent = await StudentModel.findByIdAndDelete(_id)
if(!deleteStudent){
    res.status(400)
    res.send()
}
res.status(200)
res.send(deleteStudent)
}
catch(err){
    res.status(401)
    res.send(err)
}
})

module.exports = router;