const express = require("express");
const {
    default: mongoose
} = require("mongoose");
require('dotenv').config();
const morgan = require("morgan");

const app = express()
const Blog = require('./schema/blog')

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
    res.redirect('/blogs')
})


app.get('/blogs', (req, res) => {
    Blog.find()
        .then(blogs => res.render('pages/index', {
            blogs
        }))
        .catch(error => console.log(error))
})

app.use((req, res, next) => {
    console.log(req.path)
    console.log(req.hostname)
    next()
})



app.get('/blog-app', (req, res) => {
    const blog = new Blog({
        title: 'My blog',
        snippet: 'About my blog',
        body: 'This is my blog'
    })

    blog.save()
        .then(result => res.send(result))
        .catch(error => console.log(error))
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