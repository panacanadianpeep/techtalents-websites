const mysql = require("mysql")

const options = {
    host: "localhost",
    user: "sebastian",
    password: "Wildsebastian",
    database: "sebastian"
}

let connection = mysql.createConnection(options)
connection.connect()

connection.query("SHOW TABLES IN sebastian", function(error, result) {
    if (result.find(function(table) {
        if (table.Tables_in_sebastian == "users"){
            return table
        }
    })) { 
        console.log("The users table has already been created")
    }

    else {
        connection.query("CREATE TABLE users (username TEXT, password TEXT)")
    }

})

