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
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.use((req, res) => {
    res.render('pages/not-found')
})
app.listen(3000, () => {
    console.log('listening on port 3000')
})