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

const TestModel = new mongoose.model('TestModel' , testSchema)

const deleteDocument = async (_id)  =>{
    try{
        const result = await TestModel.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

deleteDocument('66c7b0ff0e4b8997b81382f4')