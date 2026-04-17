(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=[{name:`Collapsed Coat No. 7`,price:`$940`,color:`#2a1f1a`,src:`https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80`,w:280,h:380,rot:`-3deg`,triggerAt:.04,pos:{x:.62,y:.15}},{name:`Void Linen Shirt`,price:`$340`,color:`#1c1a17`,src:`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80`,w:240,h:300,rot:`2.5deg`,triggerAt:.07,pos:{x:.08,y:.32}},{name:`Ashen Trousers`,price:`$480`,color:`#181512`,src:`https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=697`,w:220,h:340,rot:`-1.5deg`,triggerAt:.13,pos:{x:.72,y:.48}},{name:`Raw Hem Jacket`,price:`$820`,color:`#1a1714`,src:`https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&q=80`,w:300,h:360,rot:`4deg`,triggerAt:.19,pos:{x:.18,y:.58}},{name:`Ceremony Vest`,price:`$290`,color:`#211c17`,src:`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80`,w:260,h:310,rot:`-2deg`,triggerAt:.26,pos:{x:.55,y:.22}},{name:`Slit Skirt No. 3`,price:`$365`,color:`#1d1a15`,src:`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80`,w:230,h:350,rot:`1.5deg`,triggerAt:.33,pos:{x:.04,y:.18}},{name:`Dusk Overcoat`,price:`$1,140`,color:`#16130f`,src:`https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80`,w:290,h:390,rot:`-4.5deg`,triggerAt:.4,pos:{x:.68,y:.62}},{name:`Woven Wrap Top`,price:`$245`,color:`#201d18`,src:`https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80`,w:250,h:300,rot:`3deg`,triggerAt:.47,pos:{x:.36,y:.7}}],t=document.getElementById(`canvas`),n=[];e.forEach((e,r)=>{let i=document.createElement(`div`);i.className=`float-img`,i.style.setProperty(`--rot`,e.rot),i.style.setProperty(`--w`,e.w+`px`),i.style.setProperty(`--h`,e.h+`px`),i.style.left=e.pos.x*100+`vw`,i.style.top=e.pos.y*100+`vh`,i.innerHTML=`
      <img src="${e.src}" alt="${e.name}" draggable="false">
      <div class="img-price">${e.price}</div>
      <div class="img-label">${e.name}</div>
    `,t.appendChild(i),n.push({el:i,product:e,visible:!1})});function r(){let e=window.scrollY/(document.body.scrollHeight-window.innerHeight);n.forEach(({el:t,product:n})=>{let r=n.triggerAt,i=r+.04,a=r+.28,o=r+.36,s=0;s=e<r?0:e<i?(e-r)/(i-r):e<a?1:e<o?1-(e-a)/(o-a):0,t.style.opacity=s;let c=.95+s*.05,l=t._translateCSS||``;t.style.transform=`${l} rotate(${n.rot}) scale(${c})`,t.classList.toggle(`visible`,s>.5)})}window.addEventListener(`scroll`,r,{passive:!0}),r(),n.forEach(({el:e,product:t})=>{let n=!1,r,i,a,o,s=!1;e.addEventListener(`mousedown`,t=>{n=!0,s=!1,r=t.clientX,i=t.clientY,a=e.offsetLeft,o=e.offsetTop,e.style.zIndex=600,e.style.transition=`opacity 0.6s ease, box-shadow 0.3s`,e.style.boxShadow=`0 30px 80px rgba(0,0,0,0.7)`,t.preventDefault()}),window.addEventListener(`mousemove`,t=>{if(!n)return;let c=t.clientX-r,l=t.clientY-i;(Math.abs(c)>4||Math.abs(l)>4)&&(s=!0),e._offsetX=c,e._offsetY=l,e.style.left=a+c+`px`,e.style.top=o+l+`px`}),window.addEventListener(`mouseup`,()=>{n&&(n=!1,e.style.zIndex=``,e.style.boxShadow=``,e.style.transition=`opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s`)}),e.addEventListener(`click`,()=>{s||c(t)})});let i=document.getElementById(`lightbox`),a=document.getElementById(`lightboxImg`),o=document.getElementById(`lightboxName`),s=document.getElementById(`lightboxPrice`);function c(e){a.src=e.src.replace(`w=500`,`w=900`),a.alt=e.name,o.textContent=e.name,s.textContent=e.price,i.classList.add(`open`),document.body.style.overflow=`hidden`}document.getElementById(`lightboxClose`).addEventListener(`click`,()=>{i.classList.remove(`open`),document.body.style.overflow=``}),i.addEventListener(`click`,e=>{e.target===i&&(i.classList.remove(`open`),document.body.style.overflow=``)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(i.classList.remove(`open`),document.body.style.overflow=``)})}document.querySelector(`#app`).innerHTML=`
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OBSCURA — Headless Storefront</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=Fragment+Mono&display=swap" rel="stylesheet">
</head>
<body>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#">Obscura</a>
  <ul class="nav-links">
    <li><a href="#">Collections</a></li>
    <li><a href="#">Archive</a></li>
    <li><a href="#">About</a></li>
  </ul>
  <button class="nav-cart">Cart (0)</button>
</nav>

<!-- FLOATING IMAGE CANVAS (pointer-events: none on wrapper, all on children) -->
<div class="canvas" id="canvas"></div>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox">
  <button class="lightbox-close" id="lightboxClose">✕ Close</button>
  <div class="lightbox-img-wrap">
    <img id="lightboxImg" src="" alt="">
  </div>
  <div class="lightbox-meta">
    <div class="lightbox-name" id="lightboxName"></div>
    <div class="lightbox-price" id="lightboxPrice"></div>
    <button class="lightbox-add">Add to Cart</button>
  </div>
</div>

<!-- SCROLL DRIVER -->
<div class="scroll-driver">
  <!-- HERO -->
  <section style="height:100vh; position:relative;">
    <div class="hero">
      <div class="hero-eyebrow">SS 2026 — New Arrivals</div>
      <h1 class="hero-title">THE<br><em>UNSEEN</em><br>FORM</h1>
      <p class="hero-sub">Garments conceived in the space between silence and motion. Limited drops, unrepeated runs.</p>
    </div>
  </section>

  <!-- SCROLL SPACE for images to drift -->
  <div style="height:600vh; position:relative;">
    <div class="section-text" style="top:20%">
      <div class="section-tag">COLLECTION</div>
    </div>
    <div class="section-text" style="top:60%">
      <div class="section-tag">ARCHIVE</div>
    </div>
  </div>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-eyebrow">Limited — Season 25</div>
    <h2 class="cta-title">WEAR THE<br><span>SHADOW</span></h2>
    <p class="cta-body">Each piece is produced in runs of twelve. Once gone, unrepeated. No restocks. No reprints.</p>
    <button class="cta-btn"><span>Shop the Collection</span></button>
  </section>

  <footer>
    <div class="footer-logo">Obscura</div>
    <div class="footer-copy">© 2026 Obscura. All rights reserved.</div>
  </footer>
</div>
</body>
</html>
`,e();