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
