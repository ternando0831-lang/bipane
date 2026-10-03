// Bipane — product page behavior (design: Claude Design "ExploreMe-v4").
// Everything here is an enhancement: without it the page is a plain, complete document.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cl = (x) => Math.max(0, Math.min(1, x));
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const $ = (s, el = document) => el.querySelector(s);
  const SPLIT = 49.8; // where the window's two panes meet, in % of its width

  // ---- Header tabs: the section you are in is the selected tab.
  const tabs = [...document.querySelectorAll('.tabs a')];
  const sections = tabs.map((a) => document.getElementById(a.hash.slice(1)));
  const download = document.getElementById('download');
  let currentTab = null;
  const spy = () => {
    let cur = null;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= 140) cur = i; });
    if (download && download.getBoundingClientRect().top <= innerHeight * 0.5) cur = null;
    if (cur === currentTab) return;
    currentTab = cur;
    tabs.forEach((a, i) => {
      if (i === cur) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  };

  // ---- The hero: on wide screens the window rises as one pane, then opens into two.
  const hero = $('.hero');
  const half = $('.half');
  const pdiv = $('.pdiv');
  const text = $('.hero-text');
  const meta = $('.hero-text .meta');
  const demo = $('.demo');
  const win = $('.win');
  const tryRow = $('.try');
  const status = $('.status');
  let scrolly = root.classList.contains('scrolly');
  let frame = 0;

  const clear = () => {
    Object.assign(pdiv.style, { top: '', height: '' });
    half.style.opacity = '';
    Object.assign(text.style, { opacity: '', transform: '', visibility: '' });
    win.style.transform = '';
    win.classList.remove('open');
    for (const el of [tryRow, status]) Object.assign(el.style, { opacity: '', pointerEvents: '' });
  };
  const progress = () => {
    const r = hero.getBoundingClientRect();
    return cl(-r.top / Math.max(1, r.height - innerHeight));
  };
  const update = () => {
    frame = 0;
    spy();
    if (!scrolly) return;
    const vh = innerHeight, p = progress();
    // qt: the headline fades; q2: the window rises; then the second pane opens; q3: the keys appear.
    const qt = cl(p / 0.1), q2 = ease(cl((p - 0.05) / 0.33)), q3 = cl((p - 0.48) / 0.1);
    text.style.opacity = String(1 - qt);
    text.style.transform = `translateY(${-40 * qt}px)`;
    text.style.visibility = qt >= 1 ? 'hidden' : '';
    const natural = demo.offsetTop + win.offsetTop;
    const dy = (vh * 0.76 - natural) * (1 - q2);
    // Shift the window so that its pane split sits on the page's dividing line.
    win.style.transform = `translate(${(50 - SPLIT).toFixed(2)}%, ${dy}px)`;
    // The line starts under the text and, as the text fades, reaches up to the header.
    const below = meta.offsetTop + meta.offsetHeight + 28;
    const top = below * (1 - qt) + 48 * qt;
    pdiv.style.top = top + 'px';
    pdiv.style.height = Math.max(0, natural + dy - top) + 'px';
    half.style.opacity = String(ease(qt));
    // The second pane slides in once the window is in place (and out again when scrolling back).
    const open = win.classList.contains('open');
    if (!open && p > 0.4) win.classList.add('open');
    else if (open && p < 0.36) win.classList.remove('open');
    for (const el of [tryRow, status]) {
      el.style.opacity = String(q3);
      el.style.pointerEvents = q3 > 0.5 ? 'auto' : 'none';
    }
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  const onResize = () => {
    const want = !reduce && innerWidth >= 920 && innerHeight >= 620;
    if (want !== scrolly) {
      scrolly = want;
      root.classList.toggle('scrolly', want);
      clear();
    }
    update();
  };
  addEventListener('resize', onResize);
  addEventListener('scroll', schedule, { passive: true });
  onResize();

  // ---- The demo: the app's own keys play recordings of what they do in the app.
  const keys = [...document.querySelectorAll('.key')];
  const videos = [...win.querySelectorAll('video')];
  const caption = $('.status span');
  let current = null;
  let downTimer = 0;

  const setStatus = () => {
    const key = current && keys.find((k) => k.dataset.clip === current);
    caption.textContent = key ? key.dataset.caption
      : win.classList.contains('focused') ? status.dataset.focus : status.dataset.idle;
  };
  const play = (id) => {
    current = id;
    for (const k of keys) {
      const on = k.dataset.clip === id;
      k.setAttribute('aria-pressed', String(on));
      k.classList.toggle('down', on);
    }
    clearTimeout(downTimer);
    downTimer = setTimeout(() => keys.forEach((k) => k.classList.remove('down')), 170);
    for (const v of videos) {
      if (v.dataset.clip !== id) { v.pause(); v.classList.remove('on'); continue; }
      if (!v.getAttribute('src')) {
        v.addEventListener('playing', () => { if (current === v.dataset.clip) v.classList.add('on'); });
        v.src = v.dataset.src;
      } else if (v.readyState >= 2) {
        v.classList.add('on');
      }
      try { v.currentTime = 0; } catch { /* not loaded yet */ }
      v.play().catch(() => { /* the screenshot stays */ });
    }
    setStatus();
  };

  const clipFor = (e) => {
    const k = e.key, ctrl = e.ctrlKey || e.metaKey, shift = e.shiftKey;
    if (e.altKey) return null;
    if (k === ' ' && !ctrl) return 'quicklook';
    if (k === 'F5' && shift && !ctrl) return 'copy';
    if (e.code === 'KeyZ' && ctrl && !shift) return 'undo';
    if (k === 'Enter' && !ctrl && !shift) return 'archive';
    if (e.code === 'KeyD' && ctrl && shift) return 'layout';
    return null;
  };
  win.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); win.blur(); return; }
    const id = clipFor(e);
    if (!id) return;
    e.preventDefault();
    play(id);
  });
  win.addEventListener('focus', () => { win.classList.add('focused'); demo.classList.add('focused-demo'); setStatus(); });
  win.addEventListener('blur', (e) => {
    if (win.contains(e.relatedTarget)) return;
    win.classList.remove('focused'); demo.classList.remove('focused-demo'); setStatus();
  });
  const focusWin = () => win.focus({ preventScroll: true });
  // A click on a key also moves the focus to the window, so the real keys work next.
  for (const k of keys) {
    k.addEventListener('mousedown', (e) => e.preventDefault());
    k.addEventListener('click', () => { focusWin(); play(k.dataset.clip); });
  }
  setStatus();

  const demoY = () => {
    if (scrolly) return hero.getBoundingClientRect().top + scrollY + (hero.offsetHeight - innerHeight) * 0.8;
    return demo.getBoundingClientRect().top + scrollY - 56;
  };
  const tryDemo = (id) => {
    scrollTo({ top: demoY(), behavior: reduce ? 'auto' : 'smooth' });
    focusWin();
    play(id);
  };
  for (const a of document.querySelectorAll('[data-try]')) {
    a.addEventListener('click', (e) => { e.preventDefault(); tryDemo(a.dataset.try); });
  }

  // Clicking the backdrop closes a dialog (closedby="any"); Safari needs this by hand.
  const lightDismiss = (d) => {
    if ('closedBy' in HTMLDialogElement.prototype) return;
    d.addEventListener('click', (e) => {
      if (e.target !== d) return;
      const r = d.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom || e.clientX < r.left || e.clientX > r.right) d.close();
    });
  };

  // ---- Features: the cards become files in a small Bipane window. ↑↓ select,
  // the right pane previews, Space opens Quick Look with ←→ to go through — as in the app.
  const xp = $('.xp');
  const ql = $('dialog.ql');
  if (xp && ql) {
    const list = $('.xp-list', xp);
    const preview = $('.xp-preview', xp);
    const statusBar = $('.xp-status', xp);
    const empty = $('.xp-empty', xp);
    const filter = $('.xp-filter input', xp);
    const items = [...preview.querySelectorAll('.feature')];
    const NS = 'http://www.w3.org/2000/svg';
    const rows = items.map((a) => {
      const row = document.createElement('div');
      row.className = 'xp-row';
      row.id = 'xp-' + a.dataset.clip;
      row.dataset.color = a.dataset.color;
      row.setAttribute('role', 'option');
      const svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('width', '18');
      svg.setAttribute('height', '18');
      svg.setAttribute('aria-hidden', 'true');
      const use = document.createElementNS(NS, 'use');
      use.setAttribute('href', '#i-' + a.dataset.icon);
      svg.append(use);
      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = a.querySelector('h3').textContent;
      const keys = a.querySelector('.text > .kbds, .text > kbd').cloneNode(true);
      const kind = document.createElement('span');
      kind.className = 'kind';
      kind.textContent = a.dataset.kind;
      row.append(svg, name, keys, kind);
      list.append(row);
      return row;
    });
    let cur = 0;
    const visible = () => rows.map((_, i) => i).filter((i) => !rows[i].hidden);
    const paintStatus = () => {
      const parts = [statusBar.dataset.items.replace('{n}', String(visible().length))];
      if (cur >= 0) parts.push(statusBar.dataset.sel);
      statusBar.replaceChildren(...parts.map((t) => Object.assign(document.createElement('span'), { textContent: t })));
    };
    const select = (i) => {
      cur = i;
      rows.forEach((r, j) => r.setAttribute('aria-selected', String(j === i)));
      items.forEach((a, j) => {
        a.classList.toggle('cur', j === i);
        if (j !== i) a.querySelector('.clip video').pause();
      });
      if (i >= 0) list.setAttribute('aria-activedescendant', rows[i].id);
      else list.removeAttribute('aria-activedescendant');
      preview.dataset.color = i >= 0 ? items[i].dataset.color : '';
      empty.hidden = i >= 0;
      paintStatus();
    };

    // Quick Look
    const qlVideo = $('video', ql);
    const qlTitle = $('.t', ql);
    const qlNum = $('.n', ql);
    let qlAt = -1;
    ql.tabIndex = -1;
    const showQL = (i) => {
      qlAt = i;
      const a = items[i];
      const v = a.querySelector('.clip video');
      const vis = visible();
      qlTitle.textContent = a.querySelector('h3').textContent;
      qlNum.textContent = `${vis.indexOf(i) + 1} / ${vis.length}`;
      qlVideo.poster = v.poster;
      qlVideo.src = v.dataset.src;
      qlVideo.setAttribute('aria-label', v.getAttribute('aria-label'));
      if (reduce) qlVideo.controls = true;
      else qlVideo.play().catch(() => {});
      select(i);
    };
    const openQL = (i) => {
      if (i < 0) return;
      showQL(i);
      if (!ql.open) { ql.showModal(); ql.focus(); }
    };
    const stepQL = (d) => {
      const vis = visible();
      const at = vis.indexOf(qlAt);
      showQL(vis[(at + d + vis.length) % vis.length]);
    };
    ql.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); stepQL(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); stepQL(-1); }
      else if (e.key === ' ' && e.target === ql) { e.preventDefault(); ql.close(); }
    });
    for (const b of ql.querySelectorAll('[data-step]')) b.addEventListener('click', () => stepQL(Number(b.dataset.step)));
    $('[data-close]', ql).addEventListener('click', () => ql.close());
    ql.addEventListener('close', () => { qlVideo.pause(); list.focus({ preventScroll: true }); });
    lightDismiss(ql);

    list.addEventListener('keydown', (e) => {
      const vis = visible();
      const at = vis.indexOf(cur);
      let next = null;
      if (e.key === 'ArrowDown') next = vis[Math.min(vis.length - 1, at + 1)];
      else if (e.key === 'ArrowUp') next = vis[Math.max(0, at - 1)];
      else if (e.key === 'Home') next = vis[0];
      else if (e.key === 'End') next = vis[vis.length - 1];
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); openQL(cur); return; }
      if (next == null) return;
      e.preventDefault();
      select(next);
    });
    rows.forEach((r, i) => {
      r.addEventListener('click', () => { select(i); list.focus({ preventScroll: true }); });
      r.addEventListener('dblclick', () => openQL(i));
    });
    items.forEach((a, i) => a.querySelector('.clip').addEventListener('click', () => openQL(i)));

    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase();
      items.forEach((a, i) => {
        rows[i].hidden = !!q && !(a.textContent + ' ' + a.dataset.kind).toLowerCase().includes(q);
      });
      const vis = visible();
      if (!vis.includes(cur)) select(vis.length ? vis[0] : -1);
      else paintStatus();
    });
    filter.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter') { e.preventDefault(); list.focus(); }
    });
    select(0);
  }

  // ---- Speed: the 10,000-file measurement, replayed at the measured speed.
  const race = $('.race');
  if (race && !reduce) {
    const lanes = [...race.querySelectorAll('.lane')];
    const unit = race.dataset.unit || ' s';
    let raf = 0;
    const show = (lane, s) => { lane.querySelector('.tm').textContent = s.toFixed(1) + unit; };
    race.classList.add('armed');
    lanes.forEach((l) => show(l, 0));
    const run = () => {
      cancelAnimationFrame(raf);
      race.classList.remove('go');
      lanes.forEach((l) => { l.classList.remove('done'); show(l, 0); });
      void race.offsetWidth; // restart the transition
      race.classList.add('go');
      const t0 = performance.now();
      const tick = (now) => {
        const s = (now - t0) / 1000;
        let running = false;
        for (const l of lanes) {
          const t = Number(l.dataset.t);
          show(l, Math.min(s, t));
          if (s >= t) l.classList.add('done');
          else running = true;
        }
        if (running) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    $('.race-head button', race).addEventListener('click', run);
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      setTimeout(run, 350);
    }, { threshold: 0.6 });
    io.observe(race);
  }

  // ---- Ctrl+K: a command palette for the page, like the app's.
  const pal = $('dialog.pal');
  const palBtn = $('.pal-btn');
  if (pal && palBtn) {
    const input = $('input', pal);
    const opts = [...pal.querySelectorAll('li')];
    opts.forEach((o, i) => { o.id = 'pal-' + i; });
    const shown = () => opts.filter((o) => !o.hidden);
    const mark = (o, scroll) => {
      for (const x of opts) x.setAttribute('aria-selected', String(x === o));
      if (o) {
        input.setAttribute('aria-activedescendant', o.id);
        if (scroll) o.scrollIntoView({ block: 'nearest' });
      } else {
        input.removeAttribute('aria-activedescendant');
      }
    };
    const refresh = () => {
      const q = input.value.trim().toLowerCase();
      for (const o of opts) o.hidden = !!q && !o.textContent.toLowerCase().includes(q);
      mark(shown()[0] || null, true);
    };
    const openPal = () => {
      input.value = '';
      refresh();
      pal.showModal();
      input.focus();
    };
    const go = (o) => {
      pal.close();
      if (o.dataset.go) {
        const el = document.getElementById(o.dataset.go);
        if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      } else if (o.dataset.play) {
        tryDemo(o.dataset.play);
      } else if (o.dataset.href) {
        location.href = o.dataset.href;
      }
    };
    input.addEventListener('input', refresh);
    input.addEventListener('keydown', (e) => {
      const s = shown();
      const at = s.findIndex((o) => o.getAttribute('aria-selected') === 'true');
      if (e.key === 'ArrowDown') { e.preventDefault(); mark(s[Math.min(s.length - 1, at + 1)], true); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); mark(s[Math.max(0, at - 1)], true); }
      else if (e.key === 'Enter') { e.preventDefault(); if (s[at]) go(s[at]); }
    });
    for (const o of opts) {
      o.addEventListener('click', () => go(o));
      o.addEventListener('mousemove', () => mark(o, false));
    }
    palBtn.addEventListener('click', openPal);
    addEventListener('keydown', (e) => {
      const k = (e.ctrlKey || e.metaKey) && !e.altKey &&
        ((e.code === 'KeyK' && !e.shiftKey) || (e.code === 'KeyP' && e.shiftKey));
      if (!k || pal.open || (ql && ql.open)) return;
      e.preventDefault();
      openPal();
    });
    lightDismiss(pal);
  }

  // ---- Feature clips loop while they are on screen (not with reduced motion: the still stays).
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const v = e.target;
        if (e.isIntersecting) {
          if (!v.getAttribute('src')) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    }, { rootMargin: '120px 0px' });
    for (const v of document.querySelectorAll('.clip video')) io.observe(v);
  }

  // ---- Sections below the first screen fade in as they arrive.
  if (!reduce && 'IntersectionObserver' in window) {
    const vh = innerHeight;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }, { rootMargin: '0px 0px -6% 0px' });
    for (const el of document.querySelectorAll('[data-reveal]')) {
      if (el.getBoundingClientRect().top <= vh * 0.9) continue;
      el.classList.add('rv');
      io.observe(el);
    }
  }
})();
