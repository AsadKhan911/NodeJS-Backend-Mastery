const express = require('express')
const app = express()

app.get( '/' , ( req , res ) => {
   res.write("<h1>This is our first express HTML heading</h1>")
   res.write("<h2>This is our first express HTML heading</h2>")
   res.end()
})

//1st Method
app.get( '/about' , ( req , res ) => {
    res.send({
        name : "Asad",
        lastName : "Khan"
    })
})

//2nd Method
app.get( '/contact' , ( req , res ) => {
   
    res.json({
        number : "0311-*******",
        email : "asadlinkinpark9@gmail.com",
    })
    res.status(200)
})

//Array of objects
app.get( '/signup' , ( req , res ) => {
   
    res.json([
        {
        number : "0311-*******",
        email : "asadlinkinpark9@gmail.com",
        },
        {
        number : "0311-*******",
        email : "asadlinkinpark9@gmail.com",
        },
        {
        number : "0311-*******",
        email : "asadlinkinpark9@gmail.com",
        },
])
    res.status(200)
})

app.listen(8000 , () => {
    console.log("Server started at port 8000")
})