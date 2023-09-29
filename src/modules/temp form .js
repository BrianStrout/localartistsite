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
      "sender-name": "",
      "sender-email": "",
    },
  };

  let fromName = document.getElementById("fromName").value;
  let fromEmail = document.getElementById("fromEmail").value;
  let message = document.getElementById("message").value;

  console.log("attempting submitting");

  let regexpNAME = /^[a-z a-z]+$/gi;
  let regexpEMAIL =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  let regexpMESG = /.{8}/;

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

  if (regexpNAME.test(fromName)) {
    console.log("passing verification step 1");

    if (regexpEMAIL.test(fromEmail)) {
      console.log("passing verification step 2");

      if (regexpMESG.test(message)) {
        console.log("passing verification step 3");
        console.log("submitting");
        emailjs.send(serviceID, templateID, params).then((response) => {
          console.log(params);
          formSelector.innerHTML =
            "<div style='display:flex; justify-content:center'> Thank you for your email <br> I will be in touch</div>";
          document.querySelector(".button--box").style = "display: none";
        });
        return;
      } else {
        console.log("fail message");
        return;
      }
    }
    console.log("fail email");
    return;
  }
  console.log("fail name");
  return;
}
