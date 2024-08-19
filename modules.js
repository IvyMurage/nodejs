const {people, age} = require('./people')
console.log(
    'people:', people, 
    'age:', age
)

const os = require('os')
console.log(os.platform(), os.homedir())