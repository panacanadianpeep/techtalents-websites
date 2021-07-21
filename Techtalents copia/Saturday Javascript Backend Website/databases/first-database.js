const mysql = require("mysql")
let options = {
    host: "localhost",
    user: "webavanzada",
    password: "saturdaydatabase"

}

let connection = mysql.createConnection(options)
connection.connect()

connection.query("SHOW TABLES IN webavanzada", logResult)

function logResult(error, result) {
    console.log(result)
}

connection.end()