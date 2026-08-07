require("./data/data");


const path = require("path");
const filePath = path.join(__dirname, "data", "data.txt");
console.log(filePath);


// const path = require('path')
// const filePath = path.join(__dirname, 'data', 'data.txt')
// console.log(filePath)

// const process = require('process')
// console.log(process.argv)
// console.log(process.argv[2])

require('dotenv').config()
console.log(process.env.PORT)