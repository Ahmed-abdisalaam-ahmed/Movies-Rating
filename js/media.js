const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");
const mediagird = document.querySelector(".movie-grid");


async function moviesLoadApi() {
    const url = "https://imdb236.p.rapidapi.com/imdb/most-popular-movies";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9720bccc2emsh1959ffa0c195181p1ad619jsn80f27ff7c2f2",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      moviesList(result);
      console.log(result)
    } catch (error) {
      console.error("the feych is has in Error", error);
    }
  }
  async function TvshowsApi() {
    const url = "https://imdb236.p.rapidapi.com/imdb/top250-tv";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9720bccc2emsh1959ffa0c195181p1ad619jsn80f27ff7c2f2",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      TvshowsList(result);
      console.log(result)
    } catch (error) {
      console.error(error);
    }
  }
// function 
function moviesList(data) {
    const moviefive = data.slice(0,5);
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
  
    moviefive.forEach((datas) => {
      const moviesitem = document.createElement("div");
      moviesitem.className = "movie-card";
      moviesitem.innerHTML = `
                <img src="${datas.primaryImage}" alt="Movie Poster">
                <div class"svg-str" <i class="fa-solid fa-star" style="color: #FFD43B;  margin-bottom="2rem";"></i> ${datas.averageRating}</div><br>
                <h3>${datas.originalTitle}</h3>
                <p>${datas.startYear} • ${datas.interests[0]}, ${datas.interests[1]}</p>
  
                <a href="movie.html">View Details</a> 
  
        `;
      movieList.appendChild(moviesitem);
    });
  }
  function TvshowsList(data) {
    const tvfive = data.slice(15,20);
    const TvshowsListList = document.querySelector(".TV-grid");
    TvshowsListList.innerHTML = "";
  
    tvfive.forEach((datas) => {
      const TVitem = document.createElement("div");
      TVitem.className = "tv-card";
      TVitem.innerHTML = `
                <img src="${datas.primaryImage}" alt="Movie Poster">
                <h3>${datas.originalTitle}</h3>
                <p>${datas.startYear} • ${datas.interests[0]}, ${datas.interests[1]}</p>
                <div class"svg-str" <i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${datas.averageRating}</div><br>
                <a href="movie.html">View Details</a> 
        `;
      TvshowsListList.appendChild(TVitem);
    });
  };

//   Events document 

  document.addEventListener("DOMContentLoaded", () => {
    moviesLoadApi();
    TvshowsApi();
  });