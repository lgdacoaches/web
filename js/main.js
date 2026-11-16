// Photo carousel: fades between slides automatically (no manual controls).
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-carousel]').forEach(function (c) {
    var slides = c.querySelectorAll('.slide');
    var dots = c.querySelectorAll('.dots span');
    var i = 0;
    if (slides.length < 2 || reduce) return;
    setInterval(function () {
      slides[i].classList.remove('is-active'); if (dots[i]) dots[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active'); if (dots[i]) dots[i].classList.add('is-active');
    }, 5000);
  });
  // Sponsor marquee: duplicate the logo group so the loop is seamless.
  document.querySelectorAll('[data-marquee]').forEach(function (m) {
    if (reduce) return;
    var track = m.querySelector('.marquee__track');
    var group = track.querySelector('.marquee__group');
    var copy = group.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    track.appendChild(copy);
    m.classList.add('is-running');
  });
})();

// Calendar: expand/collapse all, and open the current month by default.
(function () {
  var cal = document.querySelector('[data-calendar]');
  if (!cal) return;
  var months = cal.querySelectorAll('details');
  function setAll(open) { months.forEach(function (d) { d.open = open; }); }
  var ex = document.querySelector('[data-expand]'), co = document.querySelector('[data-collapse]');
  if (ex) ex.addEventListener('click', function () { setAll(true); });
  if (co) co.addEventListener('click', function () { setAll(false); });
  var now = new Date(), key = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  var current = cal.querySelector('details[data-month="' + key + '"]');
  if (current) { setAll(false); current.open = true; }
})();

// Mobile menu: floating panel
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  function set(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }
  btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !btn.contains(e.target)) set(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { set(false); btn.focus(); }
  });
  window.matchMedia('(min-width:761px)').addEventListener('change', function (e) { if (e.matches) set(false); });
})();

// Click/tap any content photo to view it full size
(function () {
  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.innerHTML = '<img alt=""><p class="lightbox__cap"></p><button type="button" class="lightbox__close" aria-label="Close">×</button>';
  document.body.appendChild(dlg);
  var big = dlg.querySelector('img'), cap = dlg.querySelector('.lightbox__cap');

  function open(img) {
    big.src = img.dataset.full || img.currentSrc || img.src;
    big.alt = img.alt;
    cap.textContent = img.alt;
    dlg.showModal();
  }

  document.querySelectorAll('main img').forEach(function (img) {
    // skip logos, the rotating carousel, placeholders and anything marked no-zoom
    if (img.closest('.logo-tile, .logo-slot, .carousel, .no-zoom') ||
        img.classList.contains('about-logo') ||
        img.src.indexOf('placeholder') > -1) return;
    img.classList.add('zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Enlarge photo: ' + img.alt);
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
    });
  });

  dlg.addEventListener('click', function () { dlg.close(); });
})();
