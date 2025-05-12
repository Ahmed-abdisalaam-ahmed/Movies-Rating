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
        Deletehandle(item.id , Watch ,item.Title);
      })
    });

};
function Deletehandle(id , item ,primaryTitle){
  let posts = GetPostThelocalStorage();
  posts = posts.filter(post => post.id != id);
  localStorage.setItem("posts" , JSON.stringify(posts));
  messageDeleted(primaryTitle);
  item.remove();
  indexlist();
}
function messageDeleted(title){
  const messageBox = document.querySelector(".message-box"); // Add this div in your HTML

  messageBox.textContent = `${title} Deleted to Watchlist!`;
  messageBox.style.display = "block";
  messageBox.style.backgroundColor = "red"; // Or use a class for styling


// Auto-hide after 3 seconds
setTimeout(() => {
  messageBox.style.display = "none";
}, 3000);

}
function indexlist() {
  const tasks = JSON.parse(localStorage.getItem("posts")) || []; // replace "yourKey" with the actual key
  const length = tasks.length;
  // console.log(length);
  const span = document.querySelector(".index-watclist");
  span.textContent = length;
  return true
}


toggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
document.addEventListener("DOMContentLoaded",()=>{
  GetloadtheLocalStorage();
  indexlist();
})