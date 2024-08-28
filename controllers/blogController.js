const Blog = require("../models/blog")

const blog_index = (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then(blogs => res.render('pages/index', {
            blogs
        }))
        .catch(error => console.log(error))
}


const blog_details = (req, res) => {
    const {
        id
    } = req.params

    Blog.findById(id)
        .then(result => res.render('pages/blogDetails', {
            blog: result
        }))
        .catch(error => console.log(error))
}


const create_blog = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(error => console.log(error))
}

const blog_create_get = (req, res) => {
    res.render('pages/createBlog')
}

const blog_delete = (req, res) => {
    const {
        id
    } = req.params

    Blog.findByIdAndDelete(id)
        .then(result => res.json({
            redirect: '/blogs'
        }))
        .catch(error => console.log(error))
}

module.exports = {
    blog_index,
    create_blog,
    blog_delete,
    blog_details,
    blog_create_get
}