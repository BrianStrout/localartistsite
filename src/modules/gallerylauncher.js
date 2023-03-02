const slidesToPause = Array.from(document.querySelectorAll(".slide"));
const galleryFrame = document.getElementById("slider-disp");
let paused = false;

const slideController = () => {
  console.log("paused " + paused);
  if (!paused) {
    slidesToPause.forEach((slide) => {
      slide.style.animationPlayState = "paused";
    });
    paused = true;

    return;
  } else if (paused) {
    console.log(Array.from(document.querySelectorAll(".pop-elem")));

    slidesToPause.forEach((slide) => {
      slide.style.animationPlayState = "running";
    });
    Array.from(document.querySelectorAll(".pop-elem")).forEach((gallery) => {
      gallery.remove();
    });
    paused = false;
    return;
  }
};

const callGallerySlideUp = (slide, index) => {
  let pushTo = document.querySelector(".pop-up-gallery-left");
  let pushToTitle = document.querySelector(".pop-up-slide-title");
  let pushToDesc = document.querySelector(".pop-up-slide-desc");
  console.log(pushTo);
  // pushTo.style.opacity = "50%";
  pushTo.style.backgroundImage = `url("./src/images/galleries/${slide.galleryname}/${slide.galleryArray[index].addy}")`;
  pushToTitle.innerHTML = `${slide.galleryArray[index].title}`;
  pushToDesc.innerHTML = `${slide.galleryArray[index].desc}`;
  console.log(slide.galleryArray[index]);
};

const populateGallery = (called) => {
  Array.from(document.querySelectorAll(".pop-elem")).forEach((gallery) => {
    gallery.remove();
  });
  slideController();
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
  exitSign.innerHTML = "<h2>&#x2715</h2>";
  popUpGalleryLeft.appendChild(exitSign);
  exitSign.addEventListener("click", () => {
    slideController();
  });

  let popUpGalleryHero = document.createElement("div");
  popUpGalleryHero.classList.add("pop-up-gallery-hero");
  popUpGalleryHero.classList.add("pop-elem");
  popUpGalleryHero.innerHTML = ``;
  popUpGalleryLeft.appendChild(popUpGalleryHero);

  let popUpGalleryTitle = document.createElement("h1");
  popUpGalleryTitle.classList.add("pop-up-gallery-title");
  popUpGalleryTitle.classList.add("pop-elem");
  popUpGalleryTitle.innerHTML = `${called.officialtitle}`;
  popUpGalleryLeft.appendChild(popUpGalleryTitle);

  let popUpSlideBox = document.createElement("div");
  popUpSlideBox.classList.add("popUpSlideBox");
  popUpSlideBox.classList.add("pop-elem");
  popUpSlideBox.innerHTML = "";
  popUpGalleryLeft.appendChild(popUpSlideBox);

  let popUpSlideTitle = document.createElement("h4");
  popUpSlideTitle.classList.add("pop-up-slide-title");
  popUpSlideTitle.classList.add("pop-elem");
  popUpSlideTitle.innerHTML = ``;
  popUpSlideBox.appendChild(popUpSlideTitle);
  let popUpSlideDesc = document.createElement("p");
  popUpSlideDesc.classList.add("pop-up-slide-desc");
  popUpSlideDesc.classList.add("pop-elem");
  popUpSlideDesc.innerHTML = ``;
  popUpSlideBox.appendChild(popUpSlideDesc);

  let popUpGalleryRight = document.createElement("div");
  popUpGalleryRight.classList.add("pop-up-gallery-right");
  popUpGalleryRight.classList.add("pop-elem");
  popUpGalleryRight.innerHTML = ``;
  popUpGalleryCase.appendChild(popUpGalleryRight);

  for (let i = 0; i < 20; i++) {
    if (called.galleryArray[i]) {
      let popUpGalleryThumb = document.createElement("div");
      popUpGalleryThumb.classList.add("pop-up-gallery-thumb");
      popUpGalleryThumb.classList.add("pop-elem");
      popUpGalleryThumb.style.backgroundImage = `url( "./src/images/galleries/${called.galleryname}/${called.galleryArray[i].addy}")`;
      popUpGalleryRight.appendChild(popUpGalleryThumb);
      let screen = document.createElement("div");
      screen.classList.add("screen");
      popUpGalleryThumb.appendChild(screen);

      popUpGalleryThumb.addEventListener("click", () => {
        callGallerySlideUp(called, i);
      });
    }
  }
  let popUpGalleryDisp = document.createElement("div");
  popUpGalleryDisp.classList.add("pop-up-gallery-disp");
  popUpGalleryDisp.classList.add("pop-elem");
  popUpGalleryDisp.innerHTML = ``;
  popUpGalleryRight.appendChild(popUpGalleryDisp);
};

async function galleryLauncher(door) {
  const response = await fetch("./src/galleryData.json");
  const sheetData = await response.json();

  for (const gallery of sheetData) {
    console.log(gallery.galleryname, +"gallllll");

    if (gallery.galleryname === door) {
      console.log("gallery open for business");
      populateGallery(gallery);

      return;
    } else {
      console.log("door called: " + door);
    }

    // console.log("json file " + gallery.galleryname);
  }

  // let doorOpened = JSON.parse(data);

  //   console.log(doorOpened);
  //   let responser = json;
  //   console.log("following is response variable", responser);
}

export { galleryLauncher };
