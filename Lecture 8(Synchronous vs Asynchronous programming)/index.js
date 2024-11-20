const fs = require('fs')

//We will see which method waits for the next command and which not

//Synchronous method
let data = fs.readFileSync('textFile.txt' , 'utf-8')
console.log(data)
console.log("After calling the synchoronous method")

/*As we can see it waits synchoronous method to display its result then goes for after command you can see 
in terminal*/

//Asynchronous method
let Adata = fs.readFile('textFile.txt' , 'utf-8' , (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log("After the asynchronous method")
/*As we can see it doesnot waits Asynchoronous method to display its result directly goes for 
after command because asynchoronous takes some time to display, you can see in terminal*/