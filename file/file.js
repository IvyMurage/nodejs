const fs = require('fs')


// reading file
fs.readFile('./first-app/logger.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})


//wrirting file

fs.writeFile('./first-app/logger.txt', 'hello world', () => {
console.log('file was written')
})
fs.writeFile('./first-app/logger1.txt', 'hello there!', () => {
    console.log('file was written')
})


// creating a folder

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
    
        console.log('folder created')
    })
}
else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }

        console.log('folder deleted')
    })
}


// removing a file

if(fs.existsSync('./assets/deleted.txt')){
    fs.unlink('./assets/deleted.txt', (err) => {
        if(err)
            console.log(err)
        console.log('deleted!')
    })
}
