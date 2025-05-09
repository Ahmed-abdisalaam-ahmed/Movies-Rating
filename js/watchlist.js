const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");

function GetPostThelocalStorage(){
  const get = JSON.parse(localStorage.getItem("posts")) || [];
  return get;
}
function GetloadtheLocalStorage(){
  const posts = GetPostThelocalStorage();
  const container = document.getElementById("watchlist");
  container.innerHTML = ""

  posts.forEach(item => {
    const Watch = document.createElement("div");
    Watch.dataset.id = item.id;
    Watch.className = "item";
    Watch.innerHTML = `
          <img src="${item.Image}" alt="image-come">
          <div class="details">
            <h2>${item.Title}</h2>
            <p class="meta">${item.startYear} – ${item.endYear} · ${item.runtimeMinutes} · ${item.metascore} · ${item.type}</p>
            <p class="genres">${item.genres[0]} · ${item.genres[1]} · ${item.genres[2]}</p>
            <p class="rating">⭐ ${item.averageRating} (${item.numVotes})</p>
            <div class="actions">
              <a href="#">☆ Rate</a>
              <a href="#">👁️ Mark as watched</a>
            </div>
          </div>
          <button class="DElete"><i class="fa-solid fa-xmark"></i></button>
    `
      container.appendChild(Watch);
      const Deleted = Watch.querySelector('.DElete');
      Deleted.addEventListener("click", ()=>{
        // console.log("heloo worls",Watch);
        Deletehandle(item.id , Watch);
      })

      
    });
};
function Deletehandle(id , item){
  let posts = GetPostThelocalStorage();
  posts = posts.filter(post => post.id != id);
  console.log(posts)
  localStorage.setItem("posts" , JSON.stringify(posts));
  item.remove();
}


toggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
document.addEventListener("DOMContentLoaded",()=>{
  // forWatchlist();
  GetloadtheLocalStorage();
})