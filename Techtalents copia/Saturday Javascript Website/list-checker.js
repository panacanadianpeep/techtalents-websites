const fs = require("fs")

fs.readFile("names.txt", fileRead)

function fileRead(error,data) {
    const names = data.toString().split("\n")
    if (names.includes(process.argv[2])) {
        console.log("Ya")
    }
    else {
        console.log('Nah')
    }
}