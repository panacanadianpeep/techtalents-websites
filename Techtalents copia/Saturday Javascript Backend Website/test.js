const fs = require("fs").promises

fs.writeFile("test1.txt", "", () => {})

function writeFileSlow() {
    setimeout(function() {
        fs.writeFile("test2.txt", "", () => {})
    }, 1000)
}

fs.writeFile("test1.txt", "", exit)
writeFileSlow()

function exit(){
    process.exit()
}

process.exit()