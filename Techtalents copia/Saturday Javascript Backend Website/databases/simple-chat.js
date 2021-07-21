const mysql = require("mysql")
const readline_sync = require(readline_sync)

let options = {
    host: "localhost",
    user: "webavanzada",
    password: "saturdaydatabase"

}

let connection = mysql.createConnection(options)
connection.connect()

let name = "sebastian"
let message = "HI"
let query = "INSERT INTO webavanzada.messages VALUES ('" + name + "', '" + message + "')"

connection.query(query)

connection.end()