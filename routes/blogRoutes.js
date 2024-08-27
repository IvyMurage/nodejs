const express = require('express')
const Blog = require('../schema/blog')
const router = express.Router()

router.get('/', (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then(blogs => res.render('pages/index', {
            blogs
        }))
        .catch(error => console.log(error))
})

router.get('/create', (req, res) => {
    res.render('pages/createBlog')
})


router.get('/:id', (req, res) => {
    const {
        id
    } = req.params
    Blog.findById(id)
        .then(result => res.render('pages/blogDetails', {
            blog: result
        }))
        .catch(error => console.log(error))
})


router.post('/', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(error => console.log(error))
})


router.delete('/:id', (req, res) => {
    const {
        id
    } = req.params
    Blog.findByIdAndDelete(id)
        .then(result => res.json({
            redirect: '/blogs'
        }))
        .catch(error => console.log(error))
})

module.exports = router