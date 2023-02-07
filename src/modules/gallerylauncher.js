async function getData(url) {
  console.log("Get called");
  const response = await fetch(url);
  //   console.log(response.json);
  return response.json();
}

const galleryLauncher = (door) => {
  //   console.log(door, typeof door);
  console.log(door);
  let doorOpened = JSON.parse(data);

  //   console.log(doorOpened);
  //   let responser = json;
  //   console.log("following is response variable", responser);
};

export { galleryLauncher };
