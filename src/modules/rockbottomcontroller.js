const rockMonitor = document.getElementById("rock--bottom--monitor");

const controller = (e) => {
  console.log("control");
  console.log(e.id);
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
       <p>
       Whether you’re looking to recapture the tone of one of my paintings that is no longer available, or you are looking to explore new visual territory, it is a continuing pleasure to be able to offer commission paintings as a private service. All of my paintings are painted in oil, and I am happy to discuss what canvas size makes sense for your interior decoration needs. Please reach out to start the conversation that ends with you holding a piece of art you love.
<span class="sig">
-Alan</span>
</p>
      </section>
      <section>
      <h1>Pricing</h1>
      <p>All existing paintings and prints are available for private sale, please reach out directly and I will happily discuss pricing and shipping (if applicable) with you.
      </p>
      </span>
      `;
      break;

    case "about":
      rockMonitor.innerHTML = `
      <h1>About</h1>
      <p>I’m a naturalist artist living in the Hill Country of Texas. My work is informed by parallels between human physiology and evolutionary processes evident in the world, and by my love of astronomy, physics, and the search for ultimate meaning in the universe.

      My current Stained-Glass Tree and Orb series straddle the line between representation and abstraction of our unity with the natural world. The trunks and branches of my trees, rendered as counterparts to the human body and its circulatory and pulmonary systems, generally appear solid and visually 3D. But the trees’ twigs, leaves, flowers and fruit flatten into two dimensions, morphing into ‘stained-glass’ cells– tiny, individualized bits of color and emotion that surround the tree like a halo. And in the Orb series, energy lines transcend earthly bounds and become astral, hinting at divine interconnections.
      
      Unity is also reflected in my creative process. I begin each new piece alone in my studio, working from reference images. But I don’t see painting as a solo sport. I often interact with other people via technology while I paint, or listen to podcasts, lectures, debates. The transformational energy of human words and ideas guides composition and color, even the actual brush strokes, of a piece. They add rhythm and vibrancy to the work, and make each piece a reflection of my life at the moment.
      
      I share progressions of my paintings through social media, too, which allows me to unite with viewer experiences in almost realtime. People forever see things in my work that I don’t, and when I’m stuck, their feedback often helps me view my work with new eyes.
      
      In the final stages of a painting, I’m again alone in the studio, leaving and returning, listening carefully to the Muse. At this point, the process becomes a meditative reflection, a personal connection to my own non-religious divine.
      
      For every ugly thing demanding our attention 24×7, there are a thousand beautiful things. What we focus on grows. My art focus and service is to demonstrate that beautiful divine unity between ourselves and the universe.
      
      </p>
      
     `;
    default:
      break;
    case "exhibits":
      rockMonitor.innerHTML = `
      <h1>  EXHIBITIONS</h1>
        <ul style=" list-style: none">
     
     <li> 2022  “Abundance” juried exhibit, Art For the People Gallery. Austin, TX</li>
      
     <li> 2022  “Art Spree” juried exhibit, Art For the People Gallery. Austin, TX</li>
      
     <li> 2021  “reIMAGINE” juried exhibit, Round Rocks Art Association. Round Rock, TX</li>
      
     <li> 2020  Member Exhibit, The Hive Gallery.
      Bee Cave, TX</li>
      
      <li> 2018  “The October Trees” solo exhibit, Lake Travis Community Library.
      Lakeway, TX</li>
      
      <li>  2016  “The Loving Trees”  solo exhibit, Adams Gallery.
      Lakeway, TX</li>
      
      <li> 2014  “Dreamscapes” solo exhibit, Salem Film Festival.
      Salem, MA</li>
      
      <li> 2014  “NE Regional Juried Exhibit”  Marblehead Arts Association.
      Marblehead, MA</li>
      
      <li> 2014  “Alan Winter’s Color World” solo exhibit, Atomic Gallery. Marblehead, MA</li>
      
      <li> 2013  “Marblehead Festival of the Arts Juried Exhibit.”
      Marblehead, MA</li>
      
      <li> 2012  “Marblehead Festival of the Arts Juried Exhibit.”
      Marblehead, MA</li>
      </ul>
        
        
        `;
      break;
  }

  //   console.log(rockMonitor.innerHTML);
};

export { controller, rockMonitor };
