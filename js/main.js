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
