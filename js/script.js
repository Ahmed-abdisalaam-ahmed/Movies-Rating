// documents
const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");
const movieGrid = document.querySelector(".movie-grid");

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
const movies = [
  {
    id: "tt0903747",
    url: "https://www.imdb.com/title/tt0903747/",
    primaryTitle: "Breaking Bad",
    originalTitle: "Breaking Bad",
    type: "tvSeries",
    description:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=XZ8daibM3AE",
    contentRating: "TV-MA",
    startYear: 2008,
    endYear: 2013,
    releaseDate: "2008-01-20",
    interests: [
      "Drug Crime",
      "Epic",
      "Psychological Drama",
      "Psychological Thriller",
      "Tragedy",
      "Crime",
      "Drama",
      "Thriller",
    ],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/BreakingBad",
      "https://www.instagram.com/breakingbad/",
    ],
    spokenLanguages: ["en", "es"],
    filmingLocations: ["3828 Piermont Dr NE, Albuquerque, New Mexico, USA"],
    productionCompanies: [
      {
        id: "co0212797",
        name: "High Bridge Productions",
      },
      {
        id: "co0071947",
        name: "Gran Via Productions",
      },
      {
        id: "co0086397",
        name: "Sony Pictures Television",
      },
    ],
    budget: null,
    grossWorldwide: null,
    genres: ["Crime", "Drama", "Thriller"],
    isAdult: false,
    runtimeMinutes: null,
    averageRating: 9.5,
    numVotes: 2315350,
    metascore: null,
  },
  {
    "id": "tt0141842",
    "url": "https://www.imdb.com/title/tt0141842/",
    "primaryTitle": "The Sopranos",
    "originalTitle": "The Sopranos",
    "type": "tvSeries",
    "description": "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
    primaryImage: "https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_.jpg",
    "trailer": "https://www.youtube.com/watch?v=Q8cBFvpqmH0",
    "contentRating": "TV-MA",
    "startYear": 1999,
    "endYear": 2007,
    "releaseDate": "1999-01-10",
    "interests": [
        "Epic",
        "Gangster",
        "Crime",
        "Drama"
    ],
    "countriesOfOrigin": [
        "US"
    ],
    "externalLinks": [
        "https://www.facebook.com/TheSopranos",
        "https://play.max.com/show/818c3d9d-1831-48a6-9583-0364a7f98453"
    ],
    "spokenLanguages": [
        "en",
        "it",
        "ru"
    ],
    "filmingLocations": [
        "Satin Dolls - 230 State Route 17 S., Lodi, New Jersey, USA"
    ],
    "productionCompanies": [
        {
            "id": "co0008693",
            "name": "Home Box Office (HBO)"
        },
        {
            "id": "co0046803",
            "name": "Brad Grey Television"
        },
        {
            "id": "co0214340",
            "name": "Brillstein Entertainment Partners"
        }
    ],
    "budget": null,
    "grossWorldwide": null,
    "genres": [
        "Crime",
        "Drama"
    ],
    "isAdult": false,
    "runtimeMinutes": null,
    "averageRating": 9.2,
    "numVotes": 522396,
    "metascore": null
  },
  {
    id: "tt0795176",
    url: "https://www.imdb.com/title/tt0795176/",
    primaryTitle: "Planet Earth",
    originalTitle: "Planet Earth",
    type: "tvMiniSeries",
    description:
      "A documentary series on the wildlife found on Earth. Each episode covers a different habitat: deserts, mountains, deep oceans, shallow seas, forests, caves, polar regions, fresh water, plains and jungles. Narrated by David Attenborough.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BY2NjNDUzOTgtMDFmNC00ZGQ4LWE5MDctMzczNGVlOGU1N2MyXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=2yXS1MACnTA",
    contentRating: "TV-PG",
    startYear: 2006,
    endYear: 2006,
    releaseDate: "2007-03-25",
    interests: ["Docuseries", "Nature Documentary", "Documentary", "Family"],
    countriesOfOrigin: ["GB", "CA", "US", "JP"],
    externalLinks: [
      "https://www.bbc.co.uk/programmes/b006mywy",
      "http://www.planet-earth.com/",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Colorado River, Arizona, USA"],
    productionCompanies: [
      {
        id: "co0043107",
        name: "British Broadcasting Corporation (BBC)",
      },
      {
        id: "co0045850",
        name: "Canadian Broadcasting Corporation (CBC)",
      },
      {
        id: "co0045277",
        name: "Discovery Channel",
      },
    ],
    budget: null,
    grossWorldwide: null,
    genres: ["Documentary", "Family"],
    isAdult: false,
    runtimeMinutes: null,
    averageRating: 9.4,
    numVotes: 226979,
    metascore: null,
  },
  {
    id: "tt0185906",
    url: "https://www.imdb.com/title/tt0185906/",
    primaryTitle: "Band of Brothers",
    originalTitle: "Band of Brothers",
    type: "tvMiniSeries",
    description:
      "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMTQ3NTdmOTEtZTRmMi00NTg5LWI5NmUtYTNiOTc0ZmNkODU0XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=aH06LWZs-Ys",
    contentRating: "TV-MA",
    startYear: 2001,
    endYear: 2001,
    releaseDate: "2001-09-09",
    interests: [
      "Historical Epic",
      "War Epic",
      "Action",
      "Drama",
      "History",
      "War",
    ],
    countriesOfOrigin: ["GB", "US"],
    externalLinks: [
      "https://www.facebook.com/bandofbrothers",
      "https://www.hbo.com/band-of-brothers",
    ],
    spokenLanguages: ["en", "nl", "fr", "de", "pl", "la", "es"],
    filmingLocations: ["Ashdown Forest, East Sussex, England, UK"],
    productionCompanies: [
      {
        id: "co0040938",
        name: "DreamWorks",
      },
      {
        id: "co0003158",
        name: "DreamWorks Television",
      },
      {
        id: "co0005861",
        name: "HBO Films",
      },
    ],
    budget: 125000000,
    grossWorldwide: null,
    genres: ["Action", "Drama", "History"],
    isAdult: false,
    runtimeMinutes: null,
    averageRating: 9.4,
    numVotes: 559518,
    metascore: null,
  },
  {
    id: "tt7366338",
    url: "https://www.imdb.com/title/tt7366338/",
    primaryTitle: "Chernobyl",
    originalTitle: "Chernobyl",
    type: "tvMiniSeries",
    description:
      "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMmQ0Y2JiM2EtOWIwMy00MWVjLTgxZDctZTQzOWU3ODkzMWY4XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
    contentRating: "TV-MA",
    startYear: 2019,
    endYear: 2019,
    releaseDate: "2019-05-06",
    interests: [
      "Disaster",
      "Docudrama",
      "Epic",
      "Historical Epic",
      "Period Drama",
      "Drama",
      "History",
      "Thriller",
    ],
    countriesOfOrigin: ["US", "GB"],
    externalLinks: [
      "https://podcasts.apple.com/us/podcast/the-chernobyl-podcast/id1459712981",
      "https://www.hbo.com/chernobyl",
    ],
    spokenLanguages: ["en", "ru", "uk"],
    filmingLocations: ["Vilnius, Lithuania"],
    productionCompanies: [
      {
        id: "co0008693",
        name: "Home Box Office (HBO)",
      },
      {
        id: "co0571744",
        name: "Sister Pictures",
      },
      {
        id: "co0166478",
        name: "Sky Television",
      },
    ],
    budget: null,
    grossWorldwide: null,
    genres: ["Drama", "History", "Thriller"],
    isAdult: false,
    runtimeMinutes: null,
    averageRating: 9.3,
    numVotes: 942685,
    metascore: null,
  },
  {
    id: "tt3566834",
    url: "https://www.imdb.com/title/tt3566834/",
    primaryTitle: "A Minecraft Movie",
    originalTitle: "A Minecraft Movie",
    type: "movie",
    description:
      "Four misfits are suddenly pulled through a mysterious portal into a bizarre cubic wonderland that thrives on imagination. To get back home they'll have to master this world while embarking on a quest with an unexpected expert crafter.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=wJO_vIDZn-I",
    contentRating: "PG",
    startYear: 2025,
    endYear: null,
    releaseDate: "2025-04-04",
    interests: [
      "Action Epic",
      "Adventure Epic",
      "Fantasy Epic",
      "High-Concept Comedy",
      "Quest",
      "Slapstick",
      "Survival",
      "Action",
      "Adventure",
      "Comedy",
    ],
    countriesOfOrigin: ["SE", "US", "NZ", "CA"],
    externalLinks: [
      "https://www.minecraft-movie.com/home/",
      "https://www.youtube.com/watch?v=EaOnM8SewHc&ab",
    ],
    spokenLanguages: ["en"],
    filmingLocations: ["Auckland, New Zealand"],
    productionCompanies: [
      {
        id: "co0002663",
        name: "Warner Bros.",
      },
      {
        id: "co0159111",
        name: "Legendary Entertainment",
      },
      {
        id: "co0084207",
        name: "Vertigo Entertainment",
      },
    ],
    budget: 150000000,
    grossWorldwide: 565138262,
    genres: ["Action", "Adventure", "Comedy"],
    isAdult: false,
    runtimeMinutes: 101,
    averageRating: 6,
    numVotes: 58562,
    metascore: 46,
  },
  {
    "id": "tt31193180",
    "url": "https://www.imdb.com/title/tt31193180/",
    "primaryTitle": "Sinners",
    "originalTitle": "Sinners",
    "type": "movie",
    "description": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    primaryImage: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg",
    "trailer": "https://www.youtube.com/watch?v=bKGxHflevuk",
    "contentRating": "R",
    "startYear": 2025,
    "endYear": null,
    "releaseDate": "2025-04-18",
    "interests": [
        "Period Drama",
        "Supernatural Horror",
        "Vampire Horror",
        "Action",
        "Drama",
        "Horror",
        "Thriller"
    ],
    "countriesOfOrigin": [
        "US"
    ],
    "externalLinks": [
        "https://amzn.to/4cNibD5",
        "https://www.sinnersmovie.com/"
    ],
    "spokenLanguages": [
        "en"
    ],
    "filmingLocations": [
        "New Orleans, Louisiana, USA"
    ],
    "productionCompanies": [
        {
            "id": "co0002663",
            "name": "Warner Bros."
        },
        {
            "id": "co1090055",
            "name": "Domain Entertainment (II)"
        },
        {
            "id": "co0843639",
            "name": "Proximity Media"
        }
    ],
    "budget": 90000000,
    "grossWorldwide": 63507468,
    "genres": [
        "Action",
        "Drama",
        "Horror"
    ],
    "isAdult": false,
    "runtimeMinutes": 137,
    "averageRating": 8.2,
    "numVotes": 25803,
    "metascore": 84
  },
  {
    id: "tt0111161",
    url: "https://www.imdb.com/title/tt0111161/",
    primaryTitle: "The Shawshank Redemption",
    originalTitle: "The Shawshank Redemption",
    type: "movie",
    description:
      "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    primaryImage:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=xyXX8LXiNJ4",
    contentRating: "R",
    startYear: 1994,
    endYear: null,
    releaseDate: "1994-10-14",
    interests: ["Epic", "Period Drama", "Prison Drama", "Drama"],
    countriesOfOrigin: ["US"],
    externalLinks: [
      "https://www.facebook.com/shawshankredemptionfilm/",
      "https://www.warnerbros.com/movies/shawshank-redemption",
    ],
    spokenLanguages: ["en"],
    filmingLocations: [
      "Mansfield Reformatory - 100 Reformatory Road, Mansfield, Ohio, USA",
    ],
    productionCompanies: [
      {
        id: "co0040620",
        name: "Castle Rock Entertainment",
      },
    ],
    budget: 25000000,
    grossWorldwide: 29332133,
    genres: ["Drama"],
    isAdult: false,
    runtimeMinutes: 142,
    averageRating: 9.3,
    numVotes: 3033080,
    metascore: 82,
  },
];

// face Section
let index = 0;
function updatedterminal() {
  const imgEl = document.querySelector(".image-hro");
  const circles = document.querySelectorAll(".circles");

  setInterval(() => {
    imgEl.innerHTML = `
         <img src="${movies[index].primaryImage}" alt="">
    `;
    circles.forEach((circle, i) => {
      if (i === index) {
        circle.style.backgroundColor = "#00aaff";
      } else {
        circle.style.backgroundColor = "";
      }
    });
    index = (index + 1) % movies.length;
  }, 2500);
}
updatedterminal();
// movie-list
function moviesList(data) {
  const moviefive = data.slice(0,5);
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  moviefive.forEach((datas) => {
    const moviesitem = document.createElement("div");
    moviesitem.className = "movie-card";
    moviesitem.innerHTML = `
              <img src="${datas.primaryImage}" alt="Movie Poster">
              <h3>${datas.originalTitle}</h3>
              <p>${datas.startYear} • ${datas.interests[0]}, ${datas.interests[1]}</p>
              <button class="btn-watchlist">WatchList</button> <br>
              <button class="btn-Details"><a href="movie.html">View Details</a></button>  
      `;
    movieList.appendChild(moviesitem);
  });
}
// TV-List
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
              <button class="btn-watchlist">WatchList</button> <br>
              <button class="btn-Details"><a href="movie.html">View Details</a></button>  
      `;
    TvshowsListList.appendChild(TVitem);
  });
}

// Events that with documents
toggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  moviesLoadApi();
  TvshowsApi();
});
