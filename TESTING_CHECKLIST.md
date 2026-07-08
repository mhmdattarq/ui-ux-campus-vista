# Checklist Testing Halaman Musholla ITBRP

## Testing Manual - Panduan Lengkap

### A. Persiapan Testing
1. [ ] Pastikan semua file sudah di-upload ke server/local
2. [ ] Buka browser (Chrome, Firefox, atau Safari)
3. [ ] Buka `index.html` terlebih dahulu

### B. Testing Navigasi

#### 1. Dari Homepage ke Musholla
- [ ] Buka `index.html`
- [ ] Scroll ke section "Explore"
- [ ] Klik card "Musholla ITBRP"
- [ ] **Expected**: Redirect ke `explore_musholla.html`

#### 2. Dari Navbar Menu
- [ ] Klik menu "Explore" di navbar
- [ ] Klik submenu "🕌 Musholla"
- [ ] **Expected**: Redirect ke `explore_musholla.html`

#### 3. Breadcrumb Navigation
- [ ] Di halaman musholla, cek breadcrumb di atas
- [ ] Klik "Home" → harus kembali ke `index.html`
- [ ] Klik "Explore" → harus ke section explore

### C. Testing Visual & Layout

#### 1. Hero Section
- [ ] Hero image tampil dengan baik
- [ ] Title "Musholla ITBRP" tampil dengan gradient merah
- [ ] Deskripsi mudah dibaca
- [ ] Card "60 Jamaah" tampil dengan background merah
- [ ] Card "06:00-21:00" tampil dengan background biru
- [ ] Badge lokasi tampil di bawah foto
- [ ] **Mobile**: Layout berubah jadi 1 kolom

#### 2. Tabel Informasi
- [ ] Tabel tampil dengan border dan shadow
- [ ] Icon 🕌 untuk Nama Musholla tampil
- [ ] Icon 👥 untuk Kapasitas tampil
- [ ] Icon 🕐 untuk Jam Operasional tampil
- [ ] Hover effect: row berubah background saat di-hover
- [ ] **Mobile**: Tabel tetap bisa di-scroll horizontal

#### 3. Deskripsi
- [ ] Card deskripsi tampil dengan glass effect
- [ ] Text deskripsi lengkap dan mudah dibaca
- [ ] Padding dan spacing nyaman

#### 4. Galeri (3 Foto)
- [ ] Foto "Tampak Depan" tampil
- [ ] Foto "Tampak Samping" tampil
- [ ] Foto "Tampak Dalam" tampil
- [ ] Badge label di kanan atas setiap foto tampil
- [ ] Hover effect: gambar zoom in sedikit
- [ ] Hover effect: card naik sedikit
- [ ] Title dan deskripsi di bawah setiap foto tampil
- [ ] **Mobile**: Grid berubah jadi 1 kolom

#### 5. Virtual Tour Section
- [ ] Section virtual tour tampil
- [ ] Background overlay gelap tampil
- [ ] Icon play button tampil
- [ ] Button "Mulai Virtual Tour" tampil
- [ ] Badge "360°", "HD", "Interactive" tampil
- [ ] Button "Buka di Layar Penuh" tampil di pojok kanan bawah

#### 6. Footer
- [ ] 3 kolom informasi tampil (Musholla ITBRP, Jam Operasional, Lokasi)
- [ ] Copyright text tampil
- [ ] **Mobile**: 3 kolom jadi 1 kolom vertikal

### D. Testing Interaktivitas

#### 1. Hover Effects
- [ ] Hero image: ada slight zoom effect
- [ ] Card informasi (60 jamaah, jam): naik sedikit saat hover
- [ ] Tabel row: background berubah saat hover
- [ ] Galeri foto: zoom in saat hover
- [ ] Galeri card: naik dan shadow membesar saat hover
- [ ] Button virtual tour: scale dan shadow berubah saat hover

#### 2. Virtual Tour Modal
- [ ] Klik button "Mulai Virtual Tour"
- [ ] **Expected**: Modal fullscreen terbuka
- [ ] Modal overlay gelap tampil
- [ ] Button close (X) tampil di pojok kanan atas
- [ ] Klik button close → modal tertutup
- [ ] Klik di luar modal (area gelap) → modal tertutup
- [ ] Tekan tombol "Escape" di keyboard → modal tertutup
- [ ] Klik button "Buka di Layar Penuh" → modal juga terbuka

#### 3. Scroll Animations
- [ ] Scroll halaman perlahan
- [ ] Section muncul dengan fade-in effect saat masuk viewport
- [ ] Hero section: fade in dari bawah
- [ ] Tabel: fade in dari kiri
- [ ] Galeri: fade in dari bawah
- [ ] Virtual tour: fade in dari bawah

### E. Testing Responsiveness

#### 1. Desktop (1920x1080)
- [ ] Layout 2 kolom di hero section
- [ ] Galeri 3 kolom
- [ ] Semua spacing proporsional
- [ ] Text size comfortable untuk dibaca

#### 2. Tablet (768px - 1024px)
- [ ] Hero layout masih 2 kolom atau jadi 1 kolom
- [ ] Galeri bisa 2 kolom
- [ ] Navbar berubah jadi hamburger menu
- [ ] Touch-friendly button sizes

#### 3. Mobile (320px - 767px)
- [ ] Hero jadi 1 kolom vertikal
- [ ] Galeri jadi 1 kolom
- [ ] Tabel bisa di-scroll horizontal
- [ ] Hamburger menu berfungsi
- [ ] Text size masih readable
- [ ] Button size cukup besar untuk di-tap

### F. Testing Performance

#### 1. Loading Speed
- [ ] Halaman load dalam < 3 detik
- [ ] Gambar load dengan smooth
- [ ] Tidak ada flash of unstyled content

#### 2. Smooth Scrolling
- [ ] Scroll halus tanpa lag
- [ ] Animations tidak patah-patah
- [ ] Tidak ada horizontal scroll tidak diinginkan

### G. Testing Browser Compatibility

#### 1. Chrome
- [ ] Semua fitur berfungsi
- [ ] Layout tampil dengan benar
- [ ] Animations smooth

#### 2. Firefox
- [ ] Semua fitur berfungsi
- [ ] Layout tampil dengan benar
- [ ] Animations smooth

#### 3. Safari (Mac/iOS)
- [ ] Semua fitur berfungsi
- [ ] Backdrop-blur effect berfungsi
- [ ] Layout tampil dengan benar

#### 4. Edge
- [ ] Semua fitur berfungsi
- [ ] Layout tampil dengan benar

### H. Testing Accessibility

#### 1. Keyboard Navigation
- [ ] Tab key bisa navigate antar link
- [ ] Enter key bisa klik button
- [ ] Escape key tutup modal

#### 2. Screen Reader (Optional)
- [ ] Alt text pada gambar ada dan deskriptif
- [ ] ARIA labels untuk button ada

### I. Testing Content

#### 1. Text Content
- [ ] Tidak ada typo
- [ ] Grammar benar
- [ ] Informasi akurat:
  - Nama: Musholla ITBRP ✓
  - Kapasitas: 60 jamaah ✓
  - Jam: 06:00 - 21:00 WIB ✓

#### 2. Branding Colors
- [ ] Merah (#BE1A1A) digunakan dengan konsisten
- [ ] Biru (#1B4EF5) digunakan dengan konsisten
- [ ] Gradient merah-biru tampil di beberapa elemen

### J. Bug Checking

#### Common Issues to Check:
- [ ] Tidak ada console errors (buka Developer Tools F12)
- [ ] Tidak ada broken images (gambar placeholder Unsplash load)
- [ ] Tidak ada broken links
- [ ] Modal tidak stuck terbuka
- [ ] Navbar tidak overlapping content
- [ ] Footer tidak floating

### K. Final Checklist

- [ ] Semua navigasi bekerja dengan baik
- [ ] Semua visual elements tampil
- [ ] Semua interactions berfungsi
- [ ] Responsive di 3 breakpoints (mobile, tablet, desktop)
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Content accurate

## Hasil Testing

**Tested by:** ________________  
**Date:** ________________  
**Browser:** ________________  
**Device:** ________________  
**Result:** [ ] PASS  [ ] FAIL  

**Notes/Issues Found:**
_________________________________
_________________________________
_________________________________

## Next Steps Jika Ada Bug

1. Catat bug di notes
2. Screenshot bug
3. Buka file `explore_musholla.html`
4. Cari section yang bermasalah
5. Fix bug
6. Test ulang
7. Ulangi sampai semua PASS

## Tips Testing

- Test di browser yang paling umum digunakan terlebih dahulu (Chrome)
- Test di real device mobile, bukan hanya resize browser
- Clear cache browser jika ada perubahan tidak muncul (Ctrl+Shift+R)
- Gunakan Chrome DevTools untuk debug (F12)
- Test dengan internet lambat juga (throttling)
