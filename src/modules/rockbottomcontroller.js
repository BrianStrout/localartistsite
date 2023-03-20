const rockMonitor = document.getElementById("rock--bottom--monitor");
const hamburger = document.getElementById("mobileShower");
const linkListArray = Array.from(document.querySelectorAll(".link--clickable"));

let hamHit = false;

const controller = (e) => {
  // console.log(linkListArray);

  console.log(e.id);
  if (hamHit === true) {
    hamburger.classList.remove("mobile-hider");
    linkListArray.forEach((link) => {
      link.classList.add("mobile-hider");
    });
    hamHit = false;
  }

  switch (e.id) {
    case "mobileShower":
      // console.log("mobile function!");
      hamburger.classList.add("mobile-hider");
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
          
            <span class="quoter">TAMMY KIRBY, California</span>
          </p>
        </div>
        <div class="imageshere ih-comm"></div>
        <div class="quote">
          <p>
          “Alan Winter is either going to have to find a new line of work, or we’re going to have to win the lottery. Our kids are already fighting over which artworks they’ll inherit!”

            <span class="quoter">DAKOTA BUTTERFIELD, Vermont</span>
          </p>
        </div>
      </section>
      
      <section>
      <h1 class="abouth1" >Commission</h1>
       <p>
       I Can Paint <I>For</I> You <br>
       Whether you’re seeking your own version of Winterboy art that's already been collected, or hope to recapture the light and energy of a treasured moment or place, you can commission me to paint it for you. I'll bring your vision to life, or lend you mine. <I>$3 per sq canvas size; acrylic/oil, murals, too; turnaround about 4 weeks.</I> <span class="cta u"> Contact me</span> to start the conversation that leads to a beloved piece of WB art in your home.
       <span class="sig">
      -Alan Winter</span>
      </p>
      </section>
     
      </div>`;
      break;
    case "purchase":
      rockMonitor.innerHTML = `<div class="commission">
        <section class="rock--comm--quotes">
          <div class="quote">
          <p>
          "I'm really excited; Indra's Net is the first original piece of art I've ever purchased. It's both beautiful to look at and the concept of interconnected energy resonates. Now I can stare at it whenever I want."
          
            <span class="quoter">ALYSE SETTLES, Washington</span>
          </p>
          </div>
          <div class="imageshere ih-purch"></div>
          <div class="quote">
          <p>
          "I just received the print and it's stunning how even better it looks IRL. I'm very happy, thanks again!" 
          
            <span class="quoter">THIBAULT VIGORIE, France</span>
          </p>
          </div>
        </section>
        
        <section>
        <h1 class="abouth1">Purchase</h1>
         <p>
         All of my sales are direct to customer. Please <span class="u cta">get in touch</span> with any questions you might have, or check out my <span class="toAvail u"> Available paintings gallery.</span>
         <br><br>
         Dominated by the Muse,  sometimes trees, sometimes orbs, sometimes dragonflies. Right now I'm painting chickens.
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
              
                <span class="quoter">MARTHA KELLER, New Hampshire</span>
              </p>
            </div>
            <div class="imageshere ih-about"></div>
            <div class="quote">
              <p>
              “Alan Winter is the ‘Prince’ of painting–-eclectic, not bound by genres, always moving into new territory. His art is divine, touching, and awe-inspiring; it’s like there are little pieces of your soul in each of his paintings.”
                <span class="quoter">BRANDON HAYES, California</span>
              </p>
            </div>
          </section>
          
          <section>
          <h1 class="abouth1">About the Artist</h1>
           <p>
       

           Alan Winter, aka Winterboy, is a professional artist recently returned from Texas to the North Shore of Boston. He began painting as a hobby in college, becoming more serious about it in 2010. Since 2016, he's made his living exclusively as an artist, producing up to 40 pieces in oil or acrylic per year and finding collectors for most of them. He says,
           
           "My work is informed by love of trees, astronomy, physics, and flying things. 
           
           "To me, art is not a solo sport. I share my work on social media because people forever show me things that I don’t see, lead me in new directions, and help me view my canvases with new eyes if I'm stuck.
           
           "What we focus on grows. For every ugly thing demanding our attention 24×7, there are a thousand beautiful things just as real. I paint to focus on beautiful things, and hopefully to help others do the same."
          <span class="sig">
          -Alan</span>
          </p>
          </section>
          
          </div>`;
      break;
    case "contact":
      rockMonitor.innerHTML = `<div class="commission">
       <h1>Contact</h1>
          <form id="myForm">
          <!-- name -->
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="name"
              name="name"
              class="form-control"
              id="name"
              placeholder="enter your name"
            />
          </div>
    
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              placeholder="enter your email"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" id="submit" class="btn btn-primary">Submit</button>
        </form>
        <br>
        <a href="tel:617-501-5838">
        <div class = "phone-div"><div class="phone-icon"></div><h2>(617)501-5838</h2></div>
        </a>
        
    
        </div>`;
      break;

      // case "about":
      //   rockMonitor.innerHTML = `
      //   <div class="about">
      //   <div class="about-photo"></div>
      //   <h1>About</h1>
      //   <p>I’m a naturalist artist living in the Hill Country of Texas. My work is informed by parallels between human physiology and evolutionary processes evident in the world, and by my love of astronomy, physics, and the search for ultimate meaning in the universe.

      //   My current Stained-Glass Tree and Orb series straddle the line between representation and abstraction of our unity with the natural world. The trunks and branches of my trees, rendered as counterparts to the human body and its circulatory and pulmonary systems, generally appear solid and visually 3D. But the trees’ twigs, leaves, flowers and fruit flatten into two dimensions, morphing into ‘stained-glass’ cells– tiny, individualized bits of color and emotion that surround the tree like a halo. And in the Orb series, energy lines transcend earthly bounds and become astral, hinting at divine interconnections.

      //   Unity is also reflected in my creative process. I begin each new piece alone in my studio, working from reference images. But I don’t see painting as a solo sport. I often interact with other people via technology while I paint, or listen to podcasts, lectures, debates. The transformational energy of human words and ideas guides composition and color, even the actual brush strokes, of a piece. They add rhythm and vibrancy to the work, and make each piece a reflection of my life at the moment.

      //   I share progressions of my paintings through social media, too, which allows me to unite with viewer experiences in almost realtime. People forever see things in my work that I don’t, and when I’m stuck, their feedback often helps me view my work with new eyes.

      //   In the final stages of a painting, I’m again alone in the studio, leaving and returning, listening carefully to the Muse. At this point, the process becomes a meditative reflection, a personal connection to my own non-religious divine.

      //   For every ugly thing demanding our attention 24×7, there are a thousand beautiful things. What we focus on grows. My art focus and service is to demonstrate that beautiful divine unity between ourselves and the universe.

      //   </p></div>

      //  `;
      //   break;
      // case "exhibits":
      rockMonitor.innerHTML = `
      <h1>  EXHIBITIONS</h1>
        <ul style=" list-style: none">
     <li> <span class="year">2022</span>  “Abundance” juried exhibit, Art For the People Gallery. Austin, TX</li>
     <li> <span class="year">2022</span>  “Art Spree” juried exhibit, Art For the People Gallery. Austin, TX</li>
     <li> <span class="year">2021</span>  “reIMAGINE” juried exhibit, Round Rocks Art Association. Round Rock, TX</li>
     <li> <span class="year">2020</span>  Member Exhibit, The Hive Gallery.
      Bee Cave, TX</li>
      <li> <span class="year">2018</span>  “The October Trees” solo exhibit, Lake Travis Community Library.
      Lakeway, TX</li>
      <li>  <span class="year">2016</span>  “The Loving Trees”  solo exhibit, Adams Gallery.
      Lakeway, TX</li>
      <li> <span class="year">2014</span> “Dreamscapes” solo exhibit, Salem Film Festival.
      Salem, MA</li> 
      <li> <span class="year">2014</span>  “NE Regional Juried Exhibit”  Marblehead Arts Association.
      Marblehead, MA</li>
      <li> <span class="year">2014</span>  “Alan Winter’s Color World” solo exhibit, Atomic Gallery. Marblehead, MA</li>
      <li> <span class="year">2013</span>  “Marblehead Festival of the Arts Juried Exhibit.”
      Marblehead, MA</li>
      <li> <span class="year">2012</span>  “Marblehead Festival of the Arts Juried Exhibit.”
      Marblehead, MA</li>
      </ul>
        `;
      break;
    case "linkig":
      window.open("http://www.instagram.com/winterboy76", "_blank");
      break;
    case "linkyt":
      window.open("http://www.instagram.com/winterboy76", "_blank");
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
