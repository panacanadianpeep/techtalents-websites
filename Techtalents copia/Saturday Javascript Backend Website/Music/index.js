const axios = require("axios");

/// Port number = 53849
const id = "9dd4ddc3546743a7ba79f561d227a93e";
const secret = "c2d604e429114d9499144be4f9ddff97";
const token = {};

function authenticate() {
    const authString = id + ":" + secret;
    const buffer = Buffer.from(authString);
    const encoded = buffer.toString("base64");

    console.log(encoded)

    const endpoint = "https://accounts.spotify.com/api/token";
    
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials")

    let request = axios ({
        method: "post",
        url: endpoint,
        data: params,
        headers: {
            Authorization: "Basic " + encoded
        }

    let authPromise = new Promise(resolve)
        request.then(response => {
            token.access = response.data.access_token
            token.timeLimit = Date.now() + response.data.expires_in * 1000
            console.log(token)

        }
    )}



function SearchArtist(artist) {
    axios({
        const endpoint = "https://api.spotify.com/v1/search ";
        method: "get";
        url: endpoint;
        headers:
        {
            Authorization: "Bearer " + token.access
        }
        params: {
            q: artist
            type: "artist"
        }
    }).then(response => {
        console.log(response.data)
    })
}

function SearchTrack(track) {
    axios({
        const endpoint = "https://api.spotify.com/v1/search ";
        method: "get";
        url: endpoint;
        headers:
        {
            Authorization: "Bearer " + token.access
        }
        params: {
            q: track
            type: "track"
        }
    }).then(response => {
        console.log(response.data)
    })
}

function GetRecommendations(artists, tracks) {
    const endpoint = "https://api.spotify.com/v1/recommendations"

    let artistParameter = artist.join(",");
    let trackParameter = track.join(",")

    axios  ({
        method: get,
        url: endpoint,
        headers {
            Authorization: "Bearer" + tokenl.access
        },
        params: {
            seed_artists = artistParameter
            seed_tracks: trackParameter
        }
    }).then(response => {
        console.log(response.data)
    });
}

authenticate().then(token => SearchArtist("Queen"))

/******************************************** */
/*                                            */
/*         EXPRESS SERVER CODE                */
/*                                            */
/******************************************** */

const app = express();
app.use(express.static(__dirname + "/static"));


app.get("/index.html", function(request, response) {
    response.sendFile("index.html", { root: __dirname });
});


app.get("/artist", function(request, response) {
    let artist = request.query.name

    searchArtist(artist).then(data => {
        response.send(data);
    })
})


app.get("/track", function(request, response) {
    let track = request.query.name

    searchTrack(track).then(data => {
        response.send(data);
    })
})

let port = 53849;
app.listen(port)

app.get("index/html")