const express = require('express')
const app = express()


//Set view engine
app.set('view engine' , 'hbs')

//Set template engine route
app.get('/' , (req,res)=> {
    res.render('index.hbs' , {
        DataName : "ma"
    })
})

app.listen(8000 , ()=>{
    console.log("Ok ki report")
})