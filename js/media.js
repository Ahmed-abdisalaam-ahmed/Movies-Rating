const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");


async function moviesLoadApi(){
  try {
    const response = await fetch('/data/100mov.json');
    const result = await response.json();
    moviesList(result);
  } catch (error) {
    console.error(error);
  }
};

function moviesList(data) {
    const movieList = document.querySelector(".linerate");
    movieList.innerHTML = "";
    movieData = data;
    
    movieData.forEach((datas) => {
      const moviesitem = document.createElement("div");
      moviesitem.className = "movie-card";
      moviesitem.innerHTML = `
        <div class="movie-info">
          <div class="item-info">
            <img src="${datas.primaryImage}" alt="Movie Poster" id="movie-img">
            <div class="item-text">
               <h2 id="movie-title">${datas.primaryTitle}</h2><br>
               <p id="movieStaryear">${datas.startYear} • ${datas.genres[0]}, ${datas.genres[2]} </p>
               <p id="movieType">${datas.type}</p>
               <h4 id="movieRelease">${datas.releaseDate}</h4>
            </div>
          </div>
          <div class="btn-details">
            <button class="btn-watchlist"><i class="fa-solid fa-bookmark" style="color: aliceblue;"> Watch List</i></button>
            <button class="btn-trailer"><i class="fa-solid fa-film"> Watch trailer</i></button>  
          </div>
        </div>
        <div class="card-discription">
          <p id="movie-description">${datas.description}</p>
        </div>  
        `;
      movieList.appendChild(moviesitem);
      const btntrailer = moviesitem.querySelector('.btn-trailer');
      const watchlist = moviesitem.querySelector(".btn-watchlist");
      btntrailer.addEventListener('click' , ()=> trailerModel(datas.trailer));

      watchlist.addEventListener("click", () => {
      showupInLocalStorage(
        datas,
        datas.primaryTitle,
        datas.primaryImage,
        datas.startYear,
        datas.endYear,
        datas.type,
        datas.genres,
        datas.averageRating,
        datas.numVotes,
        datas.runtimeMinutes,
        datas.metascore
      );
      });
    });
  };
  // model
function trailerModel(trailer){
  const model = document.querySelector('#movie-modal');
  const tvmoviePlayer = document.querySelector('#movie-player');

  const url = new URL(trailer);
  const videoId = url.searchParams.get("v");
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  if(videoId){
    tvmoviePlayer.src = embedUrl;
    model.style.display = 'block';
    document.querySelector('#close-modal').addEventListener('click' , stopPlayer);
  }
}
// stop video 
function stopPlayer(){
  const model = document.querySelector('#movie-modal');
  const tvmoviePlayer = document.querySelector('#movie-player');
  tvmoviePlayer.src = "";
  model.style.display = "none";
}
window.onclick = function(event){
  const model = document.querySelector('#movie-modal');
  if (event.target == model){
      stopPlayer();
  }
}
// LocalStorage
function showupInLocalStorage(
  datas,
  primaryTitle,
  primaryImage,
  startYear,
  endYear,
  type,
  genres,
  averageRating,
  numVotes,
  runtimeMinutes,
  metascore
) {
  const post = {
    id: datas.id,
    Title: primaryTitle,
    Image: primaryImage,
    startYear: startYear,
    endYear: endYear,
    type: type,
    genres: genres,
    averageRating: averageRating,
    numVotes: numVotes,
    runtimeMinutes: runtimeMinutes,
    metascore: metascore,
    completed: "false",
  };
  const posts = GetPostThelocalStorage();

  const alreadyExists = posts.some((p) => p.id === post.id);

  if (!alreadyExists) {
    SavePostToLocalstorage(post);
  }
  indexlist();
}
function SavePostToLocalstorage(gets) {
  const posts = GetPostThelocalStorage();
  posts.push(gets);
  localStorage.setItem("posts", JSON.stringify(posts));
}
function GetPostThelocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("posts")) || [];
  return tasks;
}
function LoadPostFromLocalStorage() {
  // gettting the loacl data
  const posts = GetPostThelocalStorage();
  posts.forEach((post) => {
    indexlist(post);
  });
}
function indexlist() {
  const tasks = JSON.parse(localStorage.getItem("posts")) || []; // replace "yourKey" with the actual key
  const length = tasks.length;
  // console.log(length);
  const span = document.querySelector(".index-watclist");
  span.textContent = length;
  return true
}
// Event documents 
toggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
document.addEventListener("DOMContentLoaded",()=>{
    moviesLoadApi();
    indexlist();
  })