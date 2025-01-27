const express = require('express')
const app = express()
const path = require('path')

const hbsPath = path.join(__dirname , '/nameChanged')
console.log(hbsPath)
//Set view engine
app.set('view engine' , 'hbs')

app.set('views' , hbsPath)

//Set template engine route
app.get('/' , (req,res)=> {
    res.render('index.hbs')
})

app.listen(8000 , ()=>{
    console.log("Port Running at 8000")
})