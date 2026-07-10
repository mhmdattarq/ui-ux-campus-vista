/**
 * Preloader — Fullscreen loading overlay with campus logo
 * Injekt otomatis ke <html> sebelum <body> diparse.
 */
(function () {
  var style = document.createElement('style');
  style.textContent = [
    '@keyframes pl-spin { to { transform: rotate(360deg); } }',
    '@keyframes pl-pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.9); opacity: 0.6; } }',
    '@keyframes pl-dot1 { 0%,20% { opacity: 0; } 25%,100% { opacity: 1; } }',
    '@keyframes pl-dot2 { 0%,40% { opacity: 0; } 45%,100% { opacity: 1; } }',
    '@keyframes pl-dot3 { 0%,60% { opacity: 0; } 65%,100% { opacity: 1; } }',
    '@keyframes pl-content-in { from { opacity: 0; transform: scale(0.92) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }',
    '@keyframes pl-content-out { from { opacity: 1; transform: scale(1) translateY(0); } to { opacity: 0; transform: scale(0.92) translateY(-10px); } }'
  ].join('');
  document.head.appendChild(style);

  var el = document.createElement('div');
  el.id = 'preloader';
  el.innerHTML =
    '<div class="pl-overlay" style="position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#ffffff;">' +
      '<div class="pl-content" style="display:flex;flex-direction:column;align-items:center;animation:pl-content-in 0.55s cubic-bezier(0.22,1,0.36,1) both;">' +
        '<div style="position:relative;width:140px;height:140px;">' +
          '<div style="position:absolute;inset:-6px;border-radius:50%;background:linear-gradient(135deg,#BE1A1A,#1B4EF5,#BE1A1A);mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2px));-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2px));animation:pl-spin 1.2s linear infinite;"></div>' +
          '<div style="position:absolute;inset:0;border-radius:50%;background:rgba(0,0,0,0.02);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;border:1px solid rgba(0,0,0,0.04);">' +
            '<img src="assets/img/logofix.png" alt="" style="width:70px;height:70px;object-fit:contain;animation:pl-pulse 2s ease-in-out infinite;">' +
          '</div>' +
        '</div>' +
        '<p style="margin-top:28px;font-family:sans-serif;font-size:15px;font-weight:700;color:#BE1A1A;letter-spacing:4px;text-transform:uppercase;">' +
          'Memuat' +
          '<span style="animation:pl-dot1 1.4s ease infinite;">.</span>' +
          '<span style="animation:pl-dot2 1.4s ease infinite;">.</span>' +
          '<span style="animation:pl-dot3 1.4s ease infinite;">.</span>' +
        '</p>' +
      '</div>' +
    '</div>';

  document.documentElement.appendChild(el);

  // Tampilkan preloader minimal 1 detik agar terlihat walau cached
  var startTime = Date.now();
  var MIN_SHOW = 1000;

  function hidePreloader() {
    var elapsed = Date.now() - startTime;
    var delay = Math.max(0, MIN_SHOW - elapsed);

    setTimeout(function () {
      var p = document.getElementById('preloader');
      if (!p) return;

      var content = p.querySelector('.pl-content');
      var overlay = p.querySelector('.pl-overlay');

      // Step 1: content animates out (scale down + fade + slide up)
      if (content) {
        content.style.animation = 'pl-content-out 0.4s cubic-bezier(0.22,1,0.36,1) both';
      }

      // Step 2: after content exit, fade out overlay
      setTimeout(function () {
        if (overlay) {
          overlay.style.transition = 'opacity 0.3s ease';
          overlay.style.opacity = '0';
        }

        // Step 3: remove from DOM
        setTimeout(function () {
          if (p.parentNode) p.parentNode.removeChild(p);
        }, 350);
      }, 400);
    }, delay);
  }

  window.addEventListener('load', hidePreloader);

  // Navigasi kembali (bfcache) — hapus preloader kalau masih ada
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      var p = document.getElementById('preloader');
      if (p && p.parentNode) p.parentNode.removeChild(p);
    }
  });
})();
