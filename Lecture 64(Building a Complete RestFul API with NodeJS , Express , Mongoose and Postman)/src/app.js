const express = require('express')
const app = express()
require('./db/conn')

const routerModel = require('./routers/menRankingsRouter')
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(routerModel)

app.listen(port , ()=>{
    console.log(`running at port ${port}`)
})