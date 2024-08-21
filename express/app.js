const express = require("express");

const app = express()

// app.get('/', (req, res) => {
//     res.send('<p>hello</p>')
// })

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.use((req, res) => {
    res.sendFile('./views/not-found.html', {root: __dirname})
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})