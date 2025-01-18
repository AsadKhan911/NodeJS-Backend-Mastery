const http = require('http')
const fs = require('fs')

const server = http.createServer()

// server.on('request' , (req,res)=>{
//    fs.readFile('Bufferdata.txt' , (err , data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         res.end(data.toString())
//     }
//    })
// })

// server.listen(8000 , '127.0.0.1' , ()=>{
//     console.log('Listening to port 8000')
// })
/*Till here this is the old method to read the file , means we are not reading it through streaming, it is first
all load then it shows the data on the screen, but we want jese jese read ho sth sth wo screen pr dikhata rhe
means streaming*/

//2nd way to read data which is streaming

server.on('request' , (req , res) => {
    const StreamData = fs.createReadStream('Bufferdata.txt') //this is a also fs module property no worries almost same

    StreamData.on('data' , (chunkdata) => { //calling event data function as in notes
        res.end(chunkdata)
    })

    StreamData.on('end' , () => { //calling event end function as in notes
        res.end()
    })

    StreamData.on('error' , (err) => {
        res.end(`file not found with error ${err}`)
    })
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('Listening to port 8000')
})