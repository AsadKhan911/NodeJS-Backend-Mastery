const path = require('path')
const express = require('express')
const app = express()

const staticPath = path.join(__dirname , '/public')
console.log(staticPath)


app.use(express.static(staticPath))

app.get( '/' , (req,res)=>{

})

app.listen(8000 , ()=>{
    console.log("Ok ki report")
})