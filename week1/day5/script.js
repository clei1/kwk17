function sendMovieRequest() {
    var title = document.getElementById("input").value
    title = title.split(' ').join('+')

    var movieApiKey = "e6aa067ea41a844458f5aaba21ad2ebd"
    var movieApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=e6aa067ea41a844458f5aaba21ad2ebd&query=${title}`

    console.log(movieApiUrl)

    fetch(movieApiUrl)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            for (var int = 0; int < json.results.length || int < 10; int++) {
                console.log(json.results[int].title)
                console.log(json.results[int].original_title)
            }
        })

}
