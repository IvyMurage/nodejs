const express = require("express");
const { default: mongoose } = require("mongoose");
require('dotenv').config();
const morgan = require("morgan");

const app = express()


// app.get('/', (req, res) => {
//     res.send('<p>hello</p>')
// })

// this is a middleware 

// app.use(morgan('tiny'))

// connect to mongodb
mongoose.connect(process.env.DATABASE_CONNECTION)
.then(result => app.listen(3000, () => {
    console.log('listening on port 3000')
}))
.catch(error => console.log(error))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.use((req, res, next) => {
    console.log(req.path)
    console.log(req.hostname)
    next()
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})
app.get('/blogs/create', (req, res) => {
    res.render('pages/create')
})
app.use((req, res) => {
    res.render('pages/not-found')
})


