function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)
    
    var giphyApiKey = "91775321da9749b79cbfdf9de1d3ad3c"
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${giphyApiKey}`

    console.log(giphyApiUrl)

    fetch(giphyApiUrl)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log(json.data[0].images.fixed_height.url)
            var imgPath = json.data[0].images.fixed_height.url
            var img = document.getElementById('image')
            img.setAttribute("src", imgPath)
        })

}
