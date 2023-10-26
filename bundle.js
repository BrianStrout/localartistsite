(()=>{var w=Array.from(document.querySelectorAll(".slide")),q=document.getElementById("slider-disp"),v=!1,L=()=>{if(v){if(v){w.forEach(e=>{e.style.animationPlayState="running"}),Array.from(document.querySelectorAll(".pop-elem")).forEach(e=>{e.remove()}),v=!1;return}}else{w.forEach(e=>{e.style.animationPlayState="paused"}),v=!0;return}},I=(e,t)=>{let a=document.querySelector(".pop-up-gallery-left"),o=document.querySelector(".pop-up-slide-title"),n=document.querySelector(".pop-up-slide-desc");a.style.backgroundImage=`url("./src/images/galleries/${e.galleryname}/${e.galleryArray[t].addy}")`,o.innerHTML=`${e.galleryArray[t].title}`,n.innerHTML=`${e.galleryArray[t].desc}`},H=e=>{Array.from(document.querySelectorAll(".pop-elem")).forEach(s=>{s.remove()}),L();let t=document.createElement("div");t.classList.add("pop-up-gallery-case"),t.classList.add("pop-elem"),t.innerHTML="",q.appendChild(t);let a=document.createElement("div");a.classList.add("pop-up-gallery-left"),a.classList.add("pop-elem"),a.style.backgroundImage=`url(${e.mainImage})`,a.innerHTML="",t.appendChild(a);let o=document.createElement("div");o.classList.add("exit-sign"),o.classList.add("pop-elem"),o.innerHTML="<h2>&#x2715</h2>",a.appendChild(o),o.addEventListener("click",()=>{L()});let n=document.createElement("div");n.classList.add("pop-up-gallery-hero"),n.classList.add("pop-elem"),n.innerHTML="",a.appendChild(n);let i=document.createElement("div");i.classList.add("popUpSlideBox"),i.classList.add("pop-elem"),i.innerHTML="",a.appendChild(i);let r=document.createElement("h4");r.classList.add("pop-up-slide-header"),r.classList.add("pop-elem"),r.innerHTML="",i.appendChild(r);let d=document.createElement("h4");d.classList.add("pop-up-slide-title"),d.classList.add("pop-elem"),d.innerHTML="",r.appendChild(d);let m=document.createElement("div");m.classList.add("pop-up-slide"),m.classList.add("cta"),m.classList.add("pop-elem"),m.innerHTML="",r.appendChild(m);let p=document.createElement("p");p.classList.add("pop-up-slide-desc"),p.classList.add("pop-elem"),p.innerHTML="",i.appendChild(p);let l=document.createElement("div");l.classList.add("pop-up-gallery-right"),l.classList.add("pop-elem"),l.innerHTML="",t.appendChild(l);for(let s=0;s<20;s++)if(e.galleryArray[s]){let u=document.createElement("div");u.classList.add("pop-up-gallery-thumb"),u.classList.add("pop-elem"),u.style.backgroundImage=`url( "./src/images/galleries/${e.galleryname}/${e.galleryArray[s].addy}")`,l.appendChild(u);let E=document.createElement("div");E.classList.add("screen"),u.appendChild(E),u.addEventListener("click",()=>{I(e,s)})}let g=document.createElement("div");g.classList.add("pop-up-gallery-disp"),g.classList.add("pop-elem"),g.innerHTML="",l.appendChild(g),I(e,0)};async function h(e){let a=await(await fetch("./src/galleryData.JSON")).json();console.log("door"+e);for(let o of a)if(o.galleryname===e){H(o);return}else console.log("error with gallery launch")}var f=document.getElementById("rock--bottom--monitor"),y=document.getElementById("mobileShower"),k=Array.from(document.querySelectorAll(".link--clickable")),A=document.getElementById("bottom--linker--box"),b=!1,c=e=>{switch(console.log(e),b===!0&&(y.classList.remove("mobile-hider"),A.classList.add("no-touch"),k.forEach(t=>{t.classList.add("mobile-hider")}),b=!1),e.id){case"mobileShower":y.classList.add("mobile-hider"),A.classList.remove("no-touch"),k.forEach(o=>{o.classList.remove("mobile-hider"),b=!0});break;case"commissions":f.innerHTML=`<div class="commission">
      <section class="rock--comm--quotes">
        <div class="quote">
          <p>\u201CI have a BFA from one of the finest art schools in the country. I\u2019ve seen the greats, both old and new, up close. I EASILY put Alan Winter in the category of my top 20 favorite artists in the world.\u201D
          
            <span class="quoter i">TAMMY KIRBY, CA</span>
          </p>
        </div>
        <div class="imageshere ih-comm"></div>
        <div class="quote">
          <p>
          \u201CAlan Winter is either going to have to find a new line of work, or we\u2019re going to have to win the lottery. Our kids are already fighting over which artworks they\u2019ll inherit!\u201D

            <span class="quoter i">DAKOTA BUTTERFIELD, VT</span>
          </p>
        </div>
      </section>
      
      <section>
      <h1 class="abouth1">Commissions</h1>
       <p>
       Whether you\u2019re seeking your own version of a Winterboy artwork that's already been collected by someone else, or hoping to recapture the light and energy of a treasured moment or place, I can paint that for you!
       <br><br>
       I'll bring your vision to life, or lend you mine. We'll consult as much as we need to be sure of what we're after. Billing is $3 per sq inch of canvas size, 50% down to start the work. I can paint in acrylic or oil; turnaround about 4 weeks. <span class="u cta"> Let's start the conversation </span> that leads to a cherished piece of WB art in your home. 

      </p>
      </section>
     
      </div>`;break;case"purchase":console.log("you have clicked purchase"),f.innerHTML=`<div class="commission">
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
       
        </div>`;break;case"about":f.innerHTML=`<div class="commission">
          <section class="rock--comm--quotes">
            <div class="quote">
              <p>
              \u201CHis art reflects so much of my inner person. His expressions of nature reflect my joy in it.\u201D
              
                <span class="quoter i">MARTHA KELLER, NH</span>
              </p>
            </div>
            <div class="imageshere ih-about"></div>
            <div class="quote">
              <p>
              "The \u2018Prince\u2019 of painting\u2013-eclectic, not bound by genres, always moving into new space. Divine, touching, and awe-inspiring; it\u2019s like there are little pieces of your soul in each of his works.\u201D
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
           <i>"My work is informed by love of trees, astronomy, physics, and flying things. Though painting itself is a form of meditation, art is not a solo sport to me. I love sharing my process and progress, and consider it a service to humanity. But it's not altruism, really; you forever show me things that I don\u2019t see, lead me in new directions, and even give me 'new eyes' if I'm stuck.
           <br> 
           <br> 
           "What we focus on grows. For every ugly thing demanding our attention 24\xD77, there are a thousand beautiful things. I paint to contemplate those beautiful things, and to help you do the same."
           </i>
          </p>
          </section>
          
          </div>`;break;case"contact":f.innerHTML=`<div class="commission">
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
        </div>`;break;case"submit":break;case"formReset":console.log("reset>?");let t=Array.from(document.querySelectorAll("input")),a=document.querySelector("textarea");t.push(a),t.forEach(o=>{o.value=""}),f.innerHTML=`<div class="commission">
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
     
      </div>`;break;case"linkig":window.open("http://www.instagram.com/winterboy76","_blank");break;case"linkyt":window.open("https://www.youtube.com/c/AlanWinterboy","_blank");break;case"linkfb":window.open("https://www.facebook.com/alan.winter3","_blank");break;case"linktt":window.open("https://www.tiktok.com/@winterboyart","_blank");break;case"linkstroutco":window.open("https://www.strout.co","_blank");break;default:break}};console.log("updated");var C=[document.getElementById("linkig"),document.getElementById("linkyt"),document.getElementById("linkfb"),document.getElementById("linktt"),document.getElementById("linkstroutco")],S=Array.from(document.querySelectorAll(".link--clickable"));y.addEventListener("click",e=>{c(e.target)});y.addEventListener("touchstart",e=>{c(e.target)});S.forEach(e=>{e.addEventListener("click",()=>{c(e)}),e.addEventListener("touchstart",()=>{c(e)})});C.forEach(e=>{e.addEventListener("click",t=>{c(e)}),e.addEventListener("touchstart",t=>{c(e)})});var O=document.getElementById("launch"),N=Array.from(document.querySelectorAll(".plant")),T=Array.from(document.querySelectorAll(".farm")),_=document.getElementById("blanket"),R=document.getElementById("fallingLeavesContainer"),P=document.getElementById("slider-disp-top"),G=document.getElementById("slider-disp-bottom"),B=document.getElementById("titleTrack");var Y=document.getElementById("leafFront"),$=document.getElementById("leafBack");var V=Array.from(document.querySelectorAll(".leaf--front"));var x=Array.from(document.querySelectorAll(".slide"));var M=document.getElementById("rockBottom");var W=()=>{setTimeout(()=>{B.classList.add("outlined")},1e3),setTimeout(()=>{B.classList.add("lit-with-shadow")},2400),setTimeout(()=>{_.classList.add("transparent")},3500),setTimeout(()=>{T.forEach(function(e,t){e.classList.add("grow")}),R.classList.remove("transparent")},6e3),setTimeout(()=>{N.forEach((e,t)=>{e.classList.add("normalize")})},5e3),setTimeout(()=>{T.forEach((e,t)=>{e.classList.add("farmlandbob")}),x.forEach(e=>{e.style.animationPlayState="running"})},7500)};x.forEach(e=>{e.addEventListener("click",t=>{h(t.target.id)}),e.addEventListener("touchstart",t=>{h(t.target.id)})});document.addEventListener("touchstart",e=>{if(e.target.classList.contains("cta")){M.scrollIntoView({behavior:"smooth"}),document.getElementById("rock--bottom--monitor").innerHTML=`<div class="commission">
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
     </div>`;return}if(e.target.classList.contains("formReset")&&c(e.target),e.target.classList.contains("btn-primary")){e.preventDefault();let t=document.getElementById("myForm"),a={tes:"test",service_id:"service_cg4lo4s",template_id:"template_fejt36a",form:document.getElementById("myForm"),user_id:"sMWYJVw_Of2YBvfKm",template_params:{"sender-name":"","sender-email":""}},o=document.getElementById("fromName").value,n=document.getElementById("fromEmail").value,i=document.getElementById("message").value;console.log("attempting submitting");let r=/^[a-z a-z]+$/gi,d=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,m=/.{8}/,p="service_cg4lo4s",l="template_fejt36a",g=a.tes,s={fromName:document.getElementById("fromName").value,fromEmail:document.getElementById("fromEmail").value,message:document.getElementById("message").value};if(console.log(s),console.log("^^^ params"),r.test(o)){if(console.log("passing verification step 1"),d.test(n))if(console.log("passing verification step 2"),m.test(i)){console.log("passing verification step 3"),console.log("submitting"),emailjs.send(p,l,s).then(u=>{console.log(s),t.innerHTML="<div style='display:flex; justify-content:center'> Thank you for your email <br> I will be in touch</div>",document.querySelector(".button--box").style="display: none"});return}else{console.log("fail message");return}console.log("fail email");return}console.log("fail name");return}e.target.classList.contains("toAvail")&&(console.log("avail?"),document.getElementById("studio").scrollIntoView({behavior:"smooth"}),h("available"))});document.addEventListener("click",e=>{if(e.target.classList.contains("cta")){M.scrollIntoView({behavior:"smooth"}),document.getElementById("rock--bottom--monitor").innerHTML=`<div class="commission">
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
     </div>`;return}if(e.target.classList.contains("formReset")&&c(e.target),e.target.classList.contains("btn-primary")){e.preventDefault();let t=document.getElementById("myForm"),a={tes:"test",service_id:"service_cg4lo4s",template_id:"template_fejt36a",form:document.getElementById("myForm"),user_id:"sMWYJVw_Of2YBvfKm",template_params:{"sender-name":"","sender-email":""}},o=document.getElementById("fromName").value,n=document.getElementById("fromEmail").value,i=document.getElementById("message").value;console.log("attempting submitting");let r=/^[a-z a-z]+$/gi,d=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,m=/.{8}/,p="service_cg4lo4s",l="template_fejt36a",g=a.tes,s={fromName:document.getElementById("fromName").value,fromEmail:document.getElementById("fromEmail").value,message:document.getElementById("message").value};if(console.log(s),console.log("^^^ params"),r.test(o)){if(console.log("passing verification step 1"),d.test(n))if(console.log("passing verification step 2"),m.test(i)){console.log("passing verification step 3"),console.log("submitting"),emailjs.send(p,l,s).then(u=>{console.log(s),t.innerHTML="<div style='display:flex; justify-content:center'> Thank you for your email <br> I will be in touch</div>",document.querySelector(".button--box").style="display: none"});return}else{console.log("fail message");return}console.log("fail email");return}console.log("fail name");return}e.target.classList.contains("toAvail")&&(console.log("avail?"),document.getElementById("studio").scrollIntoView({behavior:"smooth"}),h("available"))});window.onload=()=>{console.log("window loaded"),W(),c(S[0])};})();
