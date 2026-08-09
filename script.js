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

movieCards.forEach(function (card) {
  card.addEventListener("click", function () {
    // Get movie information from card
    const title = card.querySelector("h3").textContent;
    const poster = card.querySelector("img").src;

    // Open modal
    movieModal.style.display = "flex";

    // Put card data inside modal
    modalTitle.textContent = title;
    modalPoster.src = poster;

    // Temporary details
    modalRating.textContent = "⭐ IMDb: 8.5";
    modalGenre.textContent = "🎭 Genre: Movie / Web Series";
    modalYear.textContent = "📅 Year: 2024";
    modalDescription.textContent =
      "Explore this movie or web series and discover more details.";
  });
});
console.log(movieCards);
console.log(movieCards.length);

const searchInput = document.querySelector("#searchInput");
console.log(searchInput);

searchInput.addEventListener("keyup", function () {
  console.log("Typing...");

  let searchValue = searchInput.value.toLowerCase();

  movieCards.forEach(function (card) {
    let title = card.querySelector("h3").textContent.toLowerCase();

    console.log(title);

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
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

let savedName = localStorage.getItem("userName");

if (savedName) {
    savedUserName.textContent = savedName;
    userNameInput.value = savedName;
}

saveNameBtn.addEventListener("click", function () {

    const name = userNameInput.value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("userName", name);

    savedUserName.textContent = name;

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
