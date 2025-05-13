const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");

async function TvshowApi(){
  try {
    const respone = await fetch("/data/250tv.json");
    const  result = await respone.json();
    TvshowsLists(result);
  } catch (error) {
    console.log("the fetch not Working" ,error);
  }
}

function TvshowsLists(data) {
    const TvshowsList = document.querySelector(".linerate");
    TvshowsList.innerHTML = "";
  
    const TvDta = data;
    
    TvDta.forEach((datas) => {
      const tvShowsitem = document.createElement("div");
      tvShowsitem.className = "tvShows-card";
      tvShowsitem.dataset.id = data.id;
      tvShowsitem.innerHTML = `
        <div class="tvshows-info">
          <div class="item-info">
            <img src="${datas.primaryImage}" alt="Movie Poster">
            <div class="item-text">
               <h2>${datas.primaryTitle}</h2><br>
               <p>${datas.startYear} • ${datas.genres[0]}, ${datas.genres[2]} </p>
               <p>${datas.type}</p>
               <h4>${datas.releaseDate}</h4>
            </div>
          </div>

        </div>
        <div class="card-discription">
          <p>${datas.description}</p>
        </div>  
        <div class="btn-details">
            <button class="btn-watchlist"><i class="fa-solid fa-bookmark" style="color: aliceblue;"> Watch List</i></button>
            <button class="btn-trailer"><i class="fa-solid fa-film"> Watch trailer</i></button>  
        </div>
        `;
      TvshowsList.appendChild(tvShowsitem);
      const btntrailer = tvShowsitem.querySelector('.btn-trailer');
      const btnwatchlist = tvShowsitem.querySelector(".btn-watchlist");
      btntrailer.addEventListener('click' , ()=> trailerModel(datas.trailer));

      btnwatchlist.addEventListener("click", () =>
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
      )
      );
    });
  };
// model
function trailerModel(trailer){
  const model = document.querySelector('#tvShows-modal');
  const tvmoviePlayer = document.querySelector('#TvShows-player');

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
  const model = document.querySelector('#tvShows-modal');
  const tvmoviePlayer = document.querySelector('#TvShows-player');
  tvmoviePlayer.src = "";
  model.style.display = "none";
}
window.onclick = function(event){
  const model = document.querySelector('#tvShows-modal');
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
// Events documents 
toggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded",()=>{
  TvshowApi();
  indexlist();
})
