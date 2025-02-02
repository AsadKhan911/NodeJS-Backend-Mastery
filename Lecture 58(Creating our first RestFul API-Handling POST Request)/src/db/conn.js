const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/studentsDB').then(() => {
    console.log("DATABASE CONNECTION SUCCESSFULL")
}).catch((err)=>{
    console.log("CONNECTION UNSUCCESSFULL WITH ERROR ",err)
})