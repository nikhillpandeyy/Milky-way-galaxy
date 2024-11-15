// button
function toggleDropdown() {
    var dropdown = document.getElementById("update-dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Simple star details function
function showStarDetails(starName) {
alert("Details about " + starName + " will be added here.");
}

// Fun facts array and function to display random fact
const facts = [
"Most of the Milky Way’s mass is thought to be dark matter, an invisible substance that does not emit or absorb light but has gravitational effects.",
"There are around 100 to 400 billion stars in the Milky Way.",
"The Milky Way's center holds the supermassive black hole Sagittarius A*, with a mass of 4 million suns.",
"The Sun is located in one of the galaxy's spiral arms called the Orion Arm.",
"The galaxy is around 13.6 billion years old, nearly as old as the universe.",
"Stars on the Milky Way's edge move at 220 km/s, and it takes 230 million years for one orbit.",
"The Milky Way could host billions of planets, many potentially in habitable zones.",
"The Milky Way will collide with Andromeda in 4.5 billion years to form Milkomeda.",
"Our Solar System’s eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
"A halo of hot gas, old stars, and globular clusters surrounds the Milky Way.",
"Our Solar System takes approximately 230 million years to complete one orbit around the galaxy’s center."
];

function showRandomFact() {
const randomIndex = Math.floor(Math.random() * facts.length);
document.getElementById("fact-display").innerText = facts[randomIndex];
}
// Array of stars with their data
const stars = [
{
name: "Betelgeuse",
type: "Red Supergiant",
location: "Orion Constellation",
fact: "Betelgeuse is one of the largest visible stars and is expected to explode as a supernova in the future."
},
{
name: "Sirius",
type: "Brightest Star",
location: "Canis Major Constellation",
fact: "Sirius is the brightest star in our night sky, twice as massive as the Sun."
},
{
name: "Rigel",
type: "Blue Supergiant",
location: "Orion Constellation",
fact: "Rigel is the brightest star in the Orion constellation and is about 870 light-years away from Earth."
},
{
name: "Polaris",
type: "Yellow Supergiant",
location: "Ursa Minor Constellation",
fact: "Polaris is known as the North Star and is used in navigation as it points almost directly to the north pole."
},
{
name: "Alpha Centauri",
type: "Closest Star System",
location: "Centaurus Constellation",
fact: "Alpha Centauri is the closest star system to Earth, just 4.37 light-years away."
},

]
function showStarDetails(starName) {
// Find the star in the array based on its name
const star = stars.find(s => s.name === starName);

if (star) {
// Populate modal content with star details
document.getElementById("star-name").innerText = star.name;
document.getElementById("star-type").innerText = star.type;
document.getElementById("star-location").innerText = star.location;
document.getElementById("star-fact").innerText = star.fact;

// Show the modal
document.getElementById("star-modal").style.display = "block";
}
}

// Function to close the modal
function closeModal() {
document.getElementById("star-modal").style.display = "none";
}