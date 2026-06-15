/* =========================================================
   FIFTH CHUKKER — shared header/footer + interactions
   Loaded on every page (defer). Body must have data-page="..."
   ========================================================= */
(function () {
  'use strict';
  const PAGE = document.body.dataset.page || 'home';

  /* ---------- nav links (label, href, key) ---------- */
  const LINKS = [
    ['Home', 'index.html', 'home'],
    ['Story', 'about.html', 'about'],
    ['Stay', 'stay.html', 'stay'],
    ['Polo', 'polo.html', 'polo'],
    ['Equestrian', 'equestrian.html', 'equestrian'],
    ['Dining', 'dining.html', 'dining'],
    ['Events', 'events.html', 'events'],
    ['Impact', 'impact.html', 'impact'],
    ['Magazine', 'magazine.html', 'magazine'],
    ['Gallery', 'gallery.html', 'gallery'],
  ];

  /* ---------- HEADER ---------- */
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
    <div class="topbar">
      <span class="topbar__item">KM 2 Kaduna–Jos Road, Kaduna, Nigeria</span>
      <span class="topbar__dot">•</span>
      <span class="topbar__item">The Sport of Kings · Since 2001</span>
      <span class="topbar__dot">•</span>
      <a class="topbar__item topbar__link" href="contact.html">WhatsApp Concierge</a>
    </div>
    <div class="nav" id="nav">
      <div class="nav__inner">
        <a href="index.html" class="brand" aria-label="Fifth Chukker home">
          <img src="assets/logo.png" alt="Fifth Chukker" class="brand__logo" />
          <span class="brand__txt"><b>Fifth Chukker</b><small>Polo &amp; Country Club</small></span>
        </a>
        <nav class="nav__links" id="navLinks">
          ${LINKS.map(([l, h, k]) => `<a href="${h}" class="${k === PAGE ? 'is-active' : ''}">${l}</a>`).join('')}
          <a href="contact.html" class="nav__cta ${PAGE === 'contact' ? 'is-active' : ''}">Book Your Stay</a>
        </nav>
        <button class="nav__burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>`;
  }

  /* ---------- FOOTER ---------- */
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
    <div class="footer__top">
      <div class="footer__brand">
        <img src="assets/logo.png" alt="Fifth Chukker" class="footer__logo" />
        <p class="footer__tag">Africa's premier polo, equestrian &amp; luxury lifestyle destination.
          Where the world meets Africa.</p>
        <div class="footer__social">
          <a href="#">Instagram</a><a href="#">Facebook</a><a href="#">YouTube</a>
        </div>
      </div>
      <div class="footer__col">
        <h5>Discover</h5>
        <a href="about.html">Our Story</a><a href="stay.html">Stay</a>
        <a href="polo.html">Polo</a><a href="equestrian.html">Equestrian</a>
      </div>
      <div class="footer__col">
        <h5>Experience</h5>
        <a href="dining.html">Dining</a><a href="events.html">Events &amp; Weddings</a>
        <a href="impact.html">Social Impact</a><a href="gallery.html">Gallery</a>
      </div>
      <div class="footer__col footer__news">
        <h5>The Newsletter</h5>
        <p>Tournaments, openings and stories from the estate.</p>
        <form class="news" data-fake>
          <input type="email" placeholder="Email address" required />
          <button class="btn btn--brand" type="submit">Join</button>
        </form>
        <p style="margin-top:1rem">info@fifthchukker.com<br>+234 (0) 803 514 2711</p>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© <span id="yr"></span> Fifth Chukker Polo &amp; Country Club · Kangimi Resort, Kaduna, Nigeria</span>
      <span>Where The World Meets Africa</span>
    </div>`;
    const yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ---------- floating WhatsApp ---------- */
  if (!document.querySelector('.wa')) {
    const wa = document.createElement('a');
    wa.href = 'contact.html';
    wa.className = 'wa';
    wa.setAttribute('aria-label', 'WhatsApp Concierge');
    wa.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.04c-.24.68-1.42 1.3-1.95 1.35-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-2.99s.74-2.12 1.01-2.41c.26-.29.57-.36.76-.36l.55.01c.18.01.41-.07.64.49.24.57.81 1.96.88 2.1.07.14.12.31.02.5-.09.2-.14.31-.27.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.57.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.21 1.36.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.61-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.12.07.66-.17 1.34z"/></svg>';
    document.body.appendChild(wa);
  }

  /* ---------- scroll progress bar ---------- */
  const bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);

  /* ---------- behaviours after header exists ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = max > 0 ? (h.scrollTop / max) * 100 + '%' : '0';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      links.classList.toggle('open');
      burger.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        burger.classList.remove('open');
      })
    );
  }

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    io.observe(el);
  });

  /* ---------- animated counters ---------- */
  const fmt = (n) => n.toLocaleString('en-US');
  const runCount = (el) => {
    const target = +el.dataset.count;
    const plain = el.dataset.plain === '1';
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 1500, 1);
      const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = (plain ? String(v) : fmt(v)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
    }),
    { threshold: 0.6 }
  );
  document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

  /* ---------- subtle tilt on .tilt ---------- */
  document.querySelectorAll('.tilt').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    el.addEventListener('mouseleave', () => (el.style.transform = ''));
  });

  /* ---------- horizontal rails ---------- */
  window.railScroll = (btn, dir) => {
    const rail = btn.closest('.signature, section, div').querySelector('.rail') ||
                 document.querySelector('.rail');
    if (!rail) return;
    const card = rail.querySelector('.xcard');
    rail.scrollBy({ left: dir * ((card ? card.offsetWidth : 320) + 22), behavior: 'smooth' });
  };

  /* ---------- gallery filter ---------- */
  const gf = document.querySelector('.gfilters');
  if (gf) {
    const items = [...document.querySelectorAll('.gitem')];
    gf.addEventListener('click', (e) => {
      const b = e.target.closest('.chip');
      if (!b) return;
      gf.querySelectorAll('.chip').forEach((c) => c.classList.remove('is-active'));
      b.classList.add('is-active');
      const f = b.dataset.filter;
      items.forEach((it) => it.classList.toggle('hide', !(f === 'all' || it.dataset.cat === f)));
    });
  }

  /* ---------- lightbox (any .gitem img) ---------- */
  const gitems = [...document.querySelectorAll('.gitem img')];
  if (gitems.length) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<button class="lightbox__close" aria-label="Close">×</button>
      <button class="lightbox__nav lightbox__prev" aria-label="Prev">‹</button>
      <img alt="" /><button class="lightbox__nav lightbox__next" aria-label="Next">›</button>`;
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img');
    let idx = 0;
    const visible = () => gitems.filter((g) => !g.closest('.gitem').classList.contains('hide'));
    const open = (img) => {
      const v = visible(); idx = v.indexOf(img);
      lbImg.src = img.src; lb.classList.add('open');
    };
    const go = (d) => { const v = visible(); idx = (idx + d + v.length) % v.length; lbImg.src = v[idx].src; };
    gitems.forEach((img) => img.closest('.gitem').addEventListener('click', () => open(img)));
    lb.querySelector('.lightbox__close').addEventListener('click', () => lb.classList.remove('open'));
    lb.querySelector('.lightbox__prev').addEventListener('click', () => go(-1));
    lb.querySelector('.lightbox__next').addEventListener('click', () => go(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    });
  }

  /* ---------- quotes rotator ---------- */
  const quotes = [...document.querySelectorAll('.quote')];
  const dotsWrap = document.querySelector('.quotes__dots');
  if (quotes.length && dotsWrap) {
    let qi = 0;
    quotes.forEach((_, i) => {
      const b = document.createElement('button');
      if (i === 0) b.classList.add('is-active');
      b.addEventListener('click', () => show(i));
      dotsWrap.appendChild(b);
    });
    const dots = [...dotsWrap.children];
    function show(i) {
      quotes[qi].classList.remove('is-active'); dots[qi].classList.remove('is-active');
      qi = i;
      quotes[qi].classList.add('is-active'); dots[qi].classList.add('is-active');
    }
    setInterval(() => show((qi + 1) % quotes.length), 6000);
  }

  /* ---------- video hero: reveal once playable ---------- */
  const hv = document.querySelector('.hero__video');
  if (hv) {
    const reveal = () => hv.classList.add('ready');
    if (hv.readyState >= 3) reveal();
    hv.addEventListener('canplay', reveal, { once: true });
    hv.addEventListener('playing', reveal, { once: true });
    const p = hv.play && hv.play();
    if (p && p.catch) p.catch(() => {});
  }

  /* ---------- hero parallax (subtle) ---------- */
  const heroContent = document.querySelector('.hero__content');
  if (heroContent && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroContent.style.transform = `translateY(${y * 0.18}px)`;
        heroContent.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.7)));
      }
    }, { passive: true });
  }

  /* ---------- fake form handlers ---------- */
  document.addEventListener('submit', (ev) => {
    const f = ev.target;
    if (!f.matches('[data-fake], .cform, .news, .booking__bar')) return;
    ev.preventDefault();
    const note = f.querySelector('.cnote');
    if (note) note.textContent = 'Thank you — our concierge will be in touch shortly.';
    else {
      const btn = f.querySelector('button[type="submit"]');
      if (btn) { const t = btn.textContent; btn.textContent = 'Received ✓'; setTimeout(() => (btn.textContent = t), 2200); }
    }
    if (f.matches('.cform, .news')) f.reset();
  });
})();
