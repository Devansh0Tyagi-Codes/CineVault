// ======================================
// CineVault JavaScript
// ======================================

console.log("CineVault Loaded 🚀");

// ======================================
// Variables
// ======================================

let websiteName = "CineVault";
let totalMovies = 4;
let totalWebShows = 4;

console.log(websiteName);
console.log(totalMovies);
console.log(totalWebShows);

// ======================================
// Movies & Web Shows Data
// ======================================

const titles = [
  "Interstellar",

  "The Dark Knight",

  "Inception",

  "Parasite",

  "Breaking Bad",

  "Stranger Things",

  "Money Heist",

  "The Boys",
];

// ======================================
// DOM Selection
// ======================================

// ---------- Hero Section ----------

const heroSection = document.querySelector(".hero");
console.log(heroSection);

// Change hero text color
heroSection.style.color = "yellow";

// ---------- Hero Heading ----------

const heroHeading = document.querySelector(".hero-content h1");
console.log(heroHeading);

// Change heading text
heroHeading.textContent = "Explore Movies & Web Shows 🍿";

// ---------- Hero Paragraph ----------

const heroPara = document.querySelector(".hero-content p");

// Change paragraph text
heroPara.textContent = "Find your next binge-worthy movie or web series.";

// ---------- Browse Movies Button ----------

const browseBtn = document.querySelector("#browseBtn");
console.log(browseBtn);

// ======================================
// Events
// ======================================

// Browse Button Click Event

browseBtn.addEventListener("click", function (event) {
  event.preventDefault();

  searchInput.focus();
});


// ---------- Movie Section ----------

const movieSection = document.querySelector(".trending");
console.log(movieSection);

// ==========================
// Movie Cards
// ==========================

const movieCards = document.querySelectorAll(".movie-card");
// ==========================
// Movie Card Click
// ==========================

const movieModal = document.querySelector("#movieModal");

const closeModal = document.querySelector("#closeModal");

// ==========================
// Close Movie Modal
// ==========================

closeModal.addEventListener("click", function () {

    movieModal.style.display = "none";

});

const modalPoster = document.querySelector("#modalPoster");

const modalTitle = document.querySelector("#modalTitle");

const modalRating = document.querySelector("#modalRating");

const modalGenre = document.querySelector("#modalGenre");

const modalYear = document.querySelector("#modalYear");

const modalDescription = document.querySelector("#modalDescription");

// ==========================
// Movie Details Data
// ==========================

const movieDetails = {

    "Interstellar": {
        rating: "⭐ IMDb: 8.7",
        genre: "🎭 Genre: Sci-Fi / Adventure",
        year: "📅 Year: 2014",
        description: "A group of explorers travel through a wormhole in space in search of a new home for humanity."
    },

    "The Dark Knight": {
        rating: "⭐ IMDb: 9.0",
        genre: "🎭 Genre: Action / Crime",
        year: "📅 Year: 2008",
        description: "Batman faces the Joker, a criminal mastermind who creates chaos and pushes Gotham City to its limits."
    },

    "Inception": {
        rating: "⭐ IMDb: 8.8",
        genre: "🎭 Genre: Sci-Fi / Thriller",
        year: "📅 Year: 2010",
        description: "A skilled thief enters people's dreams to steal secrets and is given a difficult task involving an idea."
    },

    "Parasite": {
        rating: "⭐ IMDb: 8.5",
        genre: "🎭 Genre: Drama / Thriller",
        year: "📅 Year: 2019",
        description: "A struggling family slowly becomes connected with a wealthy household, leading to unexpected consequences."
    },

    "Breaking Bad": {
        rating: "⭐ IMDb: 9.5",
        genre: "🎭 Genre: Crime / Drama",
        year: "📅 Year: 2008",
        description: "A chemistry teacher turns to producing illegal drugs after receiving a life-changing diagnosis."
    },

    "Stranger Things": {
        rating: "⭐ IMDb: 8.7",
        genre: "🎭 Genre: Sci-Fi / Drama",
        year: "📅 Year: 2016",
        description: "A group of friends uncover mysterious supernatural events and secret experiments in their small town."
    },

    "Dark": {
        rating: "⭐ IMDb: 8.7",
        genre: "🎭 Genre: Sci-Fi / Mystery",
        year: "📅 Year: 2017",
        description: "The disappearance of a child reveals a mysterious connection between four families across different generations."
    },

    "Money Heist": {
        rating: "⭐ IMDb: 8.2",
        genre: "🎭 Genre: Crime / Thriller",
        year: "📅 Year: 2017",
        description: "A criminal mastermind known as the Professor plans a series of ambitious heists with a carefully selected team."
    },

    "The Boys": {
        rating: "⭐ IMDb: 8.6",
        genre: "🎭 Genre: Action / Superhero",
        year: "📅 Year: 2019",
        description: "A group of vigilantes takes on powerful superheroes who abuse their abilities and influence."
    }

};// ==========================
// Movie Card Click
// ==========================

movieCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Get movie information from card
        const title = card.querySelector("h3").textContent.trim();
        const poster = card.querySelector("img").src;

        // Open modal
        movieModal.style.display = "flex";

        // Put card data inside modal
        modalTitle.textContent = title;
        modalPoster.src = poster;

        // Get movie details
        const details = movieDetails[title];

        // Put correct details inside modal
        if (details) {
            modalRating.textContent = details.rating;
            modalGenre.textContent = details.genre;
            modalYear.textContent = details.year;
            modalDescription.textContent = details.description;
        }

    });

});
console.log(movieCards);
console.log(movieCards.length);
// ==========================
// Search Movies, Web Shows & Recommended
// ==========================

const searchInput = document.querySelector("#searchInput");

const noResults = document.querySelector("#noResults");
const noWebResults = document.querySelector("#noWebResults");
const noRecommendedResults = document.querySelector("#noRecommendedResults");

const movieSectionCards = document.querySelectorAll(".trending .movie-card");
const webShowCards = document.querySelectorAll(".webshows .movie-card");
const recommendedCards = document.querySelectorAll(".recommended .movie-card");


searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase().trim();


    // ==========================
    // TRENDING MOVIES
    // ==========================

    let movieFound = false;

    movieSectionCards.forEach(function (card) {

        const title = card.querySelector("h3")
            .textContent
            .toLowerCase()
            .trim();

        if (searchValue === "" || title.includes(searchValue)) {

            card.style.display = "";

            if (searchValue !== "") {
                movieFound = true;
            }

        } else {

            card.style.display = "none";

        }

    });


    // ==========================
    // WEB SHOWS
    // ==========================

    let webFound = false;

    webShowCards.forEach(function (card) {

        const title = card.querySelector("h3")
            .textContent
            .toLowerCase()
            .trim();

        if (searchValue === "" || title.includes(searchValue)) {

            card.style.display = "";

            if (searchValue !== "") {
                webFound = true;
            }

        } else {

            card.style.display = "none";

        }

    });


    // ==========================
    // RECOMMENDED
    // ==========================

    let recommendedFound = false;

    recommendedCards.forEach(function (card) {

        const title = card.querySelector("h3")
            .textContent
            .toLowerCase()
            .trim();

        if (searchValue === "" || title.includes(searchValue)) {

            card.style.display = "";

            if (searchValue !== "") {
                recommendedFound = true;
            }

        } else {

            card.style.display = "none";

        }

    });


    // ==========================
    // NO RESULTS MESSAGES
    // ==========================

    if (searchValue === "") {

        noResults.style.display = "none";
        noWebResults.style.display = "none";
        noRecommendedResults.style.display = "none";

    } else {

        noResults.style.display =
            movieFound ? "none" : "block";

        noWebResults.style.display =
            webFound ? "none" : "block";

        noRecommendedResults.style.display =
            recommendedFound ? "none" : "block";

    }

});// ==========================
// Favorite Buttons + LocalStorage
// ==========================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteBtns = document.querySelectorAll(".favorite-btn");

favoriteBtns.forEach(function (button) {

    const card = button.closest(".movie-card");
    const movieTitle = card.querySelector("h3").textContent.trim();
    const heart = button.querySelector(".heart-icon");

    // Check if already favorite
    if (favorites.includes(movieTitle)) {
        heart.textContent = "♥";
        heart.style.color = "#e50914";
    }

    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (favorites.includes(movieTitle)) {

            // Remove from favorites
            favorites = favorites.filter(function (title) {
                return title !== movieTitle;
            });

            heart.textContent = "♡";
            heart.style.color = "#ddd";

        } else {

            // Add to favorites
            favorites.push(movieTitle);

            heart.textContent = "♥";
            heart.style.color = "#e50914";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });

});


// ==========================
// Watched Buttons + LocalStorage
// ==========================

let watched = JSON.parse(localStorage.getItem("watched")) || [];

const watchedBtns = document.querySelectorAll(".watched-btn");

watchedBtns.forEach(function (button) {

    const card = button.closest(".movie-card");
    const movieTitle = card.querySelector("h3").textContent.trim();

    // Check if already watched
    if (watched.includes(movieTitle)) {
        button.classList.add("watched-active");
    }

    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (watched.includes(movieTitle)) {

            // Remove from watched
            watched = watched.filter(function (title) {
                return title !== movieTitle;
            });

            button.classList.remove("watched-active");

        } else {

            // Add to watched
            watched.push(movieTitle);

            button.classList.add("watched-active");
        }

        localStorage.setItem("watched", JSON.stringify(watched));
    });

});

// ==========================
// Favorites / Watched Modal
// ==========================

const favoritesOption = document.querySelector("#favoritesOption");
const watchedOption = document.querySelector("#watchedOption");

const collectionModal = document.querySelector("#collectionModal");
const closeCollection = document.querySelector("#closeCollection");
const collectionTitle = document.querySelector("#collectionTitle");
const collectionList = document.querySelector("#collectionList");


// Show Collection Modal
function showCollection(type) {
  collectionList.innerHTML = "";

  let collection = [];

  // User name save nahi hai to collection hide rakho
  const currentUserName = localStorage.getItem("userName");

  if (!currentUserName) {
    if (type === "favorites") {
      collectionTitle.textContent = "❤️ My Favorites";
    } else {
      collectionTitle.textContent = "👁️ My Watched";
    }

    collectionList.innerHTML =
      "<p class='empty-collection'>No " +
      (type === "favorites" ? "favorites" : "watched") +
      " yet.</p>";

    collectionModal.style.display = "flex";
    return;
  }

  if (type === "favorites") {
    collection = favorites;
    collectionTitle.textContent = "❤️ My Favorites";
  } else {
    collection = watched;
    collectionTitle.textContent = "👁️ My Watched";
  }

  if (collection.length === 0) {
    collectionList.innerHTML =
      "<p class='empty-collection'>No movies added yet.</p>";
  } else {
    collection.forEach(function (title) {
      const movie = document.createElement("div");

      movie.classList.add("collection-item");

      movie.textContent = title;

      collectionList.appendChild(movie);
    });
  }

  collectionModal.style.display = "flex";
}


// Favorites Click
favoritesOption.addEventListener("click", function () {

    showCollection("favorites");

});


// Watched Click
watchedOption.addEventListener("click", function () {

    showCollection("watched");

});


// Close Collection Modal
closeCollection.addEventListener("click", function () {

    collectionModal.style.display = "none";

});


// ==========================
// User Profile Toggle
// ==========================

const userIcon = document.getElementById("userIcon");
const profilePanel = document.getElementById("profilePanel");

userIcon.addEventListener("click", function (event) {

    event.stopPropagation();

    if (profilePanel.style.display === "block") {
        profilePanel.style.display = "none";
    } else {
        profilePanel.style.display = "block";
    }

});

profilePanel.addEventListener("click", function (event) {
    event.stopPropagation();
});

// Bahar click karne par panel close hoga
document.addEventListener("click", function () {
    profilePanel.style.display = "none";
});
// ==========================
// User Name + LocalStorage
// ==========================

const userNameInput = document.querySelector("#userNameInput");
const saveNameBtn = document.querySelector("#saveNameBtn");
const savedUserName = document.querySelector("#savedUserName");

const nameSection = document.querySelector("#nameSection");
const savedNameSection = document.querySelector("#savedNameSection");
const resetNameBtn = document.querySelector("#resetNameBtn");

const profileTitle = document.querySelector("#profileTitle");
let savedName = localStorage.getItem("userName");


// Show saved name
if (savedName) {
  profileTitle.textContent = savedName;

  savedUserName.textContent = savedName;

  nameSection.style.display = "none";
  savedNameSection.style.display = "flex";
}

// Save name
saveNameBtn.addEventListener("click", function () {

    const name = userNameInput.value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("userName", name);

    profileTitle.textContent = name;

    savedUserName.textContent = name;

    nameSection.style.display = "none";
    savedNameSection.style.display = "flex";

});

// Reset name
resetNameBtn.addEventListener("click", function () {

    localStorage.removeItem("userName");

    profileTitle.textContent = "My Profile";

    savedUserName.textContent = "";

    nameSection.style.display = "flex";
    savedNameSection.style.display = "none";

    userNameInput.value = "";

});
// ==========================
// Top Rated Button
// ==========================

const topRatedBtn = document.querySelector("#topRatedBtn");
const recommendedSection = document.querySelector("#recommended");

topRatedBtn.addEventListener("click", function (event) {
    event.preventDefault();

    recommendedSection.scrollIntoView({
        behavior: "smooth"
    });
});



// ---------- Footer ----------

const footer = document.querySelector("footer");
console.log(footer);


// ==========================
// Active Navbar Link
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

const sections = document.querySelectorAll(
    "#home, #movies, #webshows, #recommended"
);

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});