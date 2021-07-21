const mysql = require("mysql")

const options = {
    host: "localhost",
    user: "sebastian",
    password: "Wildsebastian",
    database: "sebastian"
}


const express = require("express")

const app = express()

app.use(express.static(__dirname + "/static"))


app.get("/index.html", function(request, response){
    response.sendFile("index.html", {root:__dirname })
})

app.get("/login-submit", loginSubmit)

function loginSubmit(request, response) {
     if (request.query.username) {
         if (request.query.password) { 
            let username = request.query.username
            let password = request.query.password
            let connection = mysql.createConnection(options)
            connection.connect()

            connection.query("SELECT * FROM users", function(error, result) {
                console.log(error)
                result.forEach(function(row) {
                    if (username == row.username) {
                        if (password == row.password) {
                                response.send("Right password")
                        } else {
                            response.send("Invalid password")
                        }
                    }
                });
                response.send("Invalid username")
            })
             

                
            } else {
                response.send("No password")
         }
     } else {
        response.send("No username")
     }
}

app.listen(27770)