const express = require("express");

const app = express()

// app.get('/', (req, res) => {
//     res.send('<p>hello</p>')
// })

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('pages/index')
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
app.listen(3000, () => {
    console.log('listening on port 3000')
})