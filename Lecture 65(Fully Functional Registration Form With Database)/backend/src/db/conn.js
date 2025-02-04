require('dotenv').config()
const mongoose = require('mongoose')

const connection = async () => { //We can also make by .then() and .catch() method like we do in previous lectures
    try{
    await mongoose.connect(process.env.CONNECTION_STR)
    console.log(`DATABASE CONNECTION SUCCESSFUL`)
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports = connection;
