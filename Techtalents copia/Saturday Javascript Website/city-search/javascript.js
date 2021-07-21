let cities
url = https://gist.githubusercontent.com/tt-n-walters/26659d320203095f6a824b6c90af5326/raw/36a6fb4aea08d3641a39af99887bb6522f47d032/cities.json

fetch(url).then(blob => blob.json()).then(json => cities = json)
function setUp() {
    input = document.getElementById("search")
    results = document.getElementById("search")

    input.addEventListener("keyUp")
}
window.addEventListener("load", setup)
