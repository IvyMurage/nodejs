const express = require("express");
const {
    default: mongoose
} = require("mongoose");
require('dotenv').config();
const morgan = require("morgan");

const app = express()
const blogRoutes = require('./routes/blogRoutes')

app.use(morgan('tiny'))

app.use(express.static('public'))

app.set('view engine', 'ejs')

// connect to mongodb
mongoose.connect(process.env.DATABASE_CONNECTION)
    .then(result => app.listen(3000, () => {
        console.log('listening on port 3000')
    }))
    .catch(error => console.log(error))


app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.render('pages/not-found')
})
