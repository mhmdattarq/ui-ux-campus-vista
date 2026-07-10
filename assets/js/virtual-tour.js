/**
 * Virtual Tour 360 — Panoramic Image Viewer
 * Equirectangular 360° viewer with configurable yaw bounds.
 *
 * Cara pakai:
 *   <script src="assets/js/virtual-tour.js"></script>
 *   <button onclick="open360Tour('assets/img/kantin.jpg')">Mulai</button>
 *
 * Membutuhkan elemen dengan id:
 *   #tour-360-modal  — fullscreen modal wrapper
 *   #canvas-360      — canvas untuk rendering
 *   #close-360       — tombol close
 */

// ─── Panorama Configuration ───
// Setiap entri mengontrol arah pandang awal dan batas rotasi horizontal.
// Semua nilai dalam derajat, relatif terhadap pusat gambar (180°).
//   initialYaw: offset dari 180° untuk pandangan awal (0 = menghadap tengah, menjauhi seam)
//   minYaw:     seberapa jauh (derajat) user bisa rotasi ke kiri dari pusat
//   maxYaw:     seberapa jauh (derajat) user bisa rotasi ke kanan dari pusat
//
// Seam (batas kiri/kanan gambar) berada di rotation.y = 0° dan 360°.
// Dengan H_FOV = 100°, seam terlihat saat rotation.y <= 50° atau rotation.y >= 310°.
// Bawaan minYaw/maxYaw = ±128° memberikan batas aman [52°, 308°] dengan buffer 2°.
//
// Untuk menambah panorama baru di masa depan:
//   cukup tambah entri baru ke PANORAMA_CONFIG tanpa mengubah engine.

const PANORAMA_CONFIG = {
  "gedung-a": { initialYaw: 0, minYaw: -128, maxYaw: 80 },
  "gedung-b": { initialYaw: 0, minYaw: -128, maxYaw: 80 },
  "lab-1": { initialYaw: 0, minYaw: -160, maxYaw: 80 },
  "lab-2": { initialYaw: 0, minYaw: -128, maxYaw: 80 },
  "lab-3": { initialYaw: 0, minYaw: -128, maxYaw: 80 },
  "lapangan": { initialYaw: 0, minYaw: -128, maxYaw: 80 },
  "musholla": { initialYaw: 0, minYaw: -128, maxYaw: 128 },
  "perpustakaan": { initialYaw: 0, minYaw: -128, maxYaw: 80 },
  "kantin": { initialYaw: 0, minYaw: -128, maxYaw: 128 },
  "gedung-a-tampak-samping": { initialYaw: 0, minYaw: -128, maxYaw: 128 },
  "ruang-kelas": { initialYaw: 0, minYaw: -128, maxYaw: 128 }
};

// ─── Mapping filename → panorama ID ───
const FILENAME_TO_ID = {
  'gedung-a-360': 'gedung-a',
  'gedung-b-360': 'gedung-b',
  'lab-1-360': 'lab-1',
  'lab-2-360': 'lab-2',
  'lab-3-360': 'lab-3',
  'lapangan-360': 'lapangan',
  'musholla-360': 'musholla',
  'perpus-360': 'perpustakaan',
  'kantin': 'kantin',
  'gedung-a-tampak-samping': 'gedung-a-tampak-samping',
  'kelas-360': 'ruang-kelas'
};

// ─── Engine ───
(function () {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let rotation = { x: 0, y: 0 };
  let currentImage = null;
  let currentPanoramaId = null;
  let canvas = null;
  let ctx = null;

  const H_FOV = 100;
  const SENSITIVITY = 0.4;
  const YAW_BASE = 180;

  // ─── Helpers ───
  function getPanoramaId(imageSrc) {
    const filename = imageSrc.split('/').pop().replace(/\.[^.]+$/, '');
    return FILENAME_TO_ID[filename] || filename;
  }

  function getConfig() {
    return PANORAMA_CONFIG[currentPanoramaId] || {};
  }

  function clampRotation() {
    const cfg = getConfig();
    const minYaw = YAW_BASE + (cfg.minYaw !== undefined ? cfg.minYaw : -180);
    const maxYaw = YAW_BASE + (cfg.maxYaw !== undefined ? cfg.maxYaw : 180);
    rotation.y = Math.max(minYaw, Math.min(maxYaw, rotation.y));
  }

  // ─── Init ───
  function init360Viewer() {
    const modal = document.getElementById('tour-360-modal');
    const closeBtn = document.getElementById('close-360');
    canvas = document.getElementById('canvas-360');
    ctx = canvas ? canvas.getContext('2d') : null;

    if (!modal || !closeBtn || !canvas || !ctx) {
      console.error('360 viewer: missing elements');
      return;
    }

    // ─── Buka 360 Tour ───
    window.open360Tour = function (imageSrc) {
      currentPanoramaId = getPanoramaId(imageSrc);
      currentImage = new Image();

      currentImage.onload = function () {
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        canvas.width = modal.clientWidth;
        canvas.height = modal.clientHeight;

        const cfg = getConfig();
        rotation.y = YAW_BASE + (cfg.initialYaw || 0);
        rotation.x = 0;
        clampRotation();
        document.body.style.overflow = 'hidden';
        render360();
      };

      currentImage.onerror = function () {
        alert('Gagal memuat gambar 360°: ' + imageSrc);
      };

      currentImage.src = imageSrc;
    };

    // ─── Tutup 360 Tour ───
    window.close360Tour = function () {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
      currentImage = null;
      currentPanoramaId = null;
    };

    closeBtn.addEventListener('click', window.close360Tour);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) window.close360Tour();
    });

    // ─── Mouse events ───
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    // ─── Touch events ───
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);

    // ─── Resize ───
    window.addEventListener('resize', function () {
      if (currentImage && !modal.classList.contains('hidden')) {
        canvas.width = modal.clientWidth;
        canvas.height = modal.clientHeight;
        render360();
      }
    });

    // ─── Handlers ───
    function handleMouseDown(e) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      canvas.style.cursor = 'grabbing';
    }

    function handleMouseMove(e) {
      if (!isDragging || !currentImage) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      rotation.y += dx * SENSITIVITY;
      rotation.x += dy * SENSITIVITY;
      rotation.x = Math.max(-60, Math.min(60, rotation.x));
      clampRotation();
      startX = e.clientX;
      startY = e.clientY;
      render360();
    }

    function handleMouseUp() {
      isDragging = false;
      canvas.style.cursor = 'grab';
    }

    function handleTouchStart(e) {
      e.preventDefault();
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    }

    function handleTouchMove(e) {
      e.preventDefault();
      if (!isDragging || !currentImage || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      rotation.y += dx * SENSITIVITY;
      rotation.x += dy * SENSITIVITY;
      rotation.x = Math.max(-60, Math.min(60, rotation.x));
      clampRotation();
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      render360();
    }

    function handleTouchEnd() {
      isDragging = false;
    }

    // ─── Render ───
    function render360() {
      if (!currentImage || !ctx) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = currentImage.width;
      const ih = currentImage.height;

      ctx.clearRect(0, 0, cw, ch);

      // --- Horizontal ---
      const srcW = iw * (H_FOV / 360);
      const rotY = ((rotation.y % 360) + 360) % 360;
      const srcX = (rotY / 360) * iw;

      // --- Vertical ---
      const vFovRatio = ch / cw;
      const vertVisible = Math.max(0.25, Math.min(0.75, (H_FOV / 180) * vFovRatio));
      const srcH = ih * vertVisible;
      const midY = ih * 0.35;
      const shiftRange = (ih - srcH) * 0.4;
      const srcY = Math.max(0, Math.min(ih - srcH, midY - srcH / 2 + (rotation.x / 60) * shiftRange));

      // --- Draw (dengan wrapping horizontal) ---
      if (srcX + srcW > iw) {
        const part1W = iw - srcX;
        const part2W = srcW - part1W;
        const cw1 = (part1W / srcW) * cw;
        const cw2 = cw - cw1;

        ctx.drawImage(currentImage, srcX, srcY, part1W, srcH, 0, 0, cw1 + 1, ch);
        ctx.drawImage(currentImage, 0, srcY, part2W, srcH, cw1, 0, cw2, ch);
      } else {
        ctx.drawImage(currentImage, srcX, srcY, srcW, srcH, 0, 0, cw, ch);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init360Viewer);
  } else {
    init360Viewer();
  }
})();
