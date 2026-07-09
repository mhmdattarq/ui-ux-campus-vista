/**
 * Virtual Tour 360 — Panoramic Image Viewer
 * Equirectangular 360° viewer with drag interaction.
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

(function () {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let rotation = { x: 0, y: 0 };
  let currentImage = null;
  let canvas = null;
  let ctx = null;

  // Horizontal field of view in degrees (berapa derajat yang terlihat sekali lihat)
  const H_FOV = 100;
  // Seberapa sensitif drag (semakin kecil, semakin lambat rotasi)
  const SENSITIVITY = 0.4;

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
      currentImage = new Image();

      currentImage.onload = function () {
        // Tampilkan modal dulu agar ukuran canvas akurat
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        canvas.width = modal.clientWidth;
        canvas.height = modal.clientHeight;

        rotation.x = 0;
        rotation.y = 180; // mulai dari tengah
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
      // Berapa lebar gambar yang terlihat berdasarkan FOV
      const srcW = iw * (H_FOV / 360);
      const rotY = ((rotation.y % 360) + 360) % 360;
      const srcX = (rotY / 360) * iw;

      // --- Vertical ---
      // rotation.x: -60 (lihat atas) sampai +60 (lihat bawah)
      // Bagian gambar yang terlihat secara vertikal
      const vertVisible = 0.55; // 55% dari tinggi gambar
      const srcH = ih * vertVisible;
      // Posisi tengah vertikal digeser berdasarkan rotation.x
      const midY = ih * 0.35; // titik fokus agak ke atas (0.5 = tengah)
      const srcY = midY - srcH / 2 + (rotation.x / 60) * (ih * 0.12);
      const clampedSrcY = Math.max(0, Math.min(ih - srcH, srcY));

      // --- Draw (dengan wrapping horizontal) ---
      if (srcX + srcW > iw) {
        // Bagian kanan gambar
        const part1W = iw - srcX;
        // Bagian kiri gambar (sisa)
        const part2W = srcW - part1W;
        // Proporsi canvas
        const cw1 = (part1W / srcW) * cw;
        const cw2 = cw - cw1;

        ctx.drawImage(currentImage, srcX, clampedSrcY, part1W, srcH, 0, 0, cw1, ch);
        ctx.drawImage(currentImage, 0, clampedSrcY, part2W, srcH, cw1, 0, cw2, ch);
      } else {
        ctx.drawImage(currentImage, srcX, clampedSrcY, srcW, srcH, 0, 0, cw, ch);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init360Viewer);
  } else {
    init360Viewer();
  }
})();
