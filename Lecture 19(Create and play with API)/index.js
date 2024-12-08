const http = require('http') 
const fs = require('fs')

let JSONdata = fs.readFileSync('API.json' , 'utf-8')
let objectData = JSON.parse(JSONdata)

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end("Hey this is HOME page")
    }
    else if(req.url == '/about'){
        res.end("Hey this is ABOUT page")
    }
    else if(req.url == '/contact'){
        res.end("Hey this is CONTACT page")
    }
    else if(req.url == '/apiinfo'){
        res.writeHead(200 , {"CONTENT-TYPE" : "application/json"})
        res.end(JSONdata) 
    }
   else{
    res.writeHead(404 , {"CONTENT-TYPE" : "text/html"})
    res.end("ERROR  NOT FOUND!")
   }
})

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log("Listening to the port no 8000")
})
//This is the same code as in routing lecture we just add another else if(req.url=='/APIinfo' to get api info=)
