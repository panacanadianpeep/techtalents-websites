let button, dog;

function setup() {

    button = document.getElementById("button")
    dog = document.getElementById("dog")

    button.addEventListener("click", connect)
}

function connect() {
    //connect to API, then run the recieve function
    fetch("https://random.dog/woof.json").then(recieve)
}

function recieve(data) {
    //Once we recieve the dat, convert it ot the JSON format, and run the result function
    data.json().then(result) 
}

function result(json) {
    console.log(json)
    
    let image = document.createElement("img")
    image.src = json.url
    if(dog.firstChild) {
        dog.firstChild.remove();
    }
    image.width = window.innerWidth -30
    image.style.maxHeight = "85vh"
    dog.appendChild(image)
}

window.addEventListener("load",setup)