async function getData() {
  console.log("Get called");
  let jsonFile = "./src/galleryData.JSON";
  let res = await fetch(jsonFile);
  return res.json();
}

const slidesToPause = Array.from(document.querySelectorAll(".slide"));
// const galleriesOpen = Array.from(document.querySelectorAll(".pop-elem"));
const galleryFrame = document.getElementById("slider-disp");
let paused = false;

const slideController = () => {
  console.log("paused " + paused);
  if (!paused) {
    slidesToPause.forEach((slide) => {
      slide.classList.add("paused");
    });
    paused = true;

    return;
  } else if (paused) {
    console.log(Array.from(document.querySelectorAll(".pop-elem")));

    slidesToPause.forEach((slide) => {
      slide.classList.remove("paused");
    });
    Array.from(document.querySelectorAll(".pop-elem")).forEach((gallery) => {
      gallery.remove();
    });
    paused = false;
    return;
  }
};

// const exitSignF = () => {
//   console.log("ecit?");
//   let sign = document.querySelectorAll(".exit-sign");
//   sign.addEventListener("click", () => {
//     slideController;
//   });
// };

const populateGallery = (called) => {
  Array.from(document.querySelectorAll(".pop-elem")).forEach((gallery) => {
    gallery.remove();
  });

  slideController();

  console.log("pop " + called);

  let popUpGalleryCase = document.createElement("div");
  popUpGalleryCase.classList.add("pop-up-gallery-case");
  popUpGalleryCase.classList.add("pop-elem");
  popUpGalleryCase.innerHTML = "";
  galleryFrame.appendChild(popUpGalleryCase);

  let popUpGalleryLeft = document.createElement("div");
  popUpGalleryLeft.classList.add("pop-up-gallery-left");
  popUpGalleryLeft.classList.add("pop-elem");
  popUpGalleryLeft.style.backgroundImage = `url(${called.mainImage})`;
  popUpGalleryLeft.innerHTML = "";
  popUpGalleryCase.appendChild(popUpGalleryLeft);

  let exitSign = document.createElement("div");
  exitSign.classList.add("exit-sign");
  exitSign.classList.add("pop-elem");
  exitSign.innerHTML = "<h2>X</h2>";
  popUpGalleryLeft.appendChild(exitSign);
  exitSign.addEventListener("click", () => {
    slideController();
  });

  let popUpGalleryRight = document.createElement("div");
  popUpGalleryRight.classList.add("pop-up-gallery-right");
  popUpGalleryRight.classList.add("pop-elem");
  popUpGalleryRight.innerHTML = ``;
  popUpGalleryCase.appendChild(popUpGalleryRight);

  let popUpGalleryHero = document.createElement("div");
  popUpGalleryHero.classList.add("pop-up-gallery-hero");
  popUpGalleryHero.classList.add("pop-elem");
  popUpGalleryHero.innerHTML = ``;
  popUpGalleryLeft.appendChild(popUpGalleryHero);

  let popUpGalleryTitle = document.createElement("h1");
  popUpGalleryTitle.classList.add("pop-up-gallery-title");
  popUpGalleryTitle.classList.add("pop-elem");
  popUpGalleryTitle.innerHTML = `${called.galleryname}`;
  popUpGalleryLeft.appendChild(popUpGalleryTitle);

  let popUpGalleryDisp = document.createElement("div");
  popUpGalleryDisp.classList.add("pop-up-gallery-disp");
  popUpGalleryDisp.classList.add("pop-elem");
  popUpGalleryDisp.innerHTML = ``;
  popUpGalleryRight.appendChild(popUpGalleryDisp);
};
// exitSignF();
const sheetData = await getData();

// const data = require("../gallerydata.JSON");
const galleryLauncher = (door) => {
  //   console.log(door, typeof door);

  for (const gallery of sheetData) {
    if (gallery.galleryname === door) {
      populateGallery(gallery);

      return;
    }

    // console.log("json file " + gallery.galleryname);
  }

  // let doorOpened = JSON.parse(data);

  //   console.log(doorOpened);
  //   let responser = json;
  //   console.log("following is response variable", responser);
};

export { galleryLauncher };
