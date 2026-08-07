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

    "The Boys"

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


// ==========================
// Search Button
// ==========================

searchBtn.addEventListener("click", function () {
  let titleName = prompt("Search Movies or Web Shows");

  if (titleName === "" || titleName === null) {
    alert("Please enter a movie or web show name!");

    return;
  }

  heroHeading.textContent = "Searching for " + titleName + " 🔍";

  heroPara.textContent = "Showing results for " + titleName;

  console.log(titleName);
  console.log(typeof titleName);
  console.log(titleName.length);
});


// ---------- Movie Section ----------

const movieSection = document.querySelector(".trending");
console.log(movieSection);

// ---------- Footer ----------

const footer = document.querySelector("footer");
console.log(footer);
