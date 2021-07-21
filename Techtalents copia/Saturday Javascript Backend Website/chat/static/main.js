let messages
let button
let socket
let input

function setup() {
    socket = io();
    button = document.querySelector("#input > button");
    input = document.querySelector("#input > input");
    messages = document.querySelector("#messages > ul");

    button.addEventListener("click", sendMessage);

    socket.on("message", recieveMessage);
    socket.on("username", recieveUsername)
}


function sendMessage() {
    socket.emit("message", input.value)
}

function recieveMessage(messageData) {
    let message = document.createElement("li");
    message.innerText = messageData;

    messages.appendChild(message)
}

function recieveUsername(username) {
    document.getElementById("username").value = username
}

window.addEventListener("load", setup);
