const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let nombre_tableau = 0;
console.log(slides[nombre_tableau]);
const arrow_rigth = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");
const chemin_img = "./assets/images/slideshow/";
console.log(chemin_img);
let slide_class = document.querySelector(".banner-img");
let tagLine = document.querySelector("#banner p");
console.log(tagLine);

const banner = document.getElementById("banner");
const divbulletpoint = document.createElement("div");
banner.appendChild(divbulletpoint);
divbulletpoint.classList.add("dots");

for (let i = 0; i < slides.length; i++) {
  let affbulletpoint = document.createElement("div");
  divbulletpoint.appendChild(affbulletpoint);
  affbulletpoint.classList.add("dot", "div" + i);
  console.log(affbulletpoint);
}

let currentbulletpoint = document.querySelector(".div" + nombre_tableau);
currentbulletpoint.classList.add("dot_selected");
console.log(currentbulletpoint);

arrow_rigth.addEventListener("click", () => {
  nombre_tableau = nombre_tableau + 1;
  if (nombre_tableau >= slides.length) {
    nombre_tableau = 0;
  }
  slide_class.setAttribute("src", chemin_img + slides[nombre_tableau].image);
  tagLine.innerHTML = slides[nombre_tableau].tagLine;
  console.log("fléche de droit");
  let currentbulletpoint = document.querySelector(".div" + nombre_tableau);
  let remove_selected = document.querySelectorAll("div.dot");
  remove_selected.forEach((remove_selected) => {
    remove_selected.classList.remove("dot_selected");
  });
  console.log(remove_selected);
  currentbulletpoint.classList.add("dot_selected");
});

arrow_left.addEventListener("click", () => {
  nombre_tableau = nombre_tableau - 1;
  if (nombre_tableau <= -1) {
    nombre_tableau = slides.length - 1;
  }
  slide_class.setAttribute("src", chemin_img + slides[nombre_tableau].image);
  tagLine.innerHTML = slides[nombre_tableau].tagLine;
  console.log("fléche de gauche");
  let remove_selected = document.querySelector(".dot_selected");
  remove_selected.classList.remove("dot_selected");
  let currentbulletpoint = document.querySelector(".div" + nombre_tableau);
  currentbulletpoint.classList.add("dot_selected");
});
