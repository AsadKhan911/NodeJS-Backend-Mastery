//NPM PACKAGES
const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

//MODULES
const connection = require('./db/conn')
const regModel = require('./models/registration')
const auth = require('./middleware/auth')

//PORT NUMBER
const port = process.env.PORT || 3000

//PATHS
const staticPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../public/templates/views')
const partialsPath = path.join(__dirname, '../public/templates/partials')

app.use(express.static(staticPath))
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//MIDDLE WARES
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false })) //Must write when getting data from html page instead of just postman

//GET Requests
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/jwtverify', auth, (req, res) => {
    // console.log(`cookie is: ${req.cookies.jwt}`)
    res.render('jwtverify')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/login', (req, res) => {
    res.render('login')
})

//POST Requests
app.post('/signup', async (req, res) => {
    try {
        const password = req.body.password;
        const confirmPassword = req.body.cpassword;
        if (password === confirmPassword) {
            const submitFormData = new regModel({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.inlineRadioOptions,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                password: password, //or req.body.password if html input name and schema key name is same use can just write like this
                confirmpassword: req.body.cpassword
            })

            const token = await submitFormData.generateToken() //submitFormData is an instance of regModel. Read note for proper understanding
            res.cookie("jwt", token, { maxAge: 10000 }) //cokie name jwt and its value is token , SENDING TOKEN AS A COOKIE IN BROWSER WHILE SIGNING UP
            const saveData = await submitFormData.save()
            res.render('index')
        }
        else {
            res.send("SOME FIELD MISSING")
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
})

app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await regModel.findOne({ email: email })

        if (useremail === null) { //if no documents found , .findOne returns null
            // No user found with the provided email
            return res.send("INVALID EMAIL!");
        }

        const matchPassword = await bcrypt.compare(password, useremail.password)

        if (matchPassword) {
            const token = await useremail.generateToken()
            res.cookie("jwt", token , { maxAge: 10 * 1000 }) //Valid for 10 seconds, just an example
            res.status(200)
            res.render('welcome')
        }
        else {
            res.send("INVALID PASSWORD!")
        }
    }
    catch {
        res.status(500).send("INVALID CATCH CREDENTIALS!")
    }
})

app.get('/logout', auth , async (req, res) => {
    try {

        req.user.tokens = req.user.tokens.filter((currentElement)=>{ //filtering tokens
            return currentElement.token !== req.token;
        })
        await req.user.save() //Saving to database with deleted jwt token 
        res.clearCookie('jwt') //clearning cookie from browser
        res.render('login.hbs')
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})

//Connection function from conn.js file
connection()