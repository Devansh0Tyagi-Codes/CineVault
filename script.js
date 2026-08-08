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
  // Stop default link behaviour
  event.preventDefault();

  // Change Hero Heading
  heroHeading.textContent = "Button Click Worked ✅";
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
});

// ==========================
// Favorite Buttons
// ==========================

const favoriteBtns = document.querySelectorAll(".favorite-btn");

favoriteBtns.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        if (button.textContent === "♡") {
            button.textContent = "♥";
            button.style.color = "#e50914";
        } else {
            button.textContent = "♡";
            button.style.color = "white";
        }

    });

});

// ---------- Footer ----------

const footer = document.querySelector("footer");
console.log(footer);
