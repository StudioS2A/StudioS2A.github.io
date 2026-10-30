/* ==========================================================
   Studio S²A — interactions (vanilla JS, no dependencies)
   ========================================================== */
(() => {
  'use strict';

  /* ----------------------------------------------------------
     PROJECT DATA — the single place to edit projects.
     r = orientation (l landscape / p portrait / s square)
     ratio = width ÷ height · pos = focal point when cropped
     pairs  = render ↔ site photo sliders ("Built, as drawn")
              order sets the order on the home page
     photos = extra site photographs shown in the case study
     ---------------------------------------------------------- */
  const P = 'assets/projects/';
  const BA = 'assets/before-after/';

  const PROJECTS = [
    {
      id: 'cellexis-hub',
      title: 'The Cellexis Hub',
      tag: 'Thesis',
      category: 'thesis',
      label: 'Thesis · Academic',
      short: 'Mixed‑use urban hub · Final year thesis',
      cover: P + 'thesis/05.webp',
      meta: [
        ['Type', 'Mixed‑use urban hub'],
        ['Programme', 'Three residential towers, hotel, retail podium, offices'],
        ['Scope', 'Architecture · Urban design'],
        ['Status', 'Final year thesis']
      ],
      description: 'The Cellexis Hub is a mixed‑use urban hub developed as a final‑year architecture thesis. Three circular residential towers with rotating balconies hold 5BHK, 4BHK and 3BHK apartments, a twisting tower houses the hotel, and curved office blocks rise from a retail podium at street level — all tied together by landscaped roof terraces and a public plaza.',
      images: [
        { src: P + 'thesis/02.webp', r: 'l', ratio: 1.5 },
        { src: P + 'thesis/05.webp', r: 'l', ratio: 1.5 },
        { src: P + 'thesis/04.webp', r: 'l', ratio: 1.5 },
        { src: P + 'thesis/06.webp', r: 'l', ratio: 1.5 },
        { src: P + 'thesis/03.webp', r: 's', ratio: 1, pos: '50% 62%' },
        { src: P + 'thesis/01.webp', r: 's', ratio: 1, pos: '50% 58%' }
      ],
      pairs: [],
      photos: []
    },
    {
      id: 'gupta-residence',
      title: 'Gupta Residence',
      tag: 'Interior Design',
      category: 'interiors',
      label: 'Residential · Interior Design',
      short: '2BHK DDA flat · Mayur Vihar Phase 2, Delhi',
      cover: P + 'gupta-residence/02.webp',
      meta: [
        ['Type', '2BHK DDA flat'],
        ['Location', 'Mayur Vihar Phase 2, Delhi'],
        ['Scope', 'Interior design'],
        ['Status', 'Completed']
      ],
      description: 'Interiors for a 2BHK DDA flat in Mayur Vihar Phase 2. Soft arches recur through the home, from the fluted TV wall and wardrobe shutters to the backlit dressing mirror, while a palette of warm neutrals, walnut‑toned wood and marble keeps the compact plan calm and cohesive across the living room, bedrooms, kitchen and bath.',
      images: [
        { src: P + 'gupta-residence/01.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/02.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/03.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/04.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/05.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/06.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/07.webp', r: 'l', ratio: 1.333 }
      ],
      pairs: [],
      photos: []
    },
    {
      id: 'sharma-residence',
      title: 'Sharma Residence',
      tag: 'Design & Build',
      category: 'design-build',
      label: 'Residential · Design & Build',
      short: '3BHK DDA flat · Mayur Vihar Phase 1, Delhi',
      cover: P + 'mayur-vihar-3bhk/01.webp',
      meta: [
        ['Type', '3BHK DDA flat'],
        ['Location', 'Mayur Vihar Phase 1, Delhi'],
        ['Scope', 'Interior design · Construction'],
        ['Status', 'Designed and built by Studio S²A']
      ],
      description: 'Designed and built by Studio S²A — the renovation of a 3BHK DDA flat in Mayur Vihar Phase 1, delivered from drawings to handover. The living room was reworked with panelled wall mouldings, a cove‑lit false ceiling and marble‑finish flooring; the kitchen pairs grey handleless cabinetry with a black stone counter and lit glass wall units; and the bathrooms are wrapped in patterned chevron tiling.',
      images: [
        { src: P + 'mayur-vihar-3bhk/01.webp', r: 'l', ratio: 1.5 },
        { src: P + 'mayur-vihar-3bhk/05.webp', r: 'p', ratio: 0.833 },
        { src: P + 'mayur-vihar-3bhk/02.webp', r: 'l', ratio: 1.333 },
        { src: P + 'mayur-vihar-3bhk/03.webp', r: 'p', ratio: 0.563 },
        { src: P + 'mayur-vihar-3bhk/04.webp', r: 'p', ratio: 0.563 }
      ],
      pairs: [
        { order: 1, caption: 'Kitchen', ar: '1 / 1', render: P + 'mayur-vihar-3bhk/02.webp', photo: P + 'mayur-vihar-3bhk/site-kitchen.jpg', fit: { render: [0, -8.46, 147.06, 110.29], photo: [-2.66, -30.11, 103.49, 137.99] } },
        { order: 3, caption: 'Living room', render: P + 'mayur-vihar-3bhk/05.webp', photo: P + 'mayur-vihar-3bhk/site-living-1.jpg', fit: { render: [-2.08, 0, 108.51, 104.17], photo: [-1.62, -8.64, 102.43, 109.26] } },
        { order: 4, caption: 'Washroom', render: P + 'mayur-vihar-3bhk/washroom-render.webp', photo: P + 'mayur-vihar-3bhk/site-washroom.jpg', fit: { render: [0, -26.91, 102.04, 160.22], photo: [-11.87, -13.2, 112.84, 120.37] } }
      ],
      photos: [
        P + 'mayur-vihar-3bhk/site-living-2.jpg',
        P + 'mayur-vihar-3bhk/site-living-3.jpg'
      ]
    },
    {
      id: 'aiscd-office',
      title: 'AISCD Office',
      tag: 'Design & Build',
      category: 'design-build',
      label: 'Commercial · Design & Build',
      short: 'Office fit‑out · RK Ashram Marg, New Delhi',
      cover: P + 'rk-ashram-office/02.webp',
      meta: [
        ['Type', 'Office interiors'],
        ['Location', 'RK Ashram Marg, New Delhi'],
        ['Scope', 'Interior design · Fit‑out · Construction'],
        ['Status', 'Designed and built by Studio S²A']
      ],
      description: 'A compact office fit‑out for AISCD on RK Ashram Marg, New Delhi, designed and built in‑house. Light oak‑finish storage runs wall to wall to make the most of a small footprint, with long shared work desks, overhead cabinets and a pantry corner folded into a single room.',
      images: [
        { src: P + 'rk-ashram-office/02.webp', r: 'l', ratio: 1.8 },
        { src: P + 'rk-ashram-office/01.webp', r: 's', ratio: 1, pos: '50% 55%' }
      ],
      pairs: [
        { order: 2, caption: 'Workspace', ar: '1 / 1', render: P + 'rk-ashram-office/01.webp', photo: P + 'rk-ashram-office/site-workspace.jpg', fit: { render: [-10.57, -0.08, 116.47, 116.47], photo: [0, -43.19, 100.44, 178.03] } }
      ],
      photos: []
    }
  ];

  /* ----------------------------------------------------------
     BEFORE / AFTER — one entry per room, one or more views each.
     Each view pairs a "before" and an "after" taken from roughly
     the same spot. box = [left, top, width, height, rotation°] in % of
     the frame, fitted on shared landmarks (walls, doors, arches) so the
     two photos line up; without a box the photo is centre-cropped.
     ---------------------------------------------------------- */
  const TRANSFORMATIONS = [
    {
      project: 'sharma-residence',
      space: 'Living room',
      note: 'Terrazzo floors, orange walls and heavy carved furniture gave way to marble‑finish flooring, panelled wall mouldings, a cove‑lit false ceiling and a lighter, calmer palette.',
      views: [
        { name: 'The arch', before: { src: BA + 'sharma-living/before-arch.webp', box: [0, -1.09, 101.65, 144.43] }, after: { src: P + 'mayur-vihar-3bhk/site-living-2.jpg', box: [-91.05, -63.38, 204.41, 218.04] } },
        { name: 'Seating corner', before: { src: BA + 'sharma-living/before-corner.webp', box: [-70.9, -0.16, 189.22, 113.5] }, after: { src: P + 'mayur-vihar-3bhk/site-living-1.jpg', box: [-1.68, -28.21, 120.19, 128.21] } },
        { name: 'Entrance wall', before: { src: BA + 'sharma-living/before-entrance.webp', box: [0, -0.44, 100.92, 143.38] }, after: { src: P + 'mayur-vihar-3bhk/site-living-3.jpg', box: [-4.09, -29.67, 245.88, 147.53] } },
        { name: 'Living and dining', before: { src: BA + 'sharma-living/before-dining.webp', box: [-63.29, -10.92, 229.33, 137.56, -21.12] }, after: { src: P + 'mayur-vihar-3bhk/site-living-4.jpg', box: [-59.32, -70.04, 160.77, 171.49] } }
      ]
    },
    {
      project: 'sharma-residence',
      space: 'Washroom',
      note: 'A dated washroom stripped back and rebuilt: patterned chevron tiling, a wall‑hung WC with a concealed cistern, a vessel basin and wall‑mounted fittings.',
      views: [
        { name: 'Washroom', before: { src: BA + 'sharma-washroom/before.jpg' }, after: { src: P + 'mayur-vihar-3bhk/site-washroom.jpg' } }
      ]
    }
  ];

  // display order: built work first, the thesis last
  const ORDER = ['sharma-residence', 'aiscd-office', 'gupta-residence', 'cellexis-hub'];
  PROJECTS.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

  const byId = Object.fromEntries(PROJECTS.map(p => [p.id, p]));

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const pad2 = n => String(n).padStart(2, '0');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  let VW = window.innerWidth, VH = window.innerHeight;
  window.addEventListener('resize', () => { VW = window.innerWidth; VH = window.innerHeight; }, { passive: true });

  // write a style only when it changed (keeps the rAF loop cheap)
  const put = (el, prop, val) => {
    el._s = el._s || {};
    if (el._s[prop] === val) return;
    el._s[prop] = val;
    if (prop.startsWith('--')) el.style.setProperty(prop, val); else el.style[prop] = val;
  };

  const locks = new Set();
  const lock = k => { locks.add(k); document.documentElement.classList.add('no-scroll'); };
  const unlock = k => { locks.delete(k); if (!locks.size) document.documentElement.classList.remove('no-scroll'); };

  /* ==========================================================
     MORPH — S²A unfolds into a reading of the name
     ========================================================== */
  const MV = {
    structure: { key: 'structure', s: 'tructure', two: 'to', a: 'rchitecture', full: 'Structure to Architecture' },
    name: { key: 'name', s: 'aksham', two: 'Sharma', a: 'rchitects', full: 'Saksham Sharma Architects' }
  };
  const morphs = [];
  class Morph {
    constructor(el, variants) {
      this.el = el; this.variants = variants; this.isOpen = false;
      el.setAttribute('role', 'img');
      el.innerHTML =
        '<span class="m-piece m-s" aria-hidden="true"><span class="m-cap">S</span><span class="m-tail"><span class="m-tail-in"></span></span></span>' +
        '<span class="m-two" aria-hidden="true"><span class="m-word"></span><span class="m-sup">2</span></span>' +
        '<span class="m-piece m-a" aria-hidden="true"><span class="m-cap">A</span><span class="m-tail"><span class="m-tail-in"></span></span></span>';
      this.sTail = $('.m-s .m-tail', el); this.sIn = this.sTail.firstChild;
      this.aTail = $('.m-a .m-tail', el); this.aIn = this.aTail.firstChild;
      this.two = $('.m-two', el); this.word = $('.m-word', el); this.sup = $('.m-sup', el);
      this.set(0);
      morphs.push(this);
    }
    set(i) {
      const v = this.variants[i]; this.i = i;
      this.sIn.textContent = v.s; this.aIn.textContent = v.a; this.word.textContent = v.two;
      this.el.dataset.v = v.key;
      this.el.setAttribute('aria-label', 'S²A — ' + v.full);
      this.measure();
    }
    measure() {
      const w = e => Math.ceil(e.getBoundingClientRect().width + 1) + 'px';
      this.sTail.style.setProperty('--w', w(this.sIn));
      this.aTail.style.setProperty('--w', w(this.aIn));
      this.two.style.setProperty('--w2c', w(this.sup));
      this.two.style.setProperty('--w2o', w(this.word));
    }
    open() { this.el.classList.add('is-open'); this.isOpen = true; }
    close() { this.el.classList.remove('is-open'); this.isOpen = false; }
  }
  const remeasure = () => morphs.forEach(m => m.measure());
  window.addEventListener('resize', remeasure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);

  /* ==========================================================
     SPLIT HEADINGS + SCROLL REVEALS
     ========================================================== */
  function splitWords(el) {
    const walk = node => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span'); w.className = 'w';
            const wi = document.createElement('span'); wi.className = 'wi'; wi.textContent = part;
            w.appendChild(wi); frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    };
    walk(el);
    $$('.wi', el).forEach((wi, i) => wi.style.setProperty('--i', i));
  }
  $$('.split').forEach(splitWords);

  let io = null;
  function initReveals(root = document) {
    const els = $$('.reveal:not(.in), .split:not(.in), .reveal-img:not(.in)', root);
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    io = io || new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
  }

  /* ==========================================================
     INTRO — the front of the card: logo, tagline, scroll away
     ========================================================== */
  const intro = $('#intro'), introInner = $('#introInner');
  const introMorph = new Morph($('#introMorph'), [MV.structure, MV.name]);
  let introP = 0;

  if (reduceMotion) {
    intro.classList.add('is-static');
    introMorph.open();
  } else {
    requestAnimationFrame(() => intro.classList.add('is-playing'));
    // the tagline unfolds once the logo is in, then folds back to S²A and opens into
    // the other reading: Structure to Architecture ↔ Saksham Sharma Architects
    const cycle = () => {
      if (introP > 0.02 || document.hidden) { if (!introMorph.isOpen) introMorph.open(); setTimeout(cycle, 1500); return; }
      if (introMorph.isOpen) { introMorph.close(); setTimeout(cycle, 1300); }
      else { introMorph.set((introMorph.i + 1) % introMorph.variants.length); introMorph.open(); setTimeout(cycle, 4200); }
    };
    setTimeout(() => { introMorph.open(); setTimeout(cycle, 4800); }, 2400);
  }

  $('#introSkip').addEventListener('click', () => {
    const t = $('#statement');
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  function introFrame() {
    const r = intro.getBoundingClientRect();
    const h = r.height || VH;
    introP = clamp(-r.top / h, 0, 1);
    document.body.classList.toggle('intro-active', r.bottom > VH * 0.4);
    if (reduceMotion || r.bottom <= 0) return;
    // as the black screen scrolls up, its content eases out and lags slightly behind
    put(introInner, 'opacity', (1 - smooth(0, 0.65, introP)).toFixed(3));
    put(introInner, 'transform', introP > 0 ? 'translate3d(0,' + (introP * h * 0.28).toFixed(1) + 'px,0)' : 'none');
  }

  /* ==========================================================
     HEADER · NAV · MENU
     ========================================================== */
  const header = $('#header');
  const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  const navLinks = $$('#nav a');
  if ('IntersectionObserver' in window) {
    const secIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    navLinks.map(a => $(a.getAttribute('href'))).filter(Boolean).forEach(s => secIO.observe(s));
  }

  const menu = $('#menu'), menuBtn = $('#menuBtn');
  const setMenu = open => {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) lock('menu'); else unlock('menu');
  };
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- counters ---------- */
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        const el = en.target, target = +el.dataset.count, t0 = performance.now(), dur = 1400;
        const step = now => {
          const q = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - q, 3);
          el.textContent = pad2(Math.round(target * e));
          if (q < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  } else {
    counters.forEach(c => { c.textContent = pad2(+c.dataset.count); });
  }

  /* ==========================================================
     WORK — index + full-screen stacked panels
     ========================================================== */
  const panelsWrap = $('#panels'), windex = $('#windex'), preview = $('#wiPreview');
  const PANEL_DUR = 4600;

  windex.innerHTML = PROJECTS.map((p, i) =>
    '<a href="#p-' + p.id + '" data-idx="' + i + '"><span class="wi-num">' + pad2(i + 1) + '</span><span class="wi-title">' + p.title +
    '</span><span class="wi-type">' + p.tag + '</span><span class="wi-arrow" aria-hidden="true">↓</span></a>').join('');
  preview.innerHTML = PROJECTS.map(p => '<img src="' + p.images[0].src + '" alt="" loading="lazy" decoding="async">').join('');

  const panels = PROJECTS.map((p, pi) => {
    const el = document.createElement('article');
    el.className = 'panel';
    el.id = 'p-' + p.id;
    el.setAttribute('aria-label', p.title);
    const slides = p.images.map((im, i) => {
      const active = i === 0 ? ' is-active' : '';
      const alt = p.title + ' — render ' + (i + 1) + ' of ' + p.images.length;
      if (im.r === 'p') {
        return '<figure class="pm-slide pm-portrait' + active + '"><img class="pm-blur" src="' + im.src + '" alt="" loading="lazy" decoding="async"><img class="pm-img" src="' + im.src + '" alt="' + alt + '" loading="lazy" decoding="async"></figure>';
      }
      return '<figure class="pm-slide' + active + '"><img src="' + im.src + '" alt="' + alt + '" style="object-position:' + (im.pos || '50% 50%') + '" loading="lazy" decoding="async"></figure>';
    }).join('');
    const thumbs = p.images.map((im, i) =>
      '<button class="pt' + (i === 0 ? ' is-active' : '') + '" type="button" aria-label="Show render ' + (i + 1) + ' of ' + p.images.length + '"><img src="' + im.src + '" alt="" loading="lazy" decoding="async"><i></i></button>').join('');
    el.innerHTML =
      '<div class="panel-inner">' +
        '<div class="pm" data-cursor="View">' + slides + '</div>' +
        '<div class="panel-scrim"></div>' +
        '<div class="panel-top"><span>' + pad2(pi + 1) + ' / ' + pad2(PROJECTS.length) + '</span><span class="panel-tag' + (p.category === 'design-build' ? ' is-build' : '') + '">' + p.tag + '</span></div>' +
        '<div class="panel-bottom">' +
          '<div class="panel-text">' +
            '<h3 class="panel-title">' + p.title + '</h3>' +
            '<p class="panel-meta">' + p.short + '</p>' +
            '<a class="panel-cta" href="#/project/' + p.id + '" data-project-open="' + p.id + '">View project <span aria-hidden="true">→</span></a>' +
          '</div>' +
          '<div class="panel-side">' +
            '<span class="panel-count"><b>01</b> / ' + pad2(p.images.length) + '</span>' +
            '<div class="panel-thumbs">' + thumbs + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="panel-shade"></div>' +
      '</div>';
    panelsWrap.appendChild(el);

    const st = {
      el, p, i: 0, elapsed: 0, hover: false, q: -1,
      inner: $('.panel-inner', el), shade: $('.panel-shade', el),
      slides: $$('.pm-slide', el), thumbs: $$('.pt', el), count: $('.panel-count b', el)
    };
    st.thumbs.forEach((t, i) => t.addEventListener('click', e => { e.stopPropagation(); showPanelSlide(st, i); }));
    $('.pm', el).addEventListener('click', () => openProject(p.id));
    el.addEventListener('mouseenter', () => { st.hover = true; });
    el.addEventListener('mouseleave', () => { st.hover = false; });
    // swipe between renders on touch screens
    let sx = null;
    el.addEventListener('touchstart', e => { sx = e.changedTouches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 45) showPanelSlide(st, st.i + (dx < 0 ? 1 : -1));
      sx = null;
    }, { passive: true });
    return st;
  });

  function showPanelSlide(st, i) {
    const n = st.slides.length;
    st.i = (i + n) % n; st.elapsed = 0;
    st.slides.forEach((s, k) => s.classList.toggle('is-active', k === st.i));
    st.thumbs.forEach((t, k) => { t.classList.toggle('is-active', k === st.i); put($('i', t), '--p', '0'); });
    st.count.textContent = pad2(st.i + 1);
  }

  function scrollToPanel(i) {
    const h = panels[0].el.offsetHeight;
    const top = panelsWrap.getBoundingClientRect().top + window.scrollY + i * h;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  windex.addEventListener('click', e => {
    const a = e.target.closest('a'); if (!a) return;
    e.preventDefault();
    scrollToPanel(+a.dataset.idx);
  });

  // floating preview beside the index (desktop)
  let pvX = 0, pvY = 0, pvCX = 0, pvCY = 0, pvOn = false;
  if (finePointer) {
    windex.addEventListener('pointermove', e => { pvX = e.clientX; pvY = e.clientY; }, { passive: true });
    windex.addEventListener('pointerover', e => {
      const a = e.target.closest('a'); if (!a) return;
      const idx = +a.dataset.idx;
      Array.from(preview.children).forEach((im, k) => im.classList.toggle('is-on', k === idx));
      if (!pvOn) { pvOn = true; pvCX = e.clientX; pvCY = e.clientY; preview.classList.add('is-on'); }
    });
    windex.addEventListener('pointerleave', () => { pvOn = false; preview.classList.remove('is-on'); });
  }
  function previewFrame() {
    if (!pvOn) return;
    pvCX = lerp(pvCX, pvX, 0.2); pvCY = lerp(pvCY, pvY, 0.2);
    const w = preview.offsetWidth, h = preview.offsetHeight;
    let x = pvCX - w - 36;
    if (x < 12) x = pvCX + 36;
    put(preview, 'transform', 'translate3d(' + x.toFixed(1) + 'px,' + (pvCY - h / 2).toFixed(1) + 'px,0)');
  }

  function panelsFrame(dt) {
    let active = null;
    const rects = panels.map(st => st.el.getBoundingClientRect());
    for (let i = 0; i < panels.length; i++) {
      const st = panels[i], r = rects[i], next = rects[i + 1];
      if (r.top <= VH * 0.5 && r.bottom >= VH * 0.5) active = st;
      const q = next ? clamp(1 - next.top / VH, 0, 1) : 0;
      if (Math.abs(q - st.q) > 0.001) {
        st.q = q;
        put(st.inner, 'transform', q > 0 ? 'scale(' + (1 - 0.06 * q).toFixed(4) + ')' : 'none');
        put(st.shade, 'opacity', (0.62 * q).toFixed(3));
      }
    }
    if (!active || reduceMotion || active.hover || document.hidden || locks.size) return;
    active.elapsed += dt;
    put($('i', active.thumbs[active.i]), '--p', clamp(active.elapsed / PANEL_DUR, 0, 1).toFixed(3));
    if (active.elapsed >= PANEL_DUR) showPanelSlide(active, active.i + 1);
  }

  /* ==========================================================
     BUILT, AS DRAWN — render ↔ site photo slider
     ========================================================== */
  // place a photo inside its frame: a fitted box [left, top, width, height, rotation°] in %,
  // or a plain centre-crop with an optional focal point
  const fitStyle = (box, pos) => box
    ? 'left:' + box[0] + '%;top:' + box[1] + '%;width:' + box[2] + '%;height:' + box[3] + '%;object-fit:fill;transform:' + (box[4] ? 'rotate(' + box[4] + 'deg)' : 'none')
    : 'left:0;top:0;width:100%;height:100%;object-fit:cover;transform:none;object-position:' + (pos || '50% 50%');
  const placeImg = (img, box, pos) => { img.style.cssText = fitStyle(box, pos); };

  function buildCompare(pair, p) {
    const fig = document.createElement('figure');
    fig.className = 'compare reveal';
    fig.style.setProperty('--pos', 50);
    if (pair.ar) fig.style.setProperty('--ar', pair.ar);
    const fit = pair.fit || {};
    fig.innerHTML =
      '<div class="compare-frame">' +
        '<div class="fit-layer"><img src="' + pair.render + '" alt="' + p.title + ', ' + pair.caption.toLowerCase() + ' — render" loading="lazy" style="' + fitStyle(fit.render, pair.renderPos) + '"></div>' +
        '<div class="fit-layer compare-photo"><img src="' + pair.photo + '" alt="' + p.title + ', ' + pair.caption.toLowerCase() + ' — site photograph" loading="lazy" style="' + fitStyle(fit.photo, pair.photoPos) + '"></div>' +
        '<span class="compare-tag compare-tag-l">Render</span><span class="compare-tag compare-tag-r">Built</span>' +
        '<div class="compare-handle"><span></span></div>' +
        '<input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Slide to compare the render with the site photograph">' +
      '</div>' +
      '<figcaption><span>' + p.title + ' — ' + pair.caption + '</span><span>Drag to compare</span></figcaption>';
    $('.compare-range', fig).addEventListener('input', e => fig.style.setProperty('--pos', e.target.value));
    return fig;
  }
  const builtSection = $('#built'), compareList = $('#compareList');
  const allPairs = PROJECTS.flatMap(p => p.pairs.map(pair => ({ pair, p })))
    .sort((a, b) => (a.pair.order || 99) - (b.pair.order || 99));
  if (allPairs.length) {
    allPairs.forEach(({ pair, p }) => compareList.appendChild(buildCompare(pair, p)));
  } else {
    builtSection.hidden = true;
    $$('a[href="#built"]').forEach(a => a.remove());
  }

  /* ==========================================================
     BEFORE / AFTER — one big photograph, drag to compare
     ========================================================== */
  const baSection = $('#before-after');
  const baStage = $('#baStage'), baBefore = $('#baBefore'), baAfter = $('#baAfter'), baRange = $('#baRange');
  const baTabs = $('#baTabs'), baViews = $('#baViews'), baNext = $('#baNext'), baCount = $('#baCount');
  const baProject = $('#baProject'), baViewName = $('#baViewName'), baNote = $('#baNote'), baCaseLink = $('#baCaseLink');
  let baSpaceIdx = 0, baViewIdx = 0, baSwap = 0;

  const baSetPos = v => { baRange.value = v; baStage.style.setProperty('--pos', v); };

  function baLoadView(k) {
    const t = TRANSFORMATIONS[baSpaceIdx], v = t.views[k], p = byId[t.project];
    baViewIdx = k;
    $$('.ba-view', baViews).forEach((b, i) => { b.classList.toggle('is-active', i === k); b.setAttribute('aria-selected', String(i === k)); });
    baProject.textContent = p.title + ' · ' + t.space;
    baViewName.textContent = t.views.length > 1 ? v.name : '';
    baCount.textContent = (k + 1) + ' / ' + t.views.length;
    // fade out, swap both photos once decoded, fade back in
    const token = ++baSwap;
    baStage.classList.add('is-swapping');
    const swap = () => {
      if (token !== baSwap) return;
      baBefore.src = v.before.src; placeImg(baBefore, v.before.box, v.before.pos);
      baBefore.alt = p.title + ', ' + t.space.toLowerCase() + ' — ' + v.name.toLowerCase() + ', before';
      baAfter.src = v.after.src; placeImg(baAfter, v.after.box, v.after.pos);
      baAfter.alt = p.title + ', ' + t.space.toLowerCase() + ' — ' + v.name.toLowerCase() + ', after';
      baSetPos(50);
      const ready = [baBefore, baAfter].map(im => (im.decode ? im.decode().catch(() => {}) : Promise.resolve()));
      Promise.race([Promise.all(ready), new Promise(r => setTimeout(r, 900))]).then(() => {
        if (token === baSwap) baStage.classList.remove('is-swapping');
      });
    };
    if (baBefore.getAttribute('src')) setTimeout(swap, 220); else swap();
    const nx = t.views[(k + 1) % t.views.length];
    [nx.before.src, nx.after.src].forEach(src => { const im = new Image(); im.src = src; });
  }
  function baLoadSpace(i) {
    baSpaceIdx = i;
    const t = TRANSFORMATIONS[i], p = byId[t.project];
    $$('.ba-tab', baTabs).forEach((b, k) => { b.classList.toggle('is-active', k === i); b.setAttribute('aria-selected', String(k === i)); });
    baViews.innerHTML = '<span class="ba-views-label" aria-hidden="true">' + t.views.length + ' views</span>' + t.views.map((v, k) =>
      '<button class="ba-view' + (k === 0 ? ' is-active' : '') + '" type="button" role="tab" aria-selected="' + (k === 0) + '" title="' + v.name + '" aria-label="View ' + (k + 1) + ': ' + v.name + '" data-k="' + k + '">' + (k + 1) + '</button>').join('');
    baViews.hidden = t.views.length < 2;
    baNext.hidden = t.views.length < 2;
    baNote.textContent = t.note;
    baCaseLink.dataset.projectOpen = p.id;
    baCaseLink.href = '#/project/' + p.id;
    baLoadView(0);
  }

  if (!TRANSFORMATIONS.length) {
    baSection.hidden = true;
    $$('a[href="#before-after"]').forEach(a => a.remove());
  } else {
    baTabs.innerHTML = TRANSFORMATIONS.map((t, i) =>
      '<button class="ba-tab' + (i === 0 ? ' is-active' : '') + '" type="button" role="tab" aria-selected="' + (i === 0) + '" data-i="' + i + '">' + t.space + '</button>').join('');
    baTabs.addEventListener('click', e => { const b = e.target.closest('.ba-tab'); if (b && +b.dataset.i !== baSpaceIdx) baLoadSpace(+b.dataset.i); });
    baViews.addEventListener('click', e => { const b = e.target.closest('.ba-view'); if (b && +b.dataset.k !== baViewIdx) baLoadView(+b.dataset.k); });
    baNext.addEventListener('click', () => baLoadView((baViewIdx + 1) % TRANSFORMATIONS[baSpaceIdx].views.length));
    baRange.addEventListener('input', e => baStage.style.setProperty('--pos', e.target.value));
    baLoadSpace(0);
  }

  /* ==========================================================
     PROCESS timeline · PARALLAX
     ========================================================== */
  const tl = $('#timeline'), tlFill = $('#timelineFill'), steps = $$('.step', tl);
  function timelineFrame() {
    const r = tl.getBoundingClientRect();
    if (r.bottom < -200 || r.top > VH + 200) return;
    const q = clamp((VH * 0.85 - r.top) / (VH * 0.55), 0, 1);
    put(tlFill, '--p', q.toFixed(3));
    steps.forEach((s, i) => s.classList.toggle('is-on', q >= i / Math.max(1, steps.length - 1) - 0.02));
  }
  const plxEls = $$('[data-parallax]');
  function parallaxFrame() {
    const on = !reduceMotion && VW > 900;
    plxEls.forEach(el => {
      if (!on) { put(el, 'transform', 'none'); return; }
      const box = el.parentElement.getBoundingClientRect();
      if (box.bottom < -200 || box.top > VH + 200) return;
      const f = parseFloat(el.dataset.parallax) || 0.08;
      const scale = parseFloat(el.dataset.parallaxScale) || 1.12;
      const margin = box.height * (scale - 1) / 2;
      const y = clamp(((box.top + box.height / 2) - VH / 2) * -f, -margin, margin);
      put(el, 'transform', 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(' + scale + ')');
    });
  }

  /* ==========================================================
     STUDIO — S²A, read two ways
     ========================================================== */
  const founderMorph = new Morph($('#founderMorph'), [MV.name, MV.structure]);
  const nameTabs = $$('#nameTabs button');
  let fmIdx = 0, fmTimer = null, fmInView = false, fmStarted = false, fmBusy = false;
  function fmShow(i) {
    if (fmBusy) return;
    fmIdx = i;
    nameTabs.forEach((b, k) => { b.classList.toggle('is-active', k === i); b.setAttribute('aria-pressed', String(k === i)); });
    if (founderMorph.isOpen && founderMorph.i !== i) {
      fmBusy = true;
      founderMorph.close();
      setTimeout(() => { founderMorph.set(i); founderMorph.open(); fmBusy = false; }, reduceMotion ? 0 : 950);
    } else {
      founderMorph.set(i); founderMorph.open();
    }
  }
  const fmRestart = () => {
    clearInterval(fmTimer);
    if (reduceMotion) return;
    fmTimer = setInterval(() => { if (fmInView && !document.hidden) fmShow((fmIdx + 1) % 2); }, 5600);
  };
  nameTabs.forEach((b, k) => b.addEventListener('click', () => { fmShow(k); fmRestart(); }));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(en => {
        fmInView = en.isIntersecting;
        if (fmInView && !fmStarted) { fmStarted = true; setTimeout(() => fmShow(0), 450); fmRestart(); }
      });
    }, { threshold: 0.4 }).observe($('#founderMorph'));
  } else { fmShow(0); }

  /* ==========================================================
     PROJECT CASE STUDY OVERLAY
     ========================================================== */
  const proj = $('#project'), projScroll = $('#projectScroll'), projHeroWrap = $('.project-hero', proj);
  const projHero = $('#projectHeroImg'), projLabel = $('#projectLabel'), projTitle = $('#projectTitle');
  const projMeta = $('#projectMeta'), projDesc = $('#projectDesc'), projGallery = $('#projectGallery');
  const projNext = $('#projectNext'), projNextTitle = $('#projectNextTitle');
  const projBarTitle = $('#projectBarTitle'), projBarCount = $('#projectBarCount');
  const projCompare = $('#projectCompare'), projPhotos = $('#projectPhotos');

  function buildGallery(p) {
    projGallery.innerHTML = '';
    let free = 12, landscapes = 0;
    p.images.forEach((im, i) => {
      let cols = 6;
      if (im.r === 'l') { cols = landscapes % 3 === 0 ? 12 : 6; landscapes++; }
      if (cols > free) cols = free;
      free -= cols; if (free === 0) free = 12;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'g-item g-' + cols + ' r-' + im.r + ' reveal-img';
      b.dataset.cursor = 'View';
      b.setAttribute('aria-label', 'Open view ' + (i + 1) + ' of ' + p.images.length);
      b.innerHTML = '<img src="' + im.src + '" alt="' + p.title + ' — view ' + (i + 1) + '" loading="lazy" decoding="async">';
      b.addEventListener('click', () => openLightbox(p, i));
      projGallery.appendChild(b);
    });
  }
  function buildExtras(p) {
    projCompare.innerHTML = ''; projPhotos.innerHTML = '';
    projCompare.hidden = !p.pairs.length;
    projPhotos.hidden = !p.photos.length;
    if (p.pairs.length) {
      projCompare.innerHTML = '<p class="label">Render vs. built</p>';
      const wrap = document.createElement('div');
      wrap.className = 'compare-list';
      p.pairs.forEach(pair => wrap.appendChild(buildCompare(pair, p)));
      projCompare.appendChild(wrap);
    }
    if (p.photos.length) {
      projPhotos.innerHTML = '<p class="label">On site</p>';
      const grid = document.createElement('div');
      grid.className = 'photo-grid';
      const gallery = { title: p.title + ' — on site', images: p.photos.map(src => ({ src })) };
      p.photos.forEach((src, i) => {
        const b = document.createElement('button');
        b.type = 'button'; b.dataset.cursor = 'View';
        b.innerHTML = '<img src="' + src + '" alt="' + p.title + ' — site photograph ' + (i + 1) + '" loading="lazy">';
        b.addEventListener('click', () => openLightbox(gallery, i));
        grid.appendChild(b);
      });
      projPhotos.appendChild(grid);
    }
  }
  function openProject(id, push = true) {
    const p = byId[id]; if (!p) return;
    const idx = PROJECTS.indexOf(p), next = PROJECTS[(idx + 1) % PROJECTS.length];
    projHero.src = p.cover; projHero.alt = p.title;
    projLabel.textContent = p.label;
    projTitle.textContent = p.title;
    projDesc.textContent = p.description;
    projMeta.innerHTML = p.meta.map(([k, v]) => '<div><dt>' + k + '</dt><dd>' + v + '</dd></div>').join('');
    projBarTitle.textContent = p.title;
    projBarCount.textContent = pad2(idx + 1) + ' / ' + pad2(PROJECTS.length);
    projNextTitle.textContent = next.title;
    projNext.dataset.projectOpen = next.id;
    projNext.href = '#/project/' + next.id;
    buildGallery(p);
    buildExtras(p);
    projScroll.scrollTop = 0;
    projHeroWrap.classList.remove('in');
    proj.classList.add('is-open');
    proj.setAttribute('aria-hidden', 'false');
    lock('project');
    requestAnimationFrame(() => requestAnimationFrame(() => projHeroWrap.classList.add('in')));
    initReveals(proj);
    if (push) { try { history.pushState({ project: id }, '', '#/project/' + id); } catch (e) { /* embedded pages may block this */ } }
    setTimeout(() => $('#projectClose').focus({ preventScroll: true }), 450);
  }
  function closeProject(fromPop = false) {
    if (!proj.classList.contains('is-open')) return;
    proj.classList.remove('is-open');
    proj.setAttribute('aria-hidden', 'true');
    unlock('project');
    try { if (!fromPop && history.state && history.state.project) history.back(); } catch (e) { /* ignore */ }
  }
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-project-open]');
    if (!el || !el.dataset.projectOpen) return;
    e.preventDefault();
    e.stopPropagation();
    openProject(el.dataset.projectOpen);
  });
  $('#projectClose').addEventListener('click', () => closeProject());
  window.addEventListener('popstate', e => {
    const id = e.state && e.state.project;
    if (id && byId[id]) openProject(id, false); else closeProject(true);
  });

  /* ---------- image lightbox ---------- */
  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCaption'), lbCount = $('#lbCount');
  let lbP = null, lbI = 0;
  function showLb(i) {
    const n = lbP.images.length;
    lbI = (i + n) % n;
    lbImg.classList.add('is-fading');
    setTimeout(() => {
      lbImg.src = lbP.images[lbI].src;
      lbImg.alt = lbP.title + ' — view ' + (lbI + 1);
      requestAnimationFrame(() => lbImg.classList.remove('is-fading'));
    }, 150);
    lbCap.textContent = lbP.title;
    lbCount.textContent = pad2(lbI + 1) + ' / ' + pad2(n);
    [1, -1].forEach(d => { const im = new Image(); im.src = lbP.images[(lbI + d + n) % n].src; });
  }
  function openLightbox(p, i) { lbP = p; showLb(i); lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); lock('lightbox'); }
  function closeLightbox() { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); unlock('lightbox'); }
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => showLb(lbI - 1));
  $('#lbNext').addEventListener('click', () => showLb(lbI + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  let lbTouch = null;
  lb.addEventListener('touchstart', e => { lbTouch = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (lbTouch === null) return;
    const dx = e.changedTouches[0].clientX - lbTouch;
    if (Math.abs(dx) > 40) showLb(lbI + (dx < 0 ? 1 : -1));
    lbTouch = null;
  }, { passive: true });

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown', e => {
    if (lb.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') showLb(lbI + 1);
      else if (e.key === 'ArrowLeft') showLb(lbI - 1);
      return;
    }
    if (e.key === 'Escape') {
      if (proj.classList.contains('is-open')) closeProject();
      else if (menu.classList.contains('is-open')) setMenu(false);
    }
  });

  /* ---------- custom cursor (desktop) ---------- */
  const cursor = $('#cursor'), cursorLabel = $('#cursorLabel');
  let cx = VW / 2, cy = VH / 2, tx = cx, ty = cy, cShown = false;
  const cursorOn = finePointer && !reduceMotion && cursor;
  if (cursorOn) {
    window.addEventListener('mousemove', e => {
      tx = e.clientX; ty = e.clientY;
      if (!cShown) { cShown = true; cursor.classList.add('is-visible'); }
    }, { passive: true });
    window.addEventListener('mouseout', e => { if (!e.relatedTarget) cursor.classList.remove('is-visible'); });
    window.addEventListener('mouseover', () => { if (cShown) cursor.classList.add('is-visible'); });
    document.addEventListener('mouseover', e => {
      cursor.classList.toggle('is-hidden', !!e.target.closest('[data-cursor-hide]'));
      const lab = e.target.closest('[data-cursor]');
      if (lab) {
        cursorLabel.textContent = lab.dataset.cursor;
        cursor.classList.add('is-label'); cursor.classList.remove('is-hover');
      } else {
        cursor.classList.remove('is-label');
        cursor.classList.toggle('is-hover', !!e.target.closest('a, button'));
      }
    });
  }
  function cursorFrame() {
    if (!cursorOn) return;
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    put(cursor, 'transform', 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)');
  }

  /* ==========================================================
     MAIN LOOP
     ========================================================== */
  let last = performance.now();
  function loop(now) {
    const dt = Math.min(64, now - last); last = now;
    introFrame();
    panelsFrame(dt);
    timelineFrame();
    parallaxFrame();
    previewFrame();
    cursorFrame();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  initReveals();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // deep link: #/project/<id>
  const hashMatch = location.hash.match(/^#\/project\/([a-z0-9-]+)$/);
  if (hashMatch && byId[hashMatch[1]]) {
    try { history.replaceState({ project: hashMatch[1] }, '', location.hash); } catch (e) { /* ignore */ }
    openProject(hashMatch[1], false);
  }
})();
