const launch = document.getElementById("launch");
let treeplots = Array.from(document.querySelectorAll(".plant"));

console.log(treeplots);

const animateInTreescape = () => {
  treeplots.forEach((tree, index) => {
    console.log(treeplots[index]);
    tree.classList.add("normalize");
  });
};

launch.addEventListener("click", () => {
  animateInTreescape();
});
