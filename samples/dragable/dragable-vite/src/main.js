import './css/index.css'
import { init } from './src.js'

document.querySelector('#app').innerHTML = `
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
    <li><a href="#" class="clickeable">Collections</a></li>
    <li><a href="#" class="clickeable">Archive</a></li>
    <li><a href="#" class="clickeable">About</a></li>
  </ul>
  <button class="nav-cart clickeable">Cart (0)</button>
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
    <button class="lightbox-add clickeable">Add to Cart</button>
  </div>
</div>

<!-- SIMPLE MODAL -->
<div class="modal" id="modal">
  <div class="modal-content">
    <p id="modalMessage">Hello</p>
    <button id="modalClose" class="lightbox-add">Close</button>
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
    <button class="cta-btn clickeable"><span>Shop the Collection</span></button>
  </section>

  <footer>
    <div class="footer-logo">Obscura</div>
    <div class="footer-copy">© 2026 Obscura. All rights reserved.</div>
  </footer>
</div>
</body>
</html>
`

init();
