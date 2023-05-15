const rockMonitor = document.getElementById("rock--bottom--monitor");
const hamburger = document.getElementById("mobileShower");
const linkListArray = Array.from(document.querySelectorAll(".link--clickable"));
const bottomLinkerBox = document.getElementById("bottom--linker--box");

let hamHit = false;

const controller = (e) => {
  // console.log(linkListArray);

  console.log(e);
  if (hamHit === true) {
    hamburger.classList.remove("mobile-hider");

    bottomLinkerBox.classList.add("no-touch");
    linkListArray.forEach((link) => {
      link.classList.add("mobile-hider");
    });
    hamHit = false;
  }

  switch (e.id) {
    case "mobileShower":
      // console.log("mobile function!");
      hamburger.classList.add("mobile-hider");
      bottomLinkerBox.classList.remove("no-touch");
      linkListArray.forEach((link) => {
        // console.log("link", link);
        link.classList.remove("mobile-hider");
        hamHit = true;

        // console.log(hamHit);
      });
      break;
    case "commissions":
      rockMonitor.innerHTML = `<div class="commission">
      <section class="rock--comm--quotes">
        <div class="quote">
          <p>“I have a BFA from one of the finest art schools in the country. I’ve seen the greats, both old and new, up close. I EASILY put Alan Winter in the category of my top 20 favorite artists in the world.”
          
            <span class="quoter i">TAMMY KIRBY, CA</span>
          </p>
        </div>
        <div class="imageshere ih-comm"></div>
        <div class="quote">
          <p>
          “Alan Winter is either going to have to find a new line of work, or we’re going to have to win the lottery. Our kids are already fighting over which artworks they’ll inherit!”

            <span class="quoter i">DAKOTA BUTTERFIELD, VT</span>
          </p>
        </div>
      </section>
      
      <section>
      <h1 class="abouth1">Commissions</h1>
       <p>
       Whether you’re seeking your own version of a Winterboy artwork that's already been collected by someone else, or hoping to recapture the light and energy of a treasured moment or place, I can paint that for you!
       <br><br>
       I'll bring your vision to life, or lend you mine. We'll consult as much as we need to be sure of what we're after. Billing is $3 per sq inch of canvas size, 50% down to start the work. I can paint in acrylic or oil; turnaround about 4 weeks. <span class="u cta"> Let's start the conversation </span> that leads to a cherished piece of WB art in your home. 

      </p>
      </section>
     
      </div>`;
      break;
    case "purchase":
      console.log("you have clicked purchase");
      rockMonitor.innerHTML = `<div class="commission">
        <section class="rock--comm--quotes">
          <div class="quote">
          <p>
          "I'm excited; Indra's Net is the first original piece of art I've ever purchased. It's beautiful to look at and the concept of interconnected energy resonates."
            <span class="quoter i">ALYSE SETTLES, WA</span>
          </p>
          </div>
          <div class="imageshere ih-purch"></div>
          <div class="quote">
          <p>
          "I just received the print and it's stunning. Looks even better in real life. I'm very happy, thanks again!"
            <span class="quoter i">THIBAULT VIGORIE, Fr</span>
          </p>
          </div>
        </section>
        
        <section>
        <h1 class="abouth1">AVAILABLE WORK</h1>
         <p> 
         My art is often collected by the time it's finished. However, I'm creating new work all the time; keep watching the Available Paintings gallery. Prices and the size of the piece are listed with each of the images. I paint the 1.5" sides of all my canvases so you don't need to frame them, and a simple drop frame is best if you want to. Each artwork comes wired for hanging, with a Certificate of Authenticity. <span class="u cta">Contact me</span> to receive more information about a piece, as well as shipping costs (if any), and/or for an electronic (via Zoom)/in-person viewing of it.
             <br><br></p>
         <h1 class="abouth1">   CHOOSING YOUR PRINTS  </h1>
         <p>
         Museum-quality prints of WinterboyArt are available on semi-glass photographic or matte-finish fine art papers, or on varnished stretched canvas-just like a painting. Prices shown in the Print galleries range from the smallest available paper print (12" short side) to full-size stretched canvas. Long-lasting archival inks reproduce precisely the color and tone of original paintings.
         <br><br>
         Consider where you want to display the print. Measure the space available. Take into account that paper prints should be matted and framed to protect them, and will need several extra inches on all sides. Stretched canvas prints won't, and come wired for hanging. All prints have my monogram embedded in them. <span class="u cta">Contact me</span> to order a print of any size, and/or to receive more information. NOTE: Shipping is often free in stretched canvas artworks. Turnaround time generally 10 business days.
       </p>
        </section>
       
        </div>`;
      break;
    case "about":
      rockMonitor.innerHTML = `<div class="commission">
          <section class="rock--comm--quotes">
            <div class="quote">
              <p>
              “His art reflects so much of my inner person. His expressions of nature reflect my joy in it.”
              
                <span class="quoter i">MARTHA KELLER, NH</span>
              </p>
            </div>
            <div class="imageshere ih-about"></div>
            <div class="quote">
              <p>
              "The ‘Prince’ of painting–-eclectic, not bound by genres, always moving into new space. Divine, touching, and awe-inspiring; it’s like there are little pieces of your soul in each of his works.”
                <span class="quoter i">BRANDON HAYES, CA</span>
              </p>
            </div>
          </section>
          
          <section>
          <h1 class="abouth1">About the Artist</h1>
           <p>


           Alan Winter, aka Winterboy, is a professional artist recently returned from TX to New England. He began as an art hobbyist in college, becoming more committed to painting in 2010. Since 2016, he's made his living exclusively as an artist, producing up to 40 pieces in oil or acrylic per year and finding collectors for most of them.
           <br> 
           <br> 
           <i>"My work is informed by love of trees, astronomy, physics, and flying things. Though painting itself is a form of meditation, art is not a solo sport to me. I love sharing my process and progress, and consider it a service to humanity. But it's not altruism, really; you forever show me things that I don’t see, lead me in new directions, and even give me 'new eyes' if I'm stuck.
           <br> 
           <br> 
           "What we focus on grows. For every ugly thing demanding our attention 24×7, there are a thousand beautiful things. I paint to contemplate those beautiful things, and to help you do the same."
           </i>
          </p>
          </section>
          
          </div>`;
      break;
    case "contact":
      rockMonitor.innerHTML = `<div class="commission">
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
            <textarea class="form-control" id="message" name="message" rows="5" placeholder="Print size and/or medium you're considering, or any questions about prices, shipping, etc"></textarea>
          </div>
        
        </form>
        <div class="button--box">
        <div class="button--box-padder">
        <button id="formReset" class="formReset btn">Return</button>
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
        <span>&</span><a href="mailto:alan@winterboy.art"> alan@winterboy.art</a>
        </div>
        </div>`;
      break;

    case "submit":
      break;
    case "formReset":
      console.log("reset>?");
      const grabInputs = Array.from(document.querySelectorAll("input"));
      const textarea = document.querySelector("textarea");
      grabInputs.push(textarea);
      grabInputs.forEach((input) => {
        input.value = "";
      });
      rockMonitor.innerHTML = `<div class="commission">
      <section class="rock--comm--quotes">
        <div class="quote">
        <p>
        "I'm excited; Indra's Net is the first original piece of art I've ever purchased. It's beautiful to look at and the concept of interconnected energy resonates."
          <span class="quoter i">ALYSE SETTLES, WA</span>
        </p>
        </div>
        <div class="imageshere ih-purch"></div>
        <div class="quote">
        <p>
        "I just received the print and it's stunning. Looks even better in real life. I'm very happy, thanks again!"
          <span class="quoter i">THIBAULT VIGORIE, Fr</span>
        </p>
        </div>
      </section>
      
      <section>
      <h1 class="abouth1">AVAILABLE WORK</h1>
       <p> 
       A lot of people follow me, so my art is often collected by the time it's finished. However, I'm creating new work all the time; keep watching this space. Prices are listed with the<span class="toAvail u"> Available Gallery</span> images. <span class="u cta">Contact me</span> to learn more about a piece, and for an electronic/in-person viewing of it.
       
    
     <br><br></p>
       <h1 class="abouth1">   CHOOSING YOUR PRINTS  </h1>
       <p>
       Museum-quality, limited-edition prints of WinterboyArt are available in various papers or canvas. Prices shown range from the smallest available paper print (12" short side) to full-size stretched canvas. Long-lasting archival inks reproduce precisely the color and tone of original paintings.<span class="u cta"> Contact me</span> to order a print and/or ask about custom sizes. Turnaround time generally 10 days.


     </p>
      </section>
     
      </div>`;

      break;
    case "linkig":
      window.open("http://www.instagram.com/winterboy76", "_blank");
      break;
    case "linkyt":
      window.open("https://www.youtube.com/c/AlanWinterboy", "_blank");
      break;
    case "linkfb":
      window.open("https://www.facebook.com/alan.winter3", "_blank");
      break;
    case "linktt":
      window.open("https://www.tiktok.com/@winterboyart", "_blank");
      break;
    case "linkstroutco":
      window.open("https://www.strout.co", "_blank");
      break;
    default:
      break;
  }
};

export { controller, rockMonitor, hamHit, hamburger, linkListArray };
