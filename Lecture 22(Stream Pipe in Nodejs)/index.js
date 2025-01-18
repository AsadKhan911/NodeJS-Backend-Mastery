const http = require('http')
const fs = require('fs')

let server = http.createServer((req , res ) => {
    let readStream = fs.createReadStream('StreamData.txt')
    readStream.pipe(res) //res is which we have to display on screen
})

server.listen(8000 , '127.0.0.1' , () => {
    console.log("Activated port 8000")
})

//This is the simple way in which we can do data streaming from one source toanother without any events.