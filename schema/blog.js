const mongoose = require('moongose')

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    name:string,
    snippet:string,
    body:string
})

const BLOG = mongoose.model('Blog', BlogSchema)

module.exports = BLOG