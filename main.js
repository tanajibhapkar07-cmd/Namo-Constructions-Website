/* =========================================================
   NAMO CONSTRUCTIONS — main.js
   Lightweight vanilla JavaScript (no libraries).
   1. Mobile navigation
   2. Sticky header state
   3. Scroll spy (active nav link)
   4. Reveal on scroll
   5. Project tabs
   6. Contact form validation (opens the visitor's email app)
   ========================================================= */
(function () {
  'use strict';

  /* EDIT: must match the business email shown on the contact section.
     The form does NOT store anything on this website — it only opens
     the visitor's own mail application with the message pre-filled. */
  var CONTACT_EMAIL = 'contact@namoconstructions.in';

  var doc = document;
  var header = doc.getElementById('siteHeader');
  var nav = doc.getElementById('primaryNav');
  var toggle = doc.getElementById('navToggle');
  var overlay = doc.getElementById('navOverlay');
  var DESKTOP_MIN = 1060;

  /* ---------- 1. MOBILE NAVIGATION ---------- */
  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    if (overlay) overlay.classList.toggle('is-open', open);
    doc.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (overlay) overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (overlay) overlay.addEventListener('click', function () { setNav(false); });

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNav(false);
  });

  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= DESKTOP_MIN) setNav(false);
  });

  /* ---------- 2. STICKY HEADER STATE ---------- */
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  /* ---------- 3. SCROLL SPY ---------- */
  var navLinks = Array.prototype.slice.call(doc.querySelectorAll('.nav__link[href^="#"]'));
  var sections = navLinks
    .map(function (link) { return doc.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  function onScrollSpy() {
    if (!sections.length) return;
    var offset = (header ? header.offsetHeight : 80) + 90;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top - offset <= 0) current = sections[i];
    }
    if (current) setActiveLink(current.id);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScrollHeader();
      onScrollSpy();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 4. REVEAL ON SCROLL ---------- */
  var revealItems = Array.prototype.slice.call(doc.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && revealItems.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { io.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 5. PROJECT TABS ---------- */
  var tabs = Array.prototype.slice.call(doc.querySelectorAll('[role="tab"]'));

  function activateTab(tab) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.classList.toggle('is-active', selected);
      t.setAttribute('aria-selected', selected ? 'true' : 'false');
      t.tabIndex = selected ? 0 : -1;
      var panel = doc.getElementById(t.getAttribute('aria-controls'));
      if (panel) {
        panel.classList.toggle('is-active', selected);
        if (selected) { panel.removeAttribute('hidden'); } else { panel.setAttribute('hidden', ''); }
      }
    });
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activateTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
      if (e.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); activateTab(next); next.focus(); }
    });
  });

  /* ---------- 6. CONTACT FORM ---------- */
  var form = doc.getElementById('contactForm');
  var status = doc.getElementById('formStatus');

  var rules = {
    'cf-name': function (v) { return v.trim().length >= 2 ? '' : 'Please enter your name.'; },
    'cf-email': function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'; },
    'cf-phone': function (v) {
      var digits = v.replace(/\D/g, '');
      return digits.length >= 7 && digits.length <= 15 ? '' : 'Please enter a valid phone number.';
    },
    'cf-subject': function (v) { return v.trim().length >= 3 ? '' : 'Please enter a subject.'; },
    'cf-message': function (v) { return v.trim().length >= 10 ? '' : 'Please write at least 10 characters.'; }
  };

  function validateField(id) {
    var field = doc.getElementById(id);
    if (!field) return true;
    var msg = rules[id](field.value);
    var errorEl = doc.getElementById(id + '-error');
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (errorEl) errorEl.textContent = msg;
    return !msg;
  }

  Object.keys(rules).forEach(function (id) {
    var field = doc.getElementById(id);
    if (!field) return;
    field.addEventListener('blur', function () { validateField(id); });
    field.addEventListener('input', function () {
      if (field.getAttribute('aria-invalid') === 'true') validateField(id);
    });
  });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Object.keys(rules).forEach(function (id) {
        var ok = validateField(id);
        if (!ok && !firstInvalid) firstInvalid = doc.getElementById(id);
      });

      if (firstInvalid) {
        if (status) {
          status.textContent = 'Please correct the highlighted fields.';
          status.className = 'form-status is-error';
        }
        firstInvalid.focus();
        return;
      }

      var data = {
        name: doc.getElementById('cf-name').value.trim(),
        email: doc.getElementById('cf-email').value.trim(),
        phone: doc.getElementById('cf-phone').value.trim(),
        subject: doc.getElementById('cf-subject').value.trim(),
        message: doc.getElementById('cf-message').value.trim()
      };

      var body =
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n' +
        'Phone: ' + data.phone + '\n' +
        'Subject: ' + data.subject + '\n\n' +
        data.message + '\n\n-- Sent from namoconstructions.in';

      if (status) {
        status.textContent = 'Opening your email application — nothing is stored on this website.';
        status.className = 'form-status is-success';
      }

      window.location.href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent('[Website enquiry] ' + data.subject) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  var year = doc.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
