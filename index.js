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
