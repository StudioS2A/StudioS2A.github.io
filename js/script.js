// ==========================================================
// Studio S²A — site interactivity (vanilla JS, no dependencies)
// ==========================================================

/* ----------------------------------------------------------
   PROJECT GALLERY DATA
   To add a render: drop the file in the project's folder under
   assets/projects/ and add its path to the images list below.
   To reorder: reorder the list. The cover image shown in the
   grid is set separately in index.html.
   ---------------------------------------------------------- */
const PROJECTS = {
  'gupta-residence': {
    title: 'Gupta Residence',
    meta: '2BHK DDA Flat · Interiors · Mayur Vihar Phase 2, Delhi',
    description: 'Interiors for a 2BHK DDA flat in Mayur Vihar Phase 2 — the studio’s first project. Soft arches recur through the home, from the fluted TV wall and wardrobe shutters to the backlit dressing mirror, while a palette of warm neutrals, walnut-toned wood and marble keeps the compact plan calm and cohesive across the living room, bedrooms, kitchen and bath.',
    images: [
      'assets/projects/gupta-residence/01.webp',
      'assets/projects/gupta-residence/02.webp',
      'assets/projects/gupta-residence/03.webp',
      'assets/projects/gupta-residence/04.webp',
      'assets/projects/gupta-residence/05.webp',
      'assets/projects/gupta-residence/06.webp',
      'assets/projects/gupta-residence/07.webp'
    ]
  },
  'mayur-vihar-3bhk': {
    title: 'Sharma Residence',
    meta: '3BHK DDA Flat · Interiors · Mayur Vihar Phase 1, Delhi',
    description: 'Interiors for a 3BHK DDA flat in Mayur Vihar Phase 1. A compact material palette of grey stone finishes and dark wood is lifted by patterned chevron tiling in the bathrooms and a black stone kitchen counter, giving each room its own character without breaking the whole.',
    images: [
      'assets/projects/mayur-vihar-3bhk/01.webp',
      'assets/projects/mayur-vihar-3bhk/02.webp',
      'assets/projects/mayur-vihar-3bhk/03.webp',
      'assets/projects/mayur-vihar-3bhk/04.webp'
    ]
  },
  'rk-ashram-office': {
    title: 'AISCD Office',
    meta: 'Office Interiors · Commercial · RK Ashram Marg, New Delhi',
    description: 'A compact office fit-out for AISCD on RK Ashram Marg, New Delhi — the studio’s most recent project. Light oak-finish storage runs wall to wall to make the most of a small footprint, with a shared work table, a display cabinet for awards and a pantry corner folded into a single room.',
    images: [
      'assets/projects/rk-ashram-office/01.webp',
      'assets/projects/rk-ashram-office/02.webp'
    ]
  },
  'thesis': {
    title: 'The Cellexis Hub',
    meta: 'Final Year Thesis · Residential, Hotel, Retail & Offices',
    description: 'The Cellexis Hub is a mixed-use urban hub developed as a final-year architecture thesis. Three circular residential towers with rotating balconies hold 5BHK, 4BHK and 3BHK apartments, a twisting tower houses the hotel, and curved office blocks rise from a retail podium at street level — all tied together by landscaped roof terraces and a public plaza.',
    images: [
      'assets/projects/thesis/01.webp',
      'assets/projects/thesis/02.webp',
      'assets/projects/thesis/03.webp',
      'assets/projects/thesis/04.webp',
      'assets/projects/thesis/05.webp',
      'assets/projects/thesis/06.webp'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ---- current year in footer ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- header background on scroll ---- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ---- scroll reveal animation ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---- project filter (Work section) ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  /* ---- project gallery lightbox ---- */
  const lightbox   = document.getElementById('lightbox');
  const stage      = lightbox.querySelector('.lightbox-stage');
  const stageImg   = document.getElementById('lightboxImg');
  const titleEl    = document.getElementById('lightboxTitle');
  const metaEl     = document.getElementById('lightboxMeta');
  const descEl     = document.getElementById('lightboxDesc');
  const counterEl  = document.getElementById('lightboxCounter');
  const thumbsEl   = document.getElementById('lightboxThumbs');
  const btnClose   = document.getElementById('lightboxClose');
  const btnPrev    = document.getElementById('lightboxPrev');
  const btnNext    = document.getElementById('lightboxNext');

  let current = null;   // active project object
  let index = 0;        // active image index
  let lastFocus = null; // element to return focus to on close

  const pad = (n) => String(n).padStart(2, '0');
  const preload = (src) => { const im = new Image(); im.src = src; };

  const showImage = (i) => {
    if (!current) return;
    const n = current.images.length;
    index = (i + n) % n;

    stageImg.classList.add('is-fading');
    setTimeout(() => {
      stageImg.src = current.images[index];
      stageImg.alt = `${current.title} — view ${index + 1} of ${n}`;
      requestAnimationFrame(() => stageImg.classList.remove('is-fading'));
    }, 120);

    counterEl.textContent = `${pad(index + 1)} / ${pad(n)}`;

    thumbsEl.querySelectorAll('button').forEach((b, k) => {
      b.classList.toggle('is-active', k === index);
      if (k === index) {
        const target = b.offsetLeft - (thumbsEl.clientWidth / 2) + (b.clientWidth / 2);
        thumbsEl.scrollTo({ left: target, behavior: 'smooth' });
      }
    });

    preload(current.images[(index + 1) % n]);
    preload(current.images[(index - 1 + n) % n]);
  };

  const renderThumbs = () => {
    thumbsEl.innerHTML = '';
    current.images.forEach((src, k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Show view ${k + 1}`);
      const im = document.createElement('img');
      im.src = src;
      im.alt = '';
      b.appendChild(im);
      b.addEventListener('click', () => showImage(k));
      thumbsEl.appendChild(b);
    });
    const single = current.images.length < 2;
    thumbsEl.hidden = single;
    btnPrev.hidden = single;
    btnNext.hidden = single;
  };

  const openGallery = (id, trigger) => {
    current = PROJECTS[id];
    if (!current) return;
    lastFocus = trigger || document.activeElement;

    titleEl.textContent = current.title;
    metaEl.textContent = current.meta;
    descEl.textContent = current.description;
    renderThumbs();
    showImage(0);

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  };

  const closeGallery = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openGallery(link.dataset.project, link);
    });
  });

  btnClose.addEventListener('click', closeGallery);
  btnPrev.addEventListener('click', () => showImage(index - 1));
  btnNext.addEventListener('click', () => showImage(index + 1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeGallery(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeGallery();
    else if (e.key === 'ArrowRight') showImage(index + 1);
    else if (e.key === 'ArrowLeft') showImage(index - 1);
  });

  // swipe left / right on touch devices
  let touchStartX = null;
  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) showImage(index + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

});
