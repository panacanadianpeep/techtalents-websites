
fetch("sentences.txt").then(recieve)

function recieve(data) {
    data.text().then(result)
}

function result(text) {
    let sentences = text.split("\n")
    let words = []
    for (let i = 0; i < sentences.length; i++) {
        words.push(...sentences[i].split(" "))
    }
    words.sort()
    let undesired = ["!", "!.", "%", "%.", "%)", "%("]
    words = words.filter(function(word) {
        if (undesired.includes(word)) {
            return false
        }
        else {
            return true
        }
    })

    let ingWords = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].endsWith("ing")) {
            ingWords.push(words[i])
        }
    }
}