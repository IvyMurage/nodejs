const fs = require('fs')


const readStream = fs.createReadStream('./first-app/blog.txt', );
const writeStream = fs.createWriteStream('./first-app/blog1.txt')


readStream.on('data', (chunk) => {
    console.log('...new chunk...')
    writeStream.write(chunk)
    console.log(chunk)
})