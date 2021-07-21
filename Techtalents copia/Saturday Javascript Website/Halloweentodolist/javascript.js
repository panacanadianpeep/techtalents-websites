let input, list;
let listItems = [];

function setup() {

    input = document.getElementById("input");
    list = document.getElementById("list");

    input.addEventListener("keypress", keyPressed);
}

function keyPressed(event) {
    if (event.key == "Enter") {

        let data = {
            text: input.value,
            completed: false
        }
        // Delete their input from the screen
        input.value = "";
        // Add the JS Object to our array of Objects
        listItems.push(data);
        addDataToPage(data);
    }
}

function addDataToPage(data) {
    let item = document.createElement("li");
    item.innerText = data.text;
    
    list.appendChild(item);
}

function loadFromLocalStorage(){
    let dataAsString = localStorage.getItem()
    listItems = JSON.parse(dataAsString);
    
    listItems.foreach(addDataToPage);
}

function saveToLocalStorage(){
    let dataAsString = JSON.stringify(listItems("todo-list-items"));
    listItems = JSON.parse(dataAsString)
    localStorage.setItem("todo-list-items", dataAsString)
}

window.addEventListener("load", setup);