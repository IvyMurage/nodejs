const http = require('http')
const fs = require('fs')
// req contains information about the request sent from the browser
// res used to send a response to the client or browser


/**
 * This server is designed to handle incoming HTTP requests from clients        (usually web browsers).
 * 
 * The req (request) object represents the incoming request from the client. It contains information like the URL being requested, HTTP method (GET, POST, etc.), headers, and any data sent with the request
 * 
 * The res (response) object is what the server will use to send a response back to the client
 * 
 * res.end() is used to end the request. 
 * res.write() used to send the response to the client
 */
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')

    let path = './client-server/views/'

    switch(req.url){
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        default:
            path += 'not-found.html'
            break;
    }


    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})



// means we will pay atten
// port numbers are like doors into a computer
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})