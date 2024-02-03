import { importedCMS_JSON } from "./CMS_Call";

const slidesToPause = Array.from(document.querySelectorAll(".slide"));
const galleryFrame = document.getElementById("slider-disp");
let paused = false;

const slideController = () => {
  // console.log("paused starts as..." + paused);
  if (!paused) {
    slidesToPause.forEach((slide) => {
      slide.style.animationPlayState = "paused";
    });
    paused = true;
    return;
  } else if (paused) {
    // console.log(Array.from(document.querySelectorAll(".pop-elem")));

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
  // console.log(pushTo);

  pushTo.style.backgroundImage = `url("${slide.galleryArray[index].addy}")`;

  pushToTitle.innerHTML = `${slide.galleryArray[index].title}`;
  pushToDesc.innerHTML = `${slide.galleryArray[index].desc}`;
  // console.log(slide.galleryArray[index]);
};

const populateGallery = (called) => {
  // console.log("popppin");
  Array.from(document.querySelectorAll(".pop-elem")).forEach((gallery) => {
    gallery.remove();
  });
  slideController();

  called.galleryArray.sort((a, b) => a.order - b.order);

  for (const each of called.galleryArray) {
    console.log(each.order);
  }

  let popUpGalleryCase = document.createElement("div");
  popUpGalleryCase.classList.add("pop-up-gallery-case");
  popUpGalleryCase.classList.add("pop-elem");
  popUpGalleryCase.innerHTML = "";
  galleryFrame.appendChild(popUpGalleryCase);

  let popUpGalleryLeft = document.createElement("div");
  popUpGalleryLeft.classList.add("pop-up-gallery-left");
  popUpGalleryLeft.classList.add("pop-elem");
  popUpGalleryLeft.style.backgroundImage = `url("${called.galleryCover}")`;

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

  // let popUpGalleryTitle = document.createElement("h1");
  // popUpGalleryTitle.classList.add("pop-up-gallery-title");
  // popUpGalleryTitle.classList.add("pop-elem");
  // popUpGalleryTitle.innerHTML = `${called.officialtitle}`;
  // popUpGalleryLeft.appendChild(popUpGalleryTitle);

  let popUpSlideBox = document.createElement("div");
  popUpSlideBox.classList.add("popUpSlideBox");
  popUpSlideBox.classList.add("pop-elem");
  popUpSlideBox.innerHTML = "";
  popUpGalleryLeft.appendChild(popUpSlideBox);

  let popUpSlideHeader = document.createElement("h4");
  popUpSlideHeader.classList.add("pop-up-slide-header");
  popUpSlideHeader.classList.add("pop-elem");
  popUpSlideHeader.innerHTML = ``;
  popUpSlideBox.appendChild(popUpSlideHeader);

  let popUpSlideTitle = document.createElement("h4");
  popUpSlideTitle.classList.add("pop-up-slide-title");
  popUpSlideTitle.classList.add("pop-elem");
  popUpSlideTitle.innerHTML = ``;
  popUpSlideHeader.appendChild(popUpSlideTitle);

  let popUpSlideCTA = document.createElement("div");
  popUpSlideCTA.classList.add("pop-up-slide");
  popUpSlideCTA.classList.add("cta");
  popUpSlideCTA.classList.add("pop-elem");
  popUpSlideCTA.innerHTML = ``;
  popUpSlideHeader.appendChild(popUpSlideCTA);

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
      popUpGalleryThumb.style.backgroundImage = `url( "${called.galleryArray[i].addy}")`;
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

  callGallerySlideUp(called, 0);
};

async function galleryLauncher(door) {
  // // switch (door) {
  // //   case "available":
  // //     door = "Available Paintings";
  // //     return;
  // }

  // console.log("door called: " + door);
  // const response = await fetch("./src/galleryData.JSON");
  // const response = importedCMS_JSON;

  const sheetData = importedCMS_JSON;

  console.log("door " + door);

  for (const gallery of sheetData) {
    console.log("gallery of sheetdata", gallery);
    console.log("door: ", door, "and ", gallery.galleryTag);
    if (gallery.galleryTag === door) {
      console.log("should be good to populate");

      populateGallery(gallery);

      return;
    } else {
      // console.log("door called: " + door);
      console.log("error with gallery launch");
    }
  }

  // let doorOpened = JSON.parse(data);

  //   console.log(doorOpened);
  //   let responser = json;
  //   console.log("following is response variable", responser);
}

export { galleryLauncher, slideController };
