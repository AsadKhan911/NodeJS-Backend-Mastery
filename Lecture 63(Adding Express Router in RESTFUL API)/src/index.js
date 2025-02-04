const express = require('express')
const app = express()
require('./db/conn.js') //Requring db connection file , no need to store in a variable.
const StudentModel = require('./models/students.js')
const studentRouter = require('./routers/students.js')
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(studentRouter)

app.listen(port , () =>{
    console.log("CONNECTION SUCCESSFULL AT PORT 8000")
})