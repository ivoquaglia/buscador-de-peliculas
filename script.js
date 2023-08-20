button = document.getElementById("searchButton")
button.addEventListener("click", searchMovies);


let api_key = "67524aa6618f8e7ee4975212b2572b8f";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImg = "https://image.tmdb.org/t/p/w500"
let resultadoContainer = document.getElementById("results");

function searchMovies() {
    resultadoContainer.innerHTML = "Cargando...";
    let searchInput = document.getElementById("searchInput").value;

    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results));
}


function displayMovies(movies) {
    resultadoContainer.innerHTML = "";

    if (movies.length === 0) {
        resultadoContainer.innerHTML = "<p> No se encontraron resultados para tu busqueda </p>"
        return;
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        let title = document.createElement("h2");
        title.textContent = movie.title;

        let releaseDate = document.createElement("p");
        releaseDate.textContent = `La fecha de lanzamiento fue: ${movie.release_date}`

        let posterPath = urlImg + movie.poster_path;
        let poster = document.createElement("img");
        poster.src = posterPath;

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)

        resultadoContainer.appendChild(movieDiv);

    });
}


