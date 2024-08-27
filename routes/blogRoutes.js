const express = require('express')
const Blog = require('../schema/blog')
const router = express.Router()

router.get('/blogs', (req, res) => {
    Blog.find()
        .then(blogs => res.render('pages/index', {
            blogs
        }))
        .catch(error => console.log(error))
})

router.post('/blogs', (req, res) => {
    console.log(req.body)
})

router.get('/blogs/create', (req, res) => {
    res.render('pages/create')
})
