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

const updateDocument = async (_id) => {
    try{
        const result = await TestModel.findByIdAndUpdate({_id} , {$set : {name : "HAFEEZ ALI AHMED KHAN"}} , {new:true})
        console.log(result)
    }
    catch{

    }
}

updateDocument('66ca495dd00968154148df94')