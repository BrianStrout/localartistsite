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

const slidesTopDivArray = Array.from(document.querySelectorAll(".top-slides"));
const slidesTopImagesArray = [imph1, imph2, imph3, imph4, imph5];
let topShowHasStarted = false;
const slidesTopTitle = document.getElementById("top--slide--title");

const slidesBottomArray = [imph1, imph2, imph3, imph4, imph5];

const moveTopSlides = (i) => {
  let linkToSlide;

  if (!topShowHasStarted) {
    linkToSlide = i;
  } else {
    linkToSlide++;
  }

  topShowHasStarted = true;
  // let slideHand = 0;
  // console.log(i);
  slidesTopDivArray[0].classList.add("slide-unseen-far-right");
  slidesTopDivArray[0].classList.remove("slide-unseen-far-left");

  slidesTopDivArray[1].classList.add("slide-unseen-far-left");
  slidesTopDivArray[1].classList.remove("slide-left");

  slidesTopDivArray[2].classList.add("slide-left");
  slidesTopDivArray[2].classList.remove("slide-center");

  slidesTopDivArray[3].classList.add("slide-center");
  slidesTopDivArray[3].classList.remove("slide-right");

  slidesTopDivArray[4].classList.add("slide-right");
  slidesTopDivArray[4].classList.remove("slide-unseen-far-right");

  let shiftingSlide = slidesTopDivArray.shift();
  slidesTopDivArray.push(shiftingSlide);
  slidesTopDivArray[4].style.backgroundImage = `url(${slidesTopImagesArray[i]})`;
  // slideHand++;
};

const sliderShowTimeLaunch = (hemisphere) => {
  if (hemisphere === "top") {
    if (!topShowHasStarted) {
      slidesTopTitle.style = "display: none";

      setTimeout(() => {
        slidesTopDivArray[2].style.backgroundImage =
          "url('./src/images/array-images/imageplaceholder1.jpg')";
        slidesTopDivArray[3].style.backgroundImage =
          "url('./src/images/array-images/imageplaceholder2.jpg')";
        slidesTopDivArray[2].classList.add("slide-center");

        // moveTopSlides();
      }, 1500);

      setTimeout(() => {
        setInterval(moveTopSlides(2), 1000);
      }, 2000);
    }
  }
  if (hemisphere === "bottom") {
    console.log("bottom");
  }
};

// The setInterval() method returns an interval ID which uniquely identifies the interval. You can pass this interval ID to the global clearInterval() method to cancel or stop setInterval() call.

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
