/* ==========================================================
   Studio S²A — v2 interactions (vanilla JS, no dependencies)
   ========================================================== */
(() => {
  'use strict';

  /* ----------------------------------------------------------
     PROJECT DATA
     r = orientation (l landscape / p portrait / s square)
     ratio = width ÷ height, used to size the render strip.
     ---------------------------------------------------------- */
  const P = 'assets/projects/';
  const PROJECTS = [
    {
      id: 'cellexis-hub',
      title: 'The Cellexis Hub',
      label: 'Thesis',
      category: 'thesis',
      pairs: [],
      photos: [],
      short: 'Final Year Thesis · Mixed‑Use Urban Hub',
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
        { src: P + 'thesis/01.webp', r: 's', ratio: 1 },
        { src: P + 'thesis/03.webp', r: 's', ratio: 1 },
        { src: P + 'thesis/04.webp', r: 'l', ratio: 1.5 },
        { src: P + 'thesis/05.webp', r: 'l', ratio: 1.5 },
        { src: P + 'thesis/06.webp', r: 'l', ratio: 1.5 }
      ]
    },
    {
      id: 'gupta-residence',
      title: 'Gupta Residence',
      label: 'Residential · Interior Design',
      category: 'interiors',
      pairs: [],
      photos: [],
      short: '2BHK Interiors · Mayur Vihar Phase 2',
      cover: P + 'gupta-residence/02.webp',
      meta: [
        ['Type', '2BHK DDA flat'],
        ['Location', 'Mayur Vihar Phase 2, Delhi'],
        ['Scope', 'Interior design'],
        ['Status', 'Completed']
      ],
      description: 'Interiors for a 2BHK DDA flat in Mayur Vihar Phase 2 — the studio’s first project. Soft arches recur through the home, from the fluted TV wall and wardrobe shutters to the backlit dressing mirror, while a palette of warm neutrals, walnut‑toned wood and marble keeps the compact plan calm and cohesive across the living room, bedrooms, kitchen and bath.',
      images: [
        { src: P + 'gupta-residence/01.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/02.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/03.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/04.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/05.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/06.webp', r: 'l', ratio: 1.333 },
        { src: P + 'gupta-residence/07.webp', r: 'l', ratio: 1.333 }
      ]
    },
    {
      id: 'sharma-residence',
      title: 'Sharma Residence',
      label: 'Residential · Design & Build',
      category: 'design-build',
      // pairs: render on the left, site photograph on the right. Replace the placeholder with the real photo.
      pairs: [
        { render: P + 'mayur-vihar-3bhk/02.webp', photo: 'assets/site-photo-placeholder.svg', caption: 'Kitchen' }
      ],
      // photos: site photographs shown in an "On site" grid inside the case study.
      photos: [],
      short: '3BHK Interiors · Mayur Vihar Phase 1',
      cover: P + 'mayur-vihar-3bhk/01.webp',
      meta: [
        ['Type', '3BHK DDA flat'],
        ['Location', 'Mayur Vihar Phase 1, Delhi'],
        ['Scope', 'Interior design · Construction'],
        ['Status', 'Designed and built by Studio S²A']
      ],
      description: 'Designed and built by Studio S²A — interiors for a 3BHK DDA flat in Mayur Vihar Phase 1. A compact material palette of grey stone finishes and dark wood is lifted by patterned chevron tiling in the bathrooms and a black stone kitchen counter, giving each room its own character without breaking the whole.',
      images: [
        { src: P + 'mayur-vihar-3bhk/01.webp', r: 'l', ratio: 1.5 },
        { src: P + 'mayur-vihar-3bhk/02.webp', r: 'l', ratio: 1.333 },
        { src: P + 'mayur-vihar-3bhk/03.webp', r: 'p', ratio: 0.553 },
        { src: P + 'mayur-vihar-3bhk/04.webp', r: 'p', ratio: 0.553 }
      ]
    },
    {
      id: 'aiscd-office',
      title: 'AISCD Office',
      label: 'Commercial · Design & Build',
      category: 'design-build',
      pairs: [
        { render: P + 'rk-ashram-office/02.webp', photo: 'assets/site-photo-placeholder.svg', caption: 'Workspace' }
      ],
      photos: [],
      short: 'Office Interiors · RK Ashram Marg',
      cover: P + 'rk-ashram-office/02.webp',
      meta: [
        ['Type', 'Office interiors'],
        ['Location', 'RK Ashram Marg, New Delhi'],
        ['Scope', 'Interior design · Fit‑out · Construction'],
        ['Status', 'Designed and built by Studio S²A']
      ],
      description: 'A compact office fit‑out for AISCD on RK Ashram Marg, New Delhi — the studio’s most recent project, designed and built in‑house. Light oak‑finish storage runs wall to wall to make the most of a small footprint, with a shared work table, a display cabinet for awards and a pantry corner folded into a single room.',
      images: [
        { src: P + 'rk-ashram-office/01.webp', r: 's', ratio: 1 },
        { src: P + 'rk-ashram-office/02.webp', r: 'l', ratio: 1.78 }
      ]
    }
  ];
  const byId = Object.fromEntries(PROJECTS.map(p => [p.id, p]));

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const pad2 = n => String(n).padStart(2, '0');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const locks = new Set();
  const lock = k => { locks.add(k); document.documentElement.classList.add('no-scroll'); };
  const unlock = k => { locks.delete(k); if (!locks.size) document.documentElement.classList.remove('no-scroll'); };

  /* ---------- split headings into words ---------- */
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

  /* ---------- scroll reveals ---------- */
  let io = null;
  function initReveals(root = document) {
    const els = $$('.reveal:not(.in), .split:not(.in), .reveal-img:not(.in)', root);
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    io = io || new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
  }

  /* ---------- loader ---------- */
  const loader = $('#loader');
  let loaderDone = false;
  let seen = false;
  try { seen = !!sessionStorage.getItem('s2a-v2-seen'); } catch (e) { /* private mode */ }
  function finishLoader() {
    if (loaderDone) return;
    loaderDone = true;
    loader.classList.add('is-done');
    document.body.classList.add('is-ready');
    try { sessionStorage.setItem('s2a-v2-seen', '1'); } catch (e) { /* ignore */ }
    initReveals();
  }
  if (reduceMotion || seen) {
    loader.classList.add('is-hidden');
    loaderDone = true;
    document.body.classList.add('is-ready');
    initReveals();
  } else {
    const t0 = performance.now();
    const done = () => setTimeout(finishLoader, Math.max(0, 1150 - (performance.now() - t0)));
    if (document.readyState === 'complete') done(); else window.addEventListener('load', done);
    setTimeout(finishLoader, 2800);
  }

  /* ---------- header + active nav ---------- */
  const header = $('#header');
  const navLinks = $$('#nav a');
  const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  if ('IntersectionObserver' in window) {
    const secIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    navLinks.map(a => $(a.getAttribute('href'))).filter(Boolean).forEach(s => secIO.observe(s));
  }

  /* ---------- fullscreen menu ---------- */
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

  /* ---------- hero slideshow ---------- */
  const heroVisual = $('#heroVisual');
  const slides = $$('.hero-slide', heroVisual);
  const dotsWrap = $('#heroDots');
  const heroIndex = $('#heroIndex'), heroTitle = $('#heroTitle'), heroMeta = $('#heroMeta');
  const HERO_DUR = 5500;
  let hi = 0, heroElapsed = 0, heroLast = null, heroPaused = false;

  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hero-dot' + (i === 0 ? ' is-active' : '');
    b.setAttribute('aria-label', `Show slide ${i + 1}`);
    b.addEventListener('click', () => goHero(i));
    dotsWrap.appendChild(b);
    return b;
  });
  if (dots[0]) dots[0].style.setProperty('--p', 0);

  function goHero(i) {
    hi = (i + slides.length) % slides.length;
    heroElapsed = 0;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === hi));
    dots.forEach((d, k) => { d.classList.toggle('is-active', k === hi); d.style.setProperty('--p', k === hi ? 0 : (k < hi ? 1 : 0)); });
    const p = byId[slides[hi].dataset.project];
    heroVisual.classList.add('is-switching');
    setTimeout(() => {
      heroIndex.textContent = `${pad2(hi + 1)} / ${pad2(slides.length)}`;
      heroTitle.textContent = p.title;
      heroMeta.textContent = p.short;
      heroVisual.classList.remove('is-switching');
    }, 220);
  }
  function heroTick(ts) {
    if (heroLast === null) heroLast = ts;
    const dt = ts - heroLast; heroLast = ts;
    if (!heroPaused && !document.hidden && !reduceMotion) {
      heroElapsed += dt;
      dots[hi].style.setProperty('--p', clamp(heroElapsed / HERO_DUR, 0, 1));
      if (heroElapsed >= HERO_DUR) goHero(hi + 1);
    }
    requestAnimationFrame(heroTick);
  }
  if (slides.length > 1) requestAnimationFrame(heroTick);
  heroVisual.addEventListener('mouseenter', () => { heroPaused = true; });
  heroVisual.addEventListener('mouseleave', () => { heroPaused = false; });
  $('#heroCaptionBtn').addEventListener('click', () => openProject(slides[hi].dataset.project));
  $('#heroSlides').addEventListener('click', () => openProject(slides[hi].dataset.project));

  /* ---------- parallax + timeline (one rAF loop) ---------- */
  const plxEls = $$('[data-parallax]');
  const tl = $('#timeline'), tlFill = $('#timelineFill'), steps = $$('.step', tl || document);

  function parallax() {
    const on = !reduceMotion && window.innerWidth > 900;
    const vh = window.innerHeight;
    plxEls.forEach(el => {
      if (!on) { el.style.transform = ''; return; }
      const box = el.parentElement.getBoundingClientRect();
      if (box.bottom < -200 || box.top > vh + 200) return;
      const f = parseFloat(el.dataset.parallax) || 0.08;
      const scale = parseFloat(el.dataset.parallaxScale) || 1.12;
      const margin = box.height * (scale - 1) / 2;
      const y = clamp(((box.top + box.height / 2) - vh / 2) * -f, -margin, margin);
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale})`;
    });
  }
  function timeline() {
    if (!tl) return;
    const r = tl.getBoundingClientRect(), vh = window.innerHeight;
    const p = clamp((vh * 0.85 - r.top) / (vh * 0.55), 0, 1);
    tlFill.style.setProperty('--p', p.toFixed(3));
    steps.forEach((s, i) => s.classList.toggle('is-on', p >= i / Math.max(1, steps.length - 1) - 0.02));
  }
  let ticking = false;
  const frame = () => { ticking = false; parallax(); timeline(); };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(frame));
  frame();

  /* ---------- counters ---------- */
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        const el = en.target, target = +el.dataset.count, t0 = performance.now(), dur = 1400;
        const step = now => {
          const p = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
          el.textContent = pad2(Math.round(target * e));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  } else {
    counters.forEach(c => { c.textContent = pad2(+c.dataset.count); });
  }

  /* ---------- render strip ---------- */
  const strip = $('#strip'), track = $('#stripTrack'), stripProgress = $('#stripProgress');
  const hintText = $('#stripHintText');
  if (hintText) hintText.textContent = finePointer ? 'Drag to explore' : 'Swipe to explore';
  let dragMoved = false;

  PROJECTS.forEach(p => p.images.forEach((im, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'strip-item';
    b.style.setProperty('--r', im.ratio);
    b.setAttribute('aria-label', `${p.title}, view ${i + 1} of ${p.images.length}`);
    b.innerHTML =
      `<span class="strip-media"><img src="${im.src}" alt="" loading="lazy" decoding="async" draggable="false"></span>` +
      `<span class="strip-cap"><span>${p.title}</span><span>${pad2(i + 1)} / ${pad2(p.images.length)}</span></span>`;
    b.addEventListener('click', () => { if (!dragMoved) openLightbox(p, i); });
    track.appendChild(b);
  }));

  let isDown = false, startX = 0, startLeft = 0;
  strip.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    isDown = true; dragMoved = false; startX = e.clientX; startLeft = strip.scrollLeft;
    strip.classList.add('is-dragging');
  });
  window.addEventListener('pointermove', e => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) dragMoved = true;
    strip.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!isDown) return;
    isDown = false;
    strip.classList.remove('is-dragging');
    setTimeout(() => { dragMoved = false; }, 0);
  });
  strip.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    const max = strip.scrollWidth - strip.clientWidth;
    const can = (e.deltaY > 0 && strip.scrollLeft < max - 1) || (e.deltaY < 0 && strip.scrollLeft > 1);
    if (!can) return;
    e.preventDefault();
    strip.scrollLeft += e.deltaY;
  }, { passive: false });
  strip.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') strip.scrollBy({ left: 420, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') strip.scrollBy({ left: -420, behavior: 'smooth' });
  });
  const updateStripProgress = () => {
    const max = strip.scrollWidth - strip.clientWidth;
    stripProgress.style.setProperty('--p', max > 0 ? (strip.scrollLeft / max).toFixed(4) : 1);
  };
  strip.addEventListener('scroll', updateStripProgress, { passive: true });
  window.addEventListener('resize', updateStripProgress);
  updateStripProgress();

  /* ---------- work filter (from v1) ---------- */
  const filterBtns = $$('.filter-btn'), tiles = $$('.tile');
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    tiles.forEach(t => t.classList.toggle('is-hidden', !(f === 'all' || t.dataset.category === f)));
  }));

  /* ---------- render vs site comparison slider ---------- */
  function buildCompare(pair, p) {
    const fig = document.createElement('figure');
    fig.className = 'compare reveal';
    fig.style.setProperty('--pos', 50);
    fig.innerHTML =
      `<div class="compare-frame">` +
        `<img class="compare-render" src="${pair.render}" alt="${p.title} — render" loading="lazy">` +
        `<img class="compare-photo" src="${pair.photo}" alt="${p.title} — site photograph" loading="lazy">` +
        `<span class="compare-tag compare-tag-l">Render</span><span class="compare-tag compare-tag-r">Built</span>` +
        `<div class="compare-handle"><span></span></div>` +
        `<input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Slide to compare the render with the site photograph">` +
      `</div>` +
      `<figcaption><span>${p.title} — ${pair.caption}</span><span>Drag to compare</span></figcaption>`;
    fig.querySelector('.compare-range').addEventListener('input', e => fig.style.setProperty('--pos', e.target.value));
    return fig;
  }
  const builtSection = $('#built'), compareList = $('#compareList');
  const allPairs = PROJECTS.flatMap(p => p.pairs.map(pair => ({ pair, p })));
  if (allPairs.length) {
    allPairs.forEach(({ pair, p }) => compareList.appendChild(buildCompare(pair, p)));
    initReveals(builtSection);
  } else {
    builtSection.hidden = true;
    $$('a[href="#built"]').forEach(a => a.remove());
  }

  /* ---------- services accordion ---------- */
  const acc = $('#acc'), accImg = $('#accImg');
  const accItems = $$('.acc-item', acc);
  accItems.forEach(it => { const im = new Image(); im.src = it.dataset.img; });
  function swapAccImg(src) {
    if (!accImg || accImg.getAttribute('src') === src) return;
    accImg.classList.add('is-fading');
    setTimeout(() => {
      accImg.onload = () => accImg.classList.remove('is-fading');
      accImg.src = src;
      setTimeout(() => accImg.classList.remove('is-fading'), 700);
    }, 260);
  }
  accItems.forEach(it => {
    $('.acc-head', it).addEventListener('click', () => {
      const wasOpen = it.classList.contains('is-open');
      accItems.forEach(o => { o.classList.remove('is-open'); $('.acc-head', o).setAttribute('aria-expanded', 'false'); });
      if (!wasOpen) {
        it.classList.add('is-open');
        $('.acc-head', it).setAttribute('aria-expanded', 'true');
        swapAccImg(it.dataset.img);
      }
    });
  });

  /* ---------- project case-study overlay ---------- */
  const proj = $('#project'), projScroll = $('#projectScroll'), projHeroWrap = $('.project-hero', proj);
  const projHero = $('#projectHeroImg'), projLabel = $('#projectLabel'), projTitle = $('#projectTitle');
  const projMeta = $('#projectMeta'), projDesc = $('#projectDesc'), projGallery = $('#projectGallery');
  const projNext = $('#projectNext'), projNextTitle = $('#projectNextTitle');
  const projBarTitle = $('#projectBarTitle'), projBarCount = $('#projectBarCount');
  const projCompare = $('#projectCompare'), projPhotos = $('#projectPhotos');

  function buildExtras(p) {
    projCompare.innerHTML = '';
    projPhotos.innerHTML = '';
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
        b.type = 'button';
        b.dataset.cursor = 'View';
        b.innerHTML = `<img src="${src}" alt="${p.title} — site photograph ${i + 1}" loading="lazy">`;
        b.addEventListener('click', () => openLightbox(gallery, i));
        grid.appendChild(b);
      });
      projPhotos.appendChild(grid);
    }
  }

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
      b.className = `g-item g-${cols} r-${im.r} reveal-img`;
      b.dataset.cursor = 'View';
      b.setAttribute('aria-label', `Open view ${i + 1} of ${p.images.length}`);
      b.innerHTML = `<img class="zoom" src="${im.src}" alt="${p.title} — view ${i + 1}" loading="lazy" decoding="async">`;
      b.addEventListener('click', () => openLightbox(p, i));
      projGallery.appendChild(b);
    });
  }
  function openProject(id, push = true) {
    const p = byId[id]; if (!p) return;
    const idx = PROJECTS.indexOf(p), next = PROJECTS[(idx + 1) % PROJECTS.length];
    projHero.src = p.cover; projHero.alt = p.title;
    projLabel.textContent = p.label;
    projTitle.textContent = p.title;
    projDesc.textContent = p.description;
    projMeta.innerHTML = p.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    projBarTitle.textContent = p.title;
    projBarCount.textContent = `${pad2(idx + 1)} / ${pad2(PROJECTS.length)}`;
    projNextTitle.textContent = next.title;
    projNext.dataset.projectOpen = next.id;
    projNext.href = `#/project/${next.id}`;
    buildGallery(p);
    buildExtras(p);
    projScroll.scrollTop = 0;
    projHeroWrap.classList.remove('in');
    proj.classList.add('is-open');
    proj.setAttribute('aria-hidden', 'false');
    lock('project');
    requestAnimationFrame(() => requestAnimationFrame(() => projHeroWrap.classList.add('in')));
    initReveals(proj);
    if (push) history.pushState({ project: id }, '', `#/project/${id}`);
    setTimeout(() => $('#projectClose').focus({ preventScroll: true }), 450);
  }
  function closeProject(fromPop = false) {
    if (!proj.classList.contains('is-open')) return;
    proj.classList.remove('is-open');
    proj.setAttribute('aria-hidden', 'true');
    unlock('project');
    if (!fromPop && history.state && history.state.project) history.back();
  }
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-project-open]');
    if (!el) return;
    e.preventDefault();
    openProject(el.dataset.projectOpen);
  });
  $('#projectClose').addEventListener('click', () => closeProject());
  window.addEventListener('popstate', e => {
    const id = e.state && e.state.project;
    if (id && byId[id]) openProject(id, false); else closeProject(true);
  });
  const hashMatch = location.hash.match(/^#\/project\/([a-z0-9-]+)$/);
  if (hashMatch && byId[hashMatch[1]]) {
    history.replaceState({ project: hashMatch[1] }, '', location.hash);
    openProject(hashMatch[1], false);
  }

  /* ---------- lightbox ---------- */
  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCaption'), lbCount = $('#lbCount');
  let lbP = null, lbI = 0;
  function showLb(i) {
    const n = lbP.images.length;
    lbI = (i + n) % n;
    lbImg.classList.add('is-fading');
    setTimeout(() => {
      lbImg.src = lbP.images[lbI].src;
      lbImg.alt = `${lbP.title} — view ${lbI + 1}`;
      requestAnimationFrame(() => lbImg.classList.remove('is-fading'));
    }, 150);
    lbCap.textContent = lbP.title;
    lbCount.textContent = `${pad2(lbI + 1)} / ${pad2(n)}`;
    [1, -1].forEach(d => { const im = new Image(); im.src = lbP.images[(lbI + d + n) % n].src; });
  }
  function openLightbox(p, i) {
    lbP = p; showLb(i);
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); lock('lightbox');
  }
  function closeLightbox() {
    lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); unlock('lightbox');
  }
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => showLb(lbI - 1));
  $('#lbNext').addEventListener('click', () => showLb(lbI + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  let touchX = null;
  lb.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) showLb(lbI + (dx < 0 ? 1 : -1));
    touchX = null;
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

  /* ---------- custom cursor (desktop only) ---------- */
  const cursor = $('#cursor'), cursorLabel = $('#cursorLabel');
  if (finePointer && !reduceMotion && cursor) {
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2, tx = cx, ty = cy, shown = false;
    window.addEventListener('mousemove', e => {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; cursor.classList.add('is-visible'); }
    }, { passive: true });
    window.addEventListener('mouseout', e => { if (!e.relatedTarget) cursor.classList.remove('is-visible'); });
    window.addEventListener('mouseover', () => { if (shown) cursor.classList.add('is-visible'); });
    (function loop() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', e => {
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

  /* ---------- misc ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
