import * as contentful from "contentful";

let importedCMS_JSON = [
  {
    galleryName: "Available Paintings",
    galleryArray: [],
    galleryTag: "available",
    galleryCover: "",
  },
  {
    galleryName: "Legacy Prints",
    galleryArray: [],
    galleryTag: "legacy",
    galleryCover: "",
  },
  {
    galleryName: "Tree Prints",
    galleryArray: [],
    galleryTag: "treeprints",
    galleryCover: "",
  },
  {
    galleryName: "Orb Prints",
    galleryArray: [],
    galleryTag: "orbs",
    galleryCover: "",
  },
  {
    galleryName: "Landscape Prints",
    galleryArray: [],
    galleryTag: "landscapes",
    galleryCover: "",
  },
  {
    galleryName: "Winged Things",
    galleryArray: [],
    galleryTag: "wings",
    galleryCover: "",
  },
  {
    galleryName: "Dewdrop Prints",
    galleryArray: [],
    galleryTag: "dewdrops",
    galleryCover: "",
  },
];
let sortedImportedCMS_JSON = [
  {
    galleryName: "Available Paintings",
    galleryArray: [],
    galleryTag: "available",
    galleryCover: "",
  },
  {
    galleryName: "Legacy Prints",
    galleryArray: [],
    galleryTag: "legacy",
    galleryCover: "",
  },
  {
    galleryName: "Tree Prints",
    galleryArray: [],
    galleryTag: "treeprints",
    galleryCover: "",
  },
  {
    galleryName: "Orb Prints",
    galleryArray: [],
    galleryTag: "orbs",
    galleryCover: "",
  },
  {
    galleryName: "Landscape Prints",
    galleryArray: [],
    galleryTag: "landscapes",
    galleryCover: "",
  },
  {
    galleryName: "Winged Things",
    galleryArray: [],
    galleryTag: "wings",
    galleryCover: "",
  },
  {
    galleryName: "Dewdrop Prints",
    galleryArray: [],
    galleryTag: "dewdrops",
    galleryCover: "",
  },
];

// const arraySorter = (cmsArray) => {
//   console.log("obj/arr is now in sorter");
//   console.log(cmsArray.length);
//   console.log(typeof cmsArray);

//   for (let i = 0; i < 7; i++) {
//     console.log(i," index");
//     console.log(cmsArray[i].galleryArray);
//     console.log(cmsArray[i][2]);
//     console.log(cmsArray[i].galleryArray.length);
//     console.log(typeof cmsArray[i]);
//   }
// };

const CallToCMS = () => {
  var client = contentful.createClient({
    space: "11nsjtdsk3ho",
    accessToken: "Kxa4kHjAOtAZ5v1npkn3h7TLSiFj8uNp2bXrB_nGTKY",
  });
  client.getEntries({}).then(function (entries) {
    entries.items.forEach(function (entry) {
      // console.log(entry.fields);
      let sortToGallery = JSON.stringify(entry.fields.galleryName);
      // console.log(sortToGallery);

      for (const gallerySlot of importedCMS_JSON) {
        // console.log(gallerySlot.galleryName, " is slot in imported json");

        if (sortToGallery === `"${gallerySlot.galleryName}"`) {
          // console.log("good job buddy");

          let newSlot = {};
          newSlot.galleryName = entry.fields.galleryName;
          newSlot.addy = entry.fields.imageOfPiece.fields.file.url;
          newSlot.title = entry.fields.pieceTitle;
          newSlot.desc = entry.fields.pieceDetailsSizeCost;
          newSlot.order = entry.fields.order;

          console.log(entry.fields.galleryCover);

          if (entry.fields.galleryCover) {
            // if (entry.fields.galleryCover === ) {
            document.getElementById(
              `${gallerySlot.galleryTag}`
            ).style.backgroundImage = url(
              `"${entry.fields.imageOfPiece.fields.file.url}"`
            );
          }
          // console.log(newSlot);

          gallerySlot.galleryArray.push(newSlot);
          // console.log(gallerySlot);
        }
      }
    });
  });

  console.log(typeof importedCMS_JSON);
  //   .catch(console.error);
  console.log("off with you");
  // arraySorter(importedCMS_JSON);
};

export { CallToCMS, importedCMS_JSON };
