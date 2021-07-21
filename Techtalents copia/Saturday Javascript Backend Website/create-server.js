const readline = require("readline")
const fs = require("fs").promises
const ecosystem = require("./ecosystem.config.js")


// Setup the readline module so it knows where to read and write to
const readlineOptions = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Ask questions for user input
readlineOptions.question("Choose server name: ", function(serverName) {
    console.log("You entered: " + serverName)

    readlineOptions.question("Choose a server port: ", function(serverPort) {
        console.log("Server port: " + serverPort)

        // Run our main functions
        let folderPromise = createServerFolder(serverName)
        let proxyPromise = createProxy(serverName, serverPort)
        let configPromise = updateConfig(serverName)
        let promises = [folderPromise, proxyPromise, configPromise]

        // Once all promises are done, run the final function
        Promise.all(promises).then(process.exit)
    })
})

// End the program once where are finished
readlineOptions.on("close", function(params) {
    process.exit(0)
})


function createServerFolder(serverName) {
    // Create the folder
    let folderPromise = fs.mkdir(serverName)

    folderPromise.then(() => {
        let filePromise = fs.writeFile(serverName + "/index.js", "")
        return filePromise
    })
}

function createProxy(serverName, serverPort, callback) {
    // Define proxy file and folder locations
    let folderLocation = "../public_html/" + serverName
    let fileLocation = folderLocation + "/.htaccess"

    // Create proxy code with the correct port number
    let htaccess = `<IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteCond %{SERVER_PORT} !^${serverPort}$
        RewriteRule ^(.*) http://%{SERVER_NAME}:${serverPort}/$1 [P]
    </IfModule>`

    // Create proxy folder in public_html
    let folderPromise = fs.mkdir(folderLocation)
    folderPromise.then(() => {
        let filePromise = fs.writeFile(fileLocation, htaccess)
        return filePromise
    })
}

function updateConfig(serverName) {
    // Check the current servers for conflicts
    let apps = ecosystem.apps
    for (let app of apps) {
        if (app.name == serverName) {
            console.log("A server with that name already exists!")
            process.exit()
        }
    }

    // Add the new server configuration
    let newServer = {
        name: serverName,
        script: serverName + "/index.js",
        watch: serverName + "/index.js"
    }
    apps.push(newServer)

    // Write the configuration to the ecosystem file
    let ecosystemString = "";
    ecosystemString += "module.exports = {\n"
    ecosystemString += "    apps: [\n";
    for (let app of apps) {
        ecosystemString += "        {\n"
        ecosystemString += "            name: '" + app.name + "',\n"
        ecosystemString += "            script: '" + app.script + "',\n"
        ecosystemString += "            watch: '" + app.watch + "'\n"
        ecosystemString += "        },\n"
    }
    ecosystemString += "    ]\n"
    ecosystemString += "}\n"

    let filePromise = fs.writeFile("ecosystem.config.js", ecosystemString)
    return filePromise
}