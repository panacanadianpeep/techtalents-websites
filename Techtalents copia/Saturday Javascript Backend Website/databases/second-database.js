const mysql = require("mysql")
let options = {
    host: "localhost",
    user: "webavanzada",
    password: "saturdaydatabase"

}

let connection = mysql.createConnection(options)
connection.connect()

connection.query("SHOW COLUMNS IN webavanzada.people", logResult)

function logResult(error, result) {
    console.log(result)
}

connection.end()