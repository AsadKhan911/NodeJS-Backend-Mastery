const fs = require('fs')

//Creat a file and named bio.txt and some data into it
fs.writeFileSync('bio.txt' , 'This is the data in bio.txt file')

//Adding more data into the bio.txt file
fs.appendFileSync('bio.txt' , ' This is the appended data')

//Read the data without getting the buffer data at first
let data = fs.readFileSync('bio.txt')
let str_data = data.toString()
console.log(str_data)

//OR
fs.readFileSync('bio.txt' , 'utf-8') //utf-8 is simply to decode the code to string from buffer

//Rename the file name to mybio.txt
fs.renameSync('bio.txt' , 'mybio.txt')

//Now delete both the file and folder
fs.unlinkSync('mybio.txt')

//To delete a folder 
fs.rmdirSync('folderName')