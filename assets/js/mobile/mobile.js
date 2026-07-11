/**
 * mobile.js — Mobile Enhancements
 * Campus Vista | Mobile Version
 */

(function () {
  // ─── Re-append mobile.css as the LAST stylesheet ───
  // Tailwind CDN injects its <style> after all <link> tags.
  // By appending mobile.css dynamically after DOM ready,
  // we ensure it loads after Tailwind's injected styles.
  function ensureMobileCSSLast() {
    var existing = document.querySelector('link[href*="mobile.css"]');
    if (existing) {
      var clone = existing.cloneNode();
      clone.onload = function () {
        existing.parentNode.removeChild(existing);
      };
      document.head.appendChild(clone);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureMobileCSSLast);
  } else {
    ensureMobileCSSLast();
  }

  // ─── Fix 100vh on mobile browsers (URL bar issue) ───
  function setVH() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }
  setVH();
  window.addEventListener('resize', setVH);

  // ─── Touch-friendly: prevent ghost clicks ───
  document.addEventListener('touchend', function (e) {
    var target = e.target;
    if (target && target.tagName === 'A' && target.getAttribute('href') === '#') {
      e.preventDefault();
    }
  }, { passive: true });

  // ─── Navbar mobile panel — collapsible sub-menus ───
  function initMobileNav() {
    var panel = document.getElementById('navbar-mobile-panel');
    if (!panel) return;
    var nav = panel.querySelector('nav');
    if (!nav) return;
    var sections = nav.querySelectorAll(':scope > div');
    sections.forEach(function (section) {
      var header = section.querySelector(':scope > p');
      var content = section.querySelector(':scope > div');
      if (header && content) {
        content.classList.add('nav-section-content');
        header.style.cursor = 'pointer';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        // Add toggle indicator
        var indicator = document.createElement('span');
        indicator.textContent = '+';
        indicator.style.fontSize = '14px';
        indicator.style.fontWeight = '700';
        indicator.style.color = '#94a3b8';
        indicator.style.transition = 'transform 0.3s ease';
        header.appendChild(indicator);
        header.addEventListener('click', function (e) {
          e.stopPropagation();
          content.classList.toggle('open');
          indicator.textContent = content.classList.contains('open') ? '−' : '+';
        });
      }
    });
  }
  // Run after DOM ready and navbar is injected
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }

  // ─── Navbar dropdown toggle on click ───
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.id-dropdown > button');
    if (btn) {
      e.preventDefault();
      var dropdown = btn.parentNode;
      var isOpen = dropdown.classList.contains('dropdown-open');
      document.querySelectorAll('.id-dropdown').forEach(function (el) {
        el.classList.remove('dropdown-open');
      });
      if (!isOpen) {
        dropdown.classList.add('dropdown-open');
      }
    }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.id-dropdown')) {
      document.querySelectorAll('.id-dropdown').forEach(function (el) {
        el.classList.remove('dropdown-open');
      });
    }
  });

  // ─── Ensure smooth scroll works on mobile ───
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
