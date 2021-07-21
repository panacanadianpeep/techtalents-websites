const mysql = require("mysql")
let options = {
    host: "localhost",
    user: "webavanzada",
    password: "saturdaydatabase"

}

let connection = mysql.createConnection(options)
connection.connect()

connection.query("SELECT `money` FROM webavanzada.people", calculateAverageMoney)

function prettyFormatData(error, result) {
    result.forEach(function(r) {
        let name = r.name
        let age = r.age
        let money = r.money
        let eyeColour = r.eyeColour
        console.log(name + " is " + age + " has " + eyeColour + " eyes, and has " + money + " $")
    })
}

function calculateAverageMoney(error, result) {
    if (error) throw error
    let total = 0
    result.forEach(function(r) {
        total += r.money
    })
    let average = total / result.length
    console.log("Average amount of money is: " + average)
}

connection.end()