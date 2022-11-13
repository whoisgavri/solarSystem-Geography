// Todos los planetas son relativos a la posiscion del sol, y todos los planetas tienen relatividad de tamaño entre sí
// El sol se tuvo que hacer un 90% mas pequeño en esta escala
const sunX = window.innerWidth / 2 - 100; 
const sunY = window.innerHeight / 2 - 100;

const sun = document.querySelector('.sun');
sun.style.top = `${sunY}px`;
sun.style.left = `${sunX}px`;

const mercury = {
    speed: 0.08,
    theta: 2 * Math.PI,
    radius: 110,
    elem: document.querySelector('.mercury')
}

const venus = {
    speed: 0.05,
    theta: 2 * Math.PI,
    radius: 140,
    elem: document.querySelector('.venus')
}

const earth = {
    speed: 0.035,
    theta: 2 * Math.PI,
    radius: 190,
    elem: document.querySelector('.earth')
}

const mars = {
    speed: 0.025,
    theta: 2 * Math.PI,
    radius: 220,
    elem: document.querySelector('.mars')
}

const jupiter = {
    speed: 0.015,
    theta: 2 * Math.PI,
    radius: 250,
    elem: document.querySelector('.jupiter')
}

const saturn = {
    speed: 0.012,
    theta: 2 * Math.PI,
    radius: 375,
    elem: document.querySelector('.saturn')
}

const uranus = {
    speed: 0.007,
    theta: 2 * Math.PI,
    radius: 500,
    elem: document.querySelector('.uranus')
}

const neptune = {
    speed: 0.005,
    theta: 2 * Math.PI,
    radius: 600,
    elem: document.querySelector('.neptune')
}

function update(planet) {
    planet.theta += planet.speed;
    planet.elem.style.left = `${Math.cos(planet.theta) * planet.radius + sunX + 70}px`
    planet.elem.style.top = `${Math.sin(planet.theta) * planet.radius + sunY + 70}px`
}

const planets = [
    mercury, 
    venus, 
    earth,
    mars,
    jupiter, 
    saturn,
    uranus,
    neptune
]

setInterval(() => {
    planets.forEach(update)
}, 100)