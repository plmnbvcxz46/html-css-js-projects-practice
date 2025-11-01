const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const search = document.querySelector(".input");
const main = document.querySelector(".main");
const form = document.querySelector(".form");

getMovies(API_URL);

async function getMovies(url) {
  console.log("get");
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie, idx) => {
    console.log(idx);
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <div class="movie">
        <img alt=${title} src = "${IMG_PATH + poster_path}"/>
        <div class="introduction">
          <h1 class="title">${title}</h1>
          <div class="score">
            <small class = ${getcolor(vote_average)}>${vote_average}</small>
          </div>
        </div>
        <div class="overview">
          <h1>overview</h1>
          <p>${overview}</p>
      </div>`;
    main.appendChild(movieEl);
  });
}

function getcolor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const iterm = search.value;
  search.value = "";
  if (iterm && iterm !== "") getMovies(SEARCH_API + iterm);
  else {
    getMovies(API_URL);
  }
});
