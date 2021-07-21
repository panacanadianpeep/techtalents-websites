let keys

function setup() {
    keys = document.querySelectorAll(".key");
    console.log(keys);

    keys.forEach(function(key) {
        function removePlaying(event){
            if (key.classList.contains("playing") && event.propertyName == "transform") {
                key.classList.remove("playing");
                //find all audio files in the HTML
                let allAudio = document.querySelectorAll("audio")
                //Loop through all audio files
                allAudio.forEach(function(audio) {
                //find the key data written in the HTML 
                let audioKey = audio.dataset.key
                // Check if the key data is the same as the key is te same as the key pressed
                if (audioKey == key.children[0].innerText) {
                //Play the audio
                audio.currentTime = 0
                    audio.play()
                }
                
            })}
        }
        key.addEventListener("transitionend", removePlaying)
    })
}

function keyPressed(event) {
    console.log(event);

    for (let i = 0; i < keys.length; i++) {
        let keySymbol = keys[i].children[0].innerText;
        if (keySymbol == event.key) {
            keys[i].classList.add("playing");
        }
    }
}

window.addEventListener("load", setup);
window.addEventListener("keydown", keyPressed);

window.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 12; i++) {
        const snowflake = document.createElement("div")
        snowflake.innerText = "❄"
        snowflake.style.left = Math.random() *  window.innerWidth + "px"
        snowflake.classList.add("snowflake")
        document.body.append(snowflake)
        document.body.append(snowflake)
    }
})