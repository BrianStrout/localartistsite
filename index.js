import {
  galleryLauncher,
  slideController,
} from "./src/modules/gallerylauncher.js";
import { controller, hamburger } from "./src/modules/rockbottomcontroller.js";

const linkSocial = [
  document.getElementById("linkig"),
  document.getElementById("linkyt"),
  document.getElementById("linkfb"),
  document.getElementById("linktt"),
  document.getElementById("linkstroutco"),
];

const rockBottomButtons = Array.from(
  document.querySelectorAll(".link--clickable")
);
hamburger.addEventListener("click", (e) => {
  controller(e.target);
});
rockBottomButtons.forEach((rock) => {
  rock.addEventListener("click", () => {
    controller(rock);
  });
});
linkSocial.forEach((link) => {
  link.addEventListener("click", (e) => {
    controller(link);
  });
});

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
const slidesDivArray = Array.from(document.querySelectorAll(".slide"));
const slidesTopImagesArray = [imph1, imph2, imph3, imph4, imph5];
const rockBottom = document.getElementById("rockBottom");

let topShowHasStarted = false;
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

    slidesDivArray.forEach((slide) => {
      slide.style.animationPlayState = "running";
    });
  }, 7500);
};

slidesDivArray.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    galleryLauncher(e.target.id);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cta")) {
    rockBottom.scrollIntoView({ behavior: "smooth" });
    document.getElementById(
      "rock--bottom--monitor"
    ).innerHTML = `<div class="commission">
    <h1>Contact</h1>
       <form id="myForm" onsubmit="return false">
       <!-- name -->
       <div class="form-group">
         <label for="name">Name:</label>
         <input
           type="name"
           name="name"
           class="form-control"
           id="fromName"
           placeholder="enter your name"
         />
       </div>
       <div class="form-group">
         <label for="email">Email:</label>
         <input
           type="email"
           name="email"
           class="form-control"
           id="fromEmail"
           placeholder="enter your email"
         />
       </div>
       <div class="form-group">
         <label for="message">Message:</label>
         <textarea class="form-control" id="message" name="message" rows="5"></textarea>
       </div>
     
     </form>
     <div class="button--box">
     <div class="button--box-padder">
     <button id="formReset" class="formReset btn">Reset</button>
     <button type="submit" id="submit" class="btn btn-primary">Submit</button>
     </div> </div>
     <br>
     <a href="tel:617-501-5838">
     <div class = "phone-div"><div class="phone-icon"></div><h2>+1(617)501-5838</h2></div>
     </a>
     <br>
     <div class="available--by">
     <span>
     Available through </span><span> phone, text, and WhatsApp</span>
     <span>&</span><span>winterboy@winterboy.net</span>
     </div>
     </div>`;
    return;
  }
  if (e.target.classList.contains("formReset")) {
    controller(e.target);
  }

  if (e.target.classList.contains("btn-primary")) {
    e.preventDefault();
    const formSelector = document.getElementById("myForm");

    let formData = {
      tes: "test",
      service_id: "service_cg4lo4s",
      template_id: "template_fejt36a",
      form: document.getElementById("myForm"),
      user_id: "sMWYJVw_Of2YBvfKm",
      template_params: {
        "sender-name": "James",
        "sender-email": "test@fake.com",
      },
    };

    let b = {
      bname: formSelector.name,
    };
    let bbname = formSelector.name.value;

    console.log("submitting");
    console.log(b);

    const serviceID = "service_cg4lo4s";
    const templateID = "template_fejt36a";
    const tt = formData.tes;
    const params = {
      fromName: document.getElementById("fromName").value,
      fromEmail: document.getElementById("fromEmail").value,
      message: document.getElementById("message").value,
    };

    console.log(params);

    console.log("^^^ params");

    // "sMWYJVw_Of2YBvfKm",
    // send the email here
    emailjs
      .send(serviceID, templateID, params)
      // .sendForm(JSON.stringify(formData))
      .then((response) => {
        console.log(params);

        // console.log("Thanks for your email!", response.status, response.text);
        alert("Thanks for your email!");
      });
    return;
  }

  if (e.target.classList.contains("toAvail")) {
    console.log("avail?");
    document.getElementById("studio").scrollIntoView({ behavior: "smooth" });
    galleryLauncher("available");
  }
});
window.onload = () => {
  console.log("window loaded");
  animateInTreescape();
  controller(rockBottomButtons[0]);
};
