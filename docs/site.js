// Bipane — product page. The page is complete without this. It plays the recordings
// while they are on screen, runs the speed bars at the measured speed, and lets the
// light on a window's edge follow the pointer. With reduced motion the recordings get
// controls and nothing else happens.
(() => {
  const videos = [...document.querySelectorAll('.clip video')];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    for (const v of videos) { v.src = v.dataset.src; v.controls = true; }
    return;
  }

  // ---- Recordings play while on screen; the feature's keys are pressed as they start.
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target;
      v.closest('.feat').classList.toggle('in', e.isIntersecting);
      if (e.isIntersecting) {
        if (!v.getAttribute('src')) v.src = v.dataset.src;
        v.play().catch(() => { /* the still stays */ });
      } else {
        v.pause();
      }
    }
  }, { threshold: 0.35 });
  for (const v of videos) io.observe(v);

  // ---- Speed: the 10,000-file measurement, replayed at the measured speed.
  const bars = document.querySelector('.bars');
  if (bars) {
    const lanes = [...bars.querySelectorAll('.lane')];
    const unit = bars.dataset.unit || ' s';
    let raf = 0;
    const show = (lane, s) => { lane.querySelector('.tm').textContent = s.toFixed(1) + unit; };
    bars.classList.add('armed');
    lanes.forEach((l) => show(l, 0));
    const run = () => {
      cancelAnimationFrame(raf);
      bars.classList.remove('go');
      lanes.forEach((l) => show(l, 0));
      void bars.offsetWidth; // restart the transition
      bars.classList.add('go');
      const t0 = performance.now();
      const tick = (now) => {
        const s = (now - t0) / 1000;
        let running = false;
        for (const l of lanes) {
          const t = Number(l.dataset.t);
          show(l, Math.min(s, t));
          if (s < t) running = true;
        }
        if (running) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    bars.querySelector('button').addEventListener('click', run);
    const once = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      once.disconnect();
      setTimeout(run, 400);
    }, { threshold: 0.8 });
    once.observe(bars);
  }

  // ---- The light on a window's edge follows the pointer.
  for (const el of document.querySelectorAll('.lit')) {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }
})();
