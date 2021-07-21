const express = require("express");
const io = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const socketServer = io(server);

app.use(express.static(__dirname + "/static"));


app.get("/index.html", function (request, response) {
    response.sendFile("index.html", { root: __dirname });
})
app.get("/javascript", function(request, response) {
    response.sendFile("index.js", { root: __dirname });
})

function createUsername() {
    let number = Math.floor(Math.random() * 8999 + 1000)
    return "user" + number
}

function newConnection(socket) {
    console.log("Someone new joined!");
    socket.emit("username", createUsername())
    
    socket.on("disconnect", newDisconnection);
    socket.on("message", newMessage);
}
function newDisconnection(socket) {
    console.log("Someone left!");
}

function newMessage(message) {
    console.log("Received the message: " + message);
    socketServer.emit("message", message);
}


// When we get a new connection, run our function
socketServer.on("connection", newConnection);


server.listen(27780);