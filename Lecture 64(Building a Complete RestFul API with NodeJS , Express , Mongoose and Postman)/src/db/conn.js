const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/OlympicRaceData').then(()=>{
    console.log("CONNECTION SUCCESSFUL")
}).catch((err)=>{
    console.log("CONNECTION UNSUCCESSFUL")
})