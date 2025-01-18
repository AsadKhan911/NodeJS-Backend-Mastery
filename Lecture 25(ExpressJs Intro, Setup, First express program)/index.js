const express = require('express')
const app = express()

app.get( '/' , ( req , res ) => {
   res.send("This is our first express app home page")
})

app.get( '/about' , ( req , res ) => {
    res.send("This is our about page")
    res.status(200)
    res.set('Content-Type', 'text/html'); //request header
})

app.listen(8000 , () => {
    console.log("Server started at port 8000")
})