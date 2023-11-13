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

let nbr_tbl = 0;
console.log(slides[nbr_tbl]);
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

let currentbulletpoint = document.querySelector(".div" + nbr_tbl);
currentbulletpoint.classList.add("dot_selected");
console.log(currentbulletpoint);

arrow_rigth.addEventListener("click", () => {
  nbr_tbl = nbr_tbl + 1;
  if (nbr_tbl >= slides.length) {
    nbr_tbl = 0;
  }
  slide_class.setAttribute("src", chemin_img + slides[nbr_tbl].image);
  tagLine.innerHTML = slides[nbr_tbl].tagLine;
  console.log("fléche de droit");
  let currentbulletpoint = document.querySelector(".div" + nbr_tbl);
  currentbulletpoint.classList.add("dot_selected");
  if (currentbulletpoint !== currentbulletpoint.previousElementSibling) {
    let previousbulletpoint = currentbulletpoint.previousElementSibling;
    if (currentbulletpoint === divbulletpoint.firstChild) {
      const lastbulletpoint = divbulletpoint.lastChild;
      lastbulletpoint.classList.remove("dot_selected");
      console.log(lastbulletpoint);
    }
    previousbulletpoint.classList.remove("dot_selected");
    console.log(previousbulletpoint);
  }
});

arrow_left.addEventListener("click", () => {
  nbr_tbl = nbr_tbl - 1;
  if (nbr_tbl <= -1) {
    nbr_tbl = slides.length - 1;
  }
  slide_class.setAttribute("src", chemin_img + slides[nbr_tbl].image);
  tagLine.innerHTML = slides[nbr_tbl].tagLine;
  console.log("fléche de gauche");
  let currentbulletpoint = document.querySelector(".div" + nbr_tbl);
  currentbulletpoint.classList.add("dot_selected");
  if (currentbulletpoint !== currentbulletpoint.nextElementSibling) {
    let previousbulletpoint = currentbulletpoint.nextElementSibling;
    if (currentbulletpoint === divbulletpoint.lastChild) {
      const lastbulletpoint = divbulletpoint.firstChild;
      lastbulletpoint.classList.remove("dot_selected");
      console.log(lastbulletpoint);
    }
    previousbulletpoint.classList.remove("dot_selected");
    console.log(previousbulletpoint);
  }
});
