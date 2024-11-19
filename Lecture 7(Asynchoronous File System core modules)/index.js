const fs = require('fs')

//Creating and writing in an asynchoronous file
fs.writeFile('textFile.txt' , 'This is my text file' , (err) => {
    if(err){ //agar error ata h
        console.log(err)
    }
    else{
        console.log("Task 1 completed")
    }
})

//Appended data into asynchoronous file
fs.appendFile('textFile.txt' , ' This is the appended data' , (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Task 2 completed")
    }
})

/*Reading data from the file , this include two arguments in callback one is err and second is
data to be read , err must be the first argument always*/
fs.readFile('textFile.txt' , 'utf-8' , (err , data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

