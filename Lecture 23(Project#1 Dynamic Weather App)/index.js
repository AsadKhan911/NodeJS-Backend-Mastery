const http = require('http')
const fs = require('fs')
const axios = require('axios')

const homeFile = fs.readFileSync('index.html', 'utf-8') //this homeFile variable now contains index.html file data

const replaceVal = (temporaryVal, orgVal) => {
    let Replacedata = temporaryVal.replace("{%City%}", orgVal.name)
    Replacedata = Replacedata.replace("{%Country%}", orgVal.sys.country)
    let temp = orgVal.main.temp-273.15
    Replacedata = Replacedata.replace("{%Temp%}", temp.toFixed(2))
    Replacedata = Replacedata.replace("{%MinTemp%}", orgVal.main.temp_min)
    Replacedata = Replacedata.replace("{%MaxTemp%}", orgVal.main.temp_max)
    Replacedata = Replacedata.replace("{%tempStatus%}" , orgVal.weather[0].main)
    return Replacedata
}
const server = http.createServer(async (req, res) => {
    if (req.url == '/') {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&appid=b6cd5a27fa21c71447a6ded422a7712a')
            //axios auto converted the json to object so no need to convert
            const objectData = response.data
            console.log(objectData)
            const realTimeData = replaceVal(homeFile, objectData)
            // console.log("Processed HTML:", realTimeData);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(realTimeData);
        }
        catch {
            console.error('Error fetching API data:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Server listening at port 8000")
})