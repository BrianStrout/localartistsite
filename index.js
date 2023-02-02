const launch = document.getElementById("launch");
let treeplots = Array.from(document.querySelectorAll(".plant"));
let farmsurvey = Array.from(document.querySelectorAll(".farm"));

const blanket = document.getElementById("blanket");
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
  }, 6000);

  setTimeout(() => {
    treeplots.forEach((tree, index) => {
      tree.classList.add("normalize");
    });
  }, 5000);
};

launch.addEventListener("click", () => {
  animateInTreescape();
});

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

// function animateFrames1() {
//   if (++currentPos1 >= leafFlipper1.length) currentPos1 = 0;
//   lFront.forEach((leaf) => {
//     leaf.src = leafFlipper1[currentPos1];
//   });
// }
// setInterval(animateFrames1, 1600);

// function animateFrames2() {
//   if (++currentPos2 >= leafFlipper1.length) currentPos2 = 0;
//   leafBack.src = leafFlipper2[currentPos2];
// }
// setInterval(animateFrames2, 1600);
