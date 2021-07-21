const fs = require("fs")

const filename = process.argv[2]

const contents = fs.readFileSync(filename)
console.log(contents.toString().split('\n').length - 1)