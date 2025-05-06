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
          <div class="btn-details">
            <button class="btn-watchlist"><i class="fa-solid fa-bookmark" style="color: aliceblue;"> Watch List</i></button>
            <button class="btn-trailer"><i class="fa-solid fa-film"> Watch trailer</i></button>  
          </div>
        </div>
        <div class="card-discription">
          <p>${datas.description}</p>
        </div>  
        `;
        TvshowsList.appendChild(tvShowsitem);
      const btntrailer = tvShowsitem.querySelector('.btn-trailer')
      btntrailer.addEventListener('click' , ()=> trailerModel(datas.trailer));
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
// localStorage
// function Addingpost(event , data){
//   event.preventDefault();
//   // console.log("help memmmm");

//       const get = {
//           id :data.id,
//           Title: Title.value,
//           Image:Urlimg.value,
//           description:aboutBlog.value,
//       }
//       ShowPostToDom(get);
//       SaveToLocalstorage(get);


//   postTitle.value = '';     
//   Urlimg.value = '';     
//   aboutBlog.value = ''; 
  
// }
// function SavePostToLocalstorage(){

// }
// function loadPosttheLocalStorage(){

// }
// function GetPostThelocalStorage(){

// }

document.addEventListener("DOMContentLoaded",()=>{
  TvshowApi();
})
