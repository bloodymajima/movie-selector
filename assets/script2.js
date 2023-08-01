
// Generate button fetches random movie from api
const urlForPoster = 'http://image.tmdb.org/t/p/w500'
const randomNumber = Math.floor(Math.random() * 566)
var title;
var poster;
var summary;
const movieDBAPI = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + randomNumber + '&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&apiKey=51460ea6e050952a835f989f5534065e'
console.log(randomNumber);
function RandomMovie() {
fetch(movieDBAPI, {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTQ2MGVhNmUwNTA5NTJhODM1Zjk4OWY1NTM0MDY1ZSIsInN1YiI6IjY0YzQ1ZjA3ZWMwYzU4MDBlODBiMzZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8YQ-iktr5Z81LBFOrqWmbmt1O82PsVJk8qXLAvZx72I'
  }
}).then((response) => {
  return response.json()
}).then((data) => {
  const randomMovie = data.results[Math.floor(Math.random() * data.results.length)]
  console.log(randomMovie);
  console.log(randomMovie.title)
  title = randomMovie.title;
console.log(urlForPoster + randomMovie.poster_path)
 poster = urlForPoster + randomMovie.poster_path
 console.log(randomMovie.overview)
 summary = randomMovie.overview

 }) 
 .then(()=>{
   getMovie(title, poster, summary)

 })
}
// const urlForPoster = 'http://image.tmdb.org/t/p/w500'

const drinkDBAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

console.log(randomNumber);
fetch(drinkDBAPI, {
}).then((response) => {
  return response.json()
}).then((data) => {
  const randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)]
  console.log(randomDrink);

});

const youtubeAPI = 'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCBp-H6Xzxmc5vbdG9KKx53znHWxVz85qo'
fetch(youtubeAPI, {
}).then((res) => {
  return res.json()
}).then((data) => {
  console.log(data)
})

const homePage = document.querySelector('#homepage');
const GenButton = document.querySelector('#start-button');
const movieTitleEl = document.getElementById('movie-title')
const recomendMovie = document.getElementById('recommendation')
const trailerBtn = document.getElementById('trailer')
const newMovieBtn = document.getElementById('generate')
const posterImg = document.getElementById('poster')
const movieSummaryEl = document.getElementById('summary')
// console.log(newMovieBtn)

homePage.classList.remove('hide');
recomendMovie.classList.add('hide');

GenButton.addEventListener('click', RandomMovie)
// trailerBtn.addEventListener('click', getTrailer)
newMovieBtn.addEventListener('click', ()=> {
  console.log("click")
  RandomMovie();
})


function getMovie(movieTitle, poster, movieSummary) {
  homePage.classList.add('hide');
  recomendMovie.classList.remove('hide');
posterImg.setAttribute("src", poster)
movieTitleEl.textContent = "Movie: " + movieTitle
movieSummaryEl.textContent = movieSummary
}

// Nav bar link for movie quiz takes you to the start page, genre link takes you to movie genres if thats all you want
function myFunction() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdownBtn')) {
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// button pops up with a movie recommendation, a button for a trailer or related video on youtube, then a button to run the function again