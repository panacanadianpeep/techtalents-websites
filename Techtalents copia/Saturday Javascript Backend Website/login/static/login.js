let username, password

function setup() {
    username = document.getElementById("username")
    password = document.getElementById("password")
    username.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            password.focus()
        }
    })

    password.addEventListener("keypress", function(event) {
            if (event.key == "Enter") {
                connect()
            }
    })
}

function connect() {
    let url = "login-submit?username=" + username.value + "&password=" + password.value
    fetch(url).then(receive)
}

function receive(data) {
    data.text().then(result)
}

function result(text) {
    let hideable = document.querySelectorAll(".hideable")
    hideable.forEach(function(item) {
        item.style.display = "none"
    })

    let hidden = document.querySelector(".hidden")
    hidden.innerText = text
    hidden.style.display = "block"
}

window.addEventListener("load", setup)