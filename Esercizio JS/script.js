// ------------------------ ESERCIZIO TRADUZIONE ------------------------ //
const solarSystem = [
    { name: "Sun", radius: 696340, surface: "star" },
    { name: "Mercury", radius: 2440, surface: "terrestrial" },
    { name: "Venus", radius: 6052, surface: "terrestrial" },
    { name: "Earth", radius: 6371, surface: "terrestrial" },
    { name: "Mars", radius: 3389, surface: "terrestrial" },
    { name: "Jupiter", radius: 69911, surface: "gas giant" },
    { name: "Saturn", radius: 58232, surface: "gas giant" },
    { name: "Uranus", radius: 25362, surface: "ice giant" },
    { name: "Neptune", radius: 24622, surface: "ice giant" },
];

const itaName = (planet) => {
    switch (planet.name) {
        case "Sun":
            planet.name = "Sole";
            break;

        case "Mercury":
            planet.name = "Mercurio";
            break;

        case "Venus":
            planet.name = "Venere";
            break;

        case "Earth":
            planet.name = "Terra";
            break;

        case "Mars":
            planet.name = "Marte";
            break;

        case "Jupiter":
            planet.name = "Giove";
            break;

        case "Saturn":
            planet.name = "Saturno";
            break;

        case "Uranus":
            planet.name = "Uranio";
            break;

        case "Neptune":
            planet.name = "Nettuno";
            break;
    }
    return planet
}

const terrestrial = (planets) => planets.surface === "terrestrial";
const smallPlanets = (planets) => planets.radius <= 3000;
const stars = (planets) => planets.surface === "star";

const terrPlanets = solarSystem.filter(terrestrial);
const smallTerrPlanets = terrPlanets.filter(smallPlanets);
// const smallTerrPlanets = terrPlanets.filter((planets) => planets.radius <= 3000); <-- identico

const xyz = solarSystem.filter(terrestrial).filter(smallPlanets);

// console.log(smallTerrPlanets);
// console.log(xyz);

const planetDiameter = (planets) => {
    planets.diameter = planets.radius * 2;
    return planets
}

const solSys = solarSystem.map(itaName).map(planetDiameter)
console.log(solSys);
// ------------------------ ESERCIZIO MODALE ------------------------ //
const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");
const denyBtn = document.querySelector("#btn-deny");

setTimeout(() => {
    modal.style.zIndex = 1;
    modal.style.opacity = 1;
}, 10000)

function hideModal() {
    modal.style.opacity = 0;

    setTimeout(() => {
        document.body.removeChild(modal);
    }, 350);
}

acceptBtn.addEventListener("click", hideModal, { once: true });
// ------------------------ ESERCIZIO AVANZATO ------------------------ //