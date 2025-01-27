const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, '/public');
const viewPath = path.join(__dirname, '/templates/views');
const partialsPath = path.join(__dirname, '/templates/partials');

// Set view engine
app.set('view engine', 'hbs');
app.set('views', viewPath);

// Set partials
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// Set template engine route
app.get('/', (req, res) => {
    res.render('index'); // No need for '.hbs'
});

app.get('/about', (req, res) => {
    res.render('about'); // No need for '.hbs'
});

app.get('/contact', (req, res) => {
    res.render('contact'); // No need for '.hbs'
});

app.get('/about/*' , (req,res)=>{
    res.render('404' , {
        page : req.url
    })
})

app.get('*' , (req,res)=>{
    res.render('404' , {
        page : req.url
    })
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
