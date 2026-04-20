export function init() 
{
  // ── PRODUCT DATA (replace with Shopify Storefront API calls) ──
  const products = [
    {
      name: "Collapsed Coat No. 7",
      price: "$940",
      color: "#2a1f1a",
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
      w: 280, h: 380,
      rot: "-3deg",
      triggerAt: 0.04,
      pos: { x: 0.62, y: 0.15 }
    },
    {
      name: "Void Linen Shirt",
      price: "$340",
      color: "#1c1a17",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      w: 240, h: 300,
      rot: "2.5deg",
      triggerAt: 0.07,
      pos: { x: 0.08, y: 0.32 }
    },
    {
      name: "Ashen Trousers",
      price: "$480",
      color: "#181512",
      src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=697",
      w: 220, h: 340,
      rot: "-1.5deg",
      triggerAt: 0.13,
      pos: { x: 0.72, y: 0.48 }
    },
    {
      name: "Raw Hem Jacket",
      price: "$820",
      color: "#1a1714",
      src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&q=80",
      w: 300, h: 360,
      rot: "4deg",
      triggerAt: 0.19,
      pos: { x: 0.18, y: 0.58 }
    },
    {
      name: "Ceremony Vest",
      price: "$290",
      color: "#211c17",
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80",
      w: 260, h: 310,
      rot: "-2deg",
      triggerAt: 0.26,
      pos: { x: 0.55, y: 0.22 }
    },
    {
      name: "Slit Skirt No. 3",
      price: "$365",
      color: "#1d1a15",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
      w: 230, h: 350,
      rot: "1.5deg",
      triggerAt: 0.33,
      pos: { x: 0.04, y: 0.18 }
    },
    {
      name: "Dusk Overcoat",
      price: "$1,140",
      color: "#16130f",
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80",
      w: 290, h: 390,
      rot: "-4.5deg",
      triggerAt: 0.40,
      pos: { x: 0.68, y: 0.62 }
    },
    {
      name: "Woven Wrap Top",
      price: "$245",
      color: "#201d18",
      src: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80",
      w: 250, h: 300,
      rot: "3deg",
      triggerAt: 0.47,
      pos: { x: 0.36, y: 0.70 }
    },
  ];

  // ── BUILD IMAGE ELEMENTS ──
  const canvas = document.getElementById('canvas');
  const imgEls = [];

  products.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'float-img';
    el.style.setProperty('--rot', p.rot);
    el.style.setProperty('--w', p.w + 'px');
    el.style.setProperty('--h', p.h + 'px');

    // Initial position as % of viewport
    el.style.left = (p.pos.x * 100) + 'vw';
    el.style.top  = (p.pos.y * 100) + 'vh';

    el.innerHTML = `
      <img src="${p.src}" alt="${p.name}" draggable="false">
      <div class="img-price">${p.price}</div>
      <div class="img-label">${p.name}</div>
    `;

    canvas.appendChild(el);
    imgEls.push({ el, product: p, visible: false });
  });

  // ── SCROLL-DRIVEN FADE IN/OUT ──
  function onScroll() {
    const scrollY = window.scrollY;
    const docH = document.body.scrollHeight - window.innerHeight;
    const progress = scrollY / docH;

    imgEls.forEach(({ el, product }) => {
      const t = product.triggerAt;
      const fadeInEnd   = t + 0.04;
      const fadeOutStart = t + 0.28;
      const fadeOutEnd  = t + 0.36;

      let opacity = 0;

      if (progress < t) {
        opacity = 0;
      } else if (progress < fadeInEnd) {
        opacity = (progress - t) / (fadeInEnd - t);
      } else if (progress < fadeOutStart) {
        opacity = 1;
      } else if (progress < fadeOutEnd) {
        opacity = 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      } else {
        opacity = 0;
      }

      el.style.opacity = opacity;
      const scale = 0.95 + opacity * 0.05;
      // Preserve drag transform but add scale
      const currentTranslate = el._translateCSS || '';
      el.style.transform = `${currentTranslate} rotate(${product.rot}) scale(${scale})`;

      el.classList.toggle('visible', opacity > 0.5);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── DRAG BEHAVIOR ──
  imgEls.forEach(({ el, product }) => {
    let isDragging = false;
    let startX, startY, origLeft, origTop;
    let hasMoved = false;

    el.addEventListener('mousedown', (e) => {
      isDragging = true;
      hasMoved = false;
      startX = e.clientX;
      startY = e.clientY;
      origLeft = el.offsetLeft;
      origTop  = el.offsetTop;
      el.style.zIndex = 600;
      el.style.transition = 'opacity 0.6s ease, box-shadow 0.3s';
      el.style.boxShadow = '0 30px 80px rgba(0,0,0,0.7)';
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasMoved = true;
      el._offsetX = dx;
      el._offsetY = dy;
      el.style.left = (origLeft + dx) + 'px';
      el.style.top  = (origTop  + dy) + 'px';
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      el.style.zIndex = '';
      el.style.boxShadow = '';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s';
    });

    // ── CLICK = LIGHTBOX (only if not dragged) ──
    el.addEventListener('click', () => {
      if (hasMoved) return;
      openLightbox(product);
    });
  });

  // ── LIGHTBOX ──
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightboxImg');
  const lbName   = document.getElementById('lightboxName');
  const lbPrice  = document.getElementById('lightboxPrice');

  function openLightbox(p) {
    lbImg.src = p.src.replace('w=500', 'w=900');
    lbImg.alt = p.name;
    lbName.textContent = p.name;
    lbPrice.textContent = p.price;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });  

  //MODAL
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  const modalClose = document.getElementById("modalClose");

  function openModal(message){
    modalMessage.textContent = message;
    modal.classList.add("open");
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.classList.remove("open");
    document.body.style.overflow = '';
  }

  modalClose.onclick = closeModal;

  modal.addEventListener("click", (e)=>{
    if(e.target === modal) closeModal();
  });

  // MODAL LISTENER -- replace when real case scenario.
  document.querySelectorAll(".clickeable").forEach(b=>{
    b.onclick = function(){
      
      openModal("Hey! this is a sample, that page isn't integrated.");
    }
  });
  
}
