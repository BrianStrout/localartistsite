const rockMonitor = document.getElementById("rock--bottom--monitor");

const controller = (e) => {
  //   console.log(e.id);
  // console.log(rockMonitor);
  //   rockMonitor.innerHTML = "!";
  switch (e.id) {
    case "commission":
      rockMonitor.innerHTML = `<h1>Commission</h1>
      <section class="rock--comm--quotes">
        <div class="quote">
          <p>
            Quote1 by some person who is happy about whatever
            <span class="quoter">JOhn Bodys</span>
          </p>
        </div>
        <div class="quote">
          <p>
            Quote1 by some person who is happy about whatever
            <span class="quoter">JOhn Bodys</span>
          </p>
        </div>
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        sed vel adipisci alias quibusdam similique corporis repellendus
        omnis accusantium deleniti est aliquam, in repudiandae incidunt
        corrupti, impedit exercitationem saepe recusandae.
      </section>`;
      break;
    case "pricing":
      rockMonitor.innerHTML = `<h1>Pricing</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
      sed vel adipisci alias quibusdam similique corporis repellendus
      omnis accusantium deleniti est aliquam, in repudiandae incidunt
      corrupti, impedit exercitationem saepe recusandae.
      </p>`;
      break;
    case "about":
      rockMonitor.innerHTML = `
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
      sed vel adipisci alias quibusdam similique corporis repellendus
      omnis accusantium deleniti est aliquam, in repudiandae incidunt
      corrupti, impedit exercitationem saepe recusandae.
      </p>`;
    default:
      break;
  }

  //   console.log(rockMonitor.innerHTML);
};

export { controller, rockMonitor };
