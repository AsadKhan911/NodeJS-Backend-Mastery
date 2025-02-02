const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TestDB').then(()=>{
    console.log("CONNECTION SUCCESSFULL!")
}).catch((err)=>{
    console.log("ERROR IS"+err)
})

const testSchema = new mongoose.Schema({ //This is a instance not class thats why first letter is small of variable
    name:{
        type:String,
        require:true
    },
    class:Number,
    active:Boolean,
    email:String
})

//MODEL

const TestModel = new mongoose.model('TestModel' , testSchema) //first parameter is model name(collection name) , second is schema jo uske lie banaya h. 

// const readCount = async () => {
//     try{
//     const result = await TestModel.find({class:12}).countDocuments()
//     console.log(result)
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }

// readCount()

const ascending = async () => {
    try{
    const result = await TestModel.find({class:12}).sort({name:1})
    console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

ascending()

const descending = async () => {
    try{
    const result = await TestModel.find().sort({name:-1})
    console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}

descending()
