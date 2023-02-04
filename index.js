// import { upandrunning } from "./src/modules/module1";

const launch = document.getElementById("launch");
let treeplots = Array.from(document.querySelectorAll(".plant"));
let farmsurvey = Array.from(document.querySelectorAll(".farm"));

const blanket = document.getElementById("blanket");
const fallingLeavesContainer = document.getElementById(
  "fallingLeavesContainer"
);
const sliderDispTop = document.getElementById("slider-disp-top");
const sliderDispBottom = document.getElementById("slider-disp-bottom");
const titleTrack = document.getElementById("titleTrack");
const interval = 50;
const animateInTreescape = () => {
  setTimeout(() => {
    titleTrack.classList.add("outlined");
  }, 1000);
  setTimeout(() => {
    titleTrack.classList.add("lit-with-shadow");
  }, 2400);

  setTimeout(() => {
    blanket.classList.add("transparent");
  }, 3500);
  setTimeout(() => {
    farmsurvey.forEach(function (tree, index) {
      tree.classList.add("grow");
    });

    fallingLeavesContainer.classList.remove("transparent");
  }, 6000);

  setTimeout(() => {
    treeplots.forEach((tree, index) => {
      tree.classList.add("normalize");
    });
  }, 5000);

  setTimeout(() => {
    farmsurvey.forEach((farm, index) => {
      farm.classList.add("farmlandbob");
    });
  }, 7500);
};

const leafFront = document.getElementById("leafFront");
const leafBack = document.getElementById("leafBack");

const leaf1 = "./src/images/flippableleaf.png";
const leaf2 = "./src/images/leaf2.png";
const leaf3 = "./src/images/leaf3.png";
const leaf4 = "./src/images/leaf4.png";
let currentPos1 = 0;
let currentPos2 = 0;
let leafFlipper1 = [leaf1];
let leafFlipper2 = [leaf3, leaf4];
const lFront = Array.from(document.querySelectorAll(".leaf--front"));

const imph1 = "./src/images/array-images/imageplaceholder1.jpg";
const imph2 = "./src/images/array-images/imageplaceholder2.jpg";
const imph3 = "./src/images/array-images/imageplaceholder3.jpg";
const imph4 = "./src/images/array-images/imageplaceholder4.jpg";
const imph5 = "./src/images/array-images/imageplaceholder5.jpg";

const slidesTopArray = [imph1, imph2, imph3, imph4, imph5];
const slidesBottomArray = [imph1, imph2, imph3, imph4, imph5];

const sliderShowTimeLaunch = (hemisphere) => {
  if (hemisphere === "top") {
    console.log("top");
  }
  if (hemisphere === "bottom") {
    console.log("bottom");
  }
};

sliderDispTop.addEventListener("click", () => {
  sliderDispTop.classList.add("show-time");
  sliderDispTop.classList.remove("passive");
  sliderDispBottom.classList.remove("show-time");
  sliderDispBottom.classList.add("passive");
  sliderShowTimeLaunch("top");
});

sliderDispBottom.addEventListener("click", () => {
  sliderDispBottom.classList.add("show-time");
  sliderDispBottom.classList.remove("passive");
  sliderDispTop.classList.remove("show-time");
  sliderDispTop.classList.add("passive");
  sliderShowTimeLaunch("bottom");
});

window.onload = (event) => {
  animateInTreescape();
};

// three visible images
// one leaving to the left     one in focus     one coming in

// generated from an Array
