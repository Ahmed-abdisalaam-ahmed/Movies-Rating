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
      const btntrailer = moviesitem.querySelector('.btn-trailer')
      btntrailer.addEventListener('click' , ()=> trailerModel(datas.trailer));
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
// // localStorage
// function Addingpost(event){
//   event.preventDefault();
//   // console.log("help memmmm");

//     const Title = moviesList.getElementById('movie-title');
//     const imgMovie = moviesList.getElementById('movie-img');
//     const movieStaryear = moviesList.getElementById('movieStaryear');
//     const movieType = moviesList.getElementById('movieType');
//     const moviedescription  = moviesList.getElementById('movie-description');
//     const movieRelease  = moviesList.getElementById('movieRelease');


//       const get = {
//           id :data.id,
//           Title: Title.value,
//           Image:imgMovie.value,
//           startYear:movieStaryear.value,
//           releaseDate:movieRelease.value,
//           movieType:movieType.value,
//           description:moviedescription.value,
//       }
//       SavePostToLocalstorage(get);


//   Title.value = '';     
//   imgMovie.value = '';     
//   movieStaryear.value = ''; 
//   moviedescription.value = '';     
//   movieRelease.value = '';     
//   movieType.value = ''; 
  
// }
// function SavePostToLocalstorage(tasks){
//   const tasks = GetPostThelocalStorage();
//   tasks.push(post)
//   localStorage.setItem("media" , JSON.stringify(media));
// }
// function loadPosttheLocalStorage(){

// }
// function GetPostThelocalStorage(){
//   const tasks = JSON.parse(localStorage.getItem("media")) || [];
//   return tasks;
// }
// Event documents 
  toggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
document.addEventListener("DOMContentLoaded",()=>{
    moviesLoadApi();
    // Addingpost();
  })