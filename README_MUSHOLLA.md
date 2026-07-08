# Halaman Explore Musholla ITBRP

## Deskripsi
Halaman detail Musholla ITBRP yang menampilkan informasi lengkap tentang fasilitas ibadah kampus dengan desain UI/UX modern dan informatif.

## File yang Dibuat
1. `explore_musholla.html` - Halaman utama detail musholla
2. `PANDUAN_GAMBAR_MUSHOLLA.md` - Panduan pengelolaan gambar
3. Folder struktur gambar di `assets/img/musholla/`

## Fitur Halaman

### 1. Hero Section
- Foto hero musholla dengan overlay gradient
- Informasi ringkas kapasitas dan jam operasional
- Badge lokasi interaktif
- Desain responsif dengan branding merah dan biru

### 2. Tabel Informasi Utama
Menampilkan:
- Nama Musholla: Musholla ITBRP
- Kapasitas: 60 jamaah
- Jam Operasional: 06:00 - 21:00 WIB
- Dengan icon visual dan hover effect

### 3. Deskripsi
Teks deskripsi lengkap tentang musholla dalam card glass-effect yang modern dan mudah dibaca.

### 4. Galeri Foto (3 Foto)
- Tampak Depan
- Tampak Samping  
- Tampak Dalam
- Dengan zoom effect dan card hover animation

### 5. Virtual Tour 360°
- Section khusus untuk virtual tour
- Modal fullscreen untuk pengalaman immersive
- Placeholder untuk integrasi teknologi panorama 360°
- Button interaktif dengan animasi

## Desain & Branding

### Warna Kampus
- Merah: `#BE1A1A`
- Biru: `#1B4EF5`

### Komponen UI/UX
- Card hover effects dengan transform dan shadow
- Smooth animations dan transitions
- Gradient backgrounds untuk visual menarik
- Responsive design untuk semua device
- Glass-morphism effects
- Reveal animations on scroll

## Cara Mengganti Gambar

### Gambar Saat Ini (Placeholder dari Unsplash)
Semua gambar saat ini menggunakan placeholder dari Unsplash untuk demo.

### Mengganti dengan Gambar Asli

**Cara 1: Gunakan Path Lokal**
1. Upload foto musholla ke folder `assets/img/musholla/`
2. Nama file:
   - `hero.jpg` - Hero image
   - `tampak_depan.jpg` - Galeri depan
   - `tampak_samping.jpg` - Galeri samping
   - `tampak_dalam.jpg` - Galeri dalam
3. Edit `explore_musholla.html`, cari baris dengan `src="https://images.unsplash.com/..."`
4. Ganti dengan `src="assets/img/musholla/[nama_file].jpg"`

**Cara 2: Gunakan URL Online**
1. Upload foto ke hosting (Google Drive, Imgur, dll)
2. Copy link langsung ke gambar
3. Ganti URL di file HTML

### Virtual Tour 360°
Untuk implementasi penuh virtual tour 360°:
1. Ambil foto panorama 360° dengan kamera khusus
2. Upload ke `assets/img/musholla_360.jpg`
3. Gunakan library seperti Photo Sphere Viewer atau Pannellum
4. Integrasi ke section virtual tour

## Navigasi

### Dari Menu Navbar
- Menu Explore → Musholla (link langsung ke `explore_musholla.html`)

### Dari Homepage
- Card "Musholla ITBRP" di section Explore (link langsung)

## Testing

### Checklist Testing
- [ ] Halaman terbuka tanpa error
- [ ] Navbar berfungsi dengan baik
- [ ] Breadcrumb navigation bekerja
- [ ] Hero image tampil dengan baik
- [ ] Tabel informasi tampil lengkap
- [ ] Deskripsi mudah dibaca
- [ ] Galeri foto tampil semua (3 foto)
- [ ] Hover effects berfungsi
- [ ] Virtual tour modal buka/tutup dengan baik
- [ ] Responsive di mobile, tablet, desktop
- [ ] Footer tampil dengan baik
- [ ] Animasi scroll berfungsi
- [ ] Semua link berfungsi

## Struktur Code

### HTML Structure
```
- Navbar (imported from navbar.js)
- Breadcrumbs
- Hero Section
- Main Content
  - Information Table
  - Description
  - Gallery (3 images)
  - Virtual Tour 360°
- Footer
- Virtual Tour Modal
- JavaScript (animations & modal)
```

### CSS Classes
- Menggunakan Tailwind CSS utility classes
- Custom animations dari `landing.css`
- Inline custom styles untuk specific effects

## Kustomisasi untuk Junior Programmer

### Mengubah Teks
1. Buka `explore_musholla.html`
2. Cari section yang ingin diubah (cari berdasarkan heading)
3. Edit text di dalam tag HTML
4. Save dan refresh browser

### Mengubah Warna
1. Cari class `from-[#BE1A1A]` atau `from-[#1B4EF5]`
2. Ganti dengan hex color baru
3. Pastikan konsisten di seluruh halaman

### Menambah Foto ke Galeri
1. Copy paste block gallery card
2. Ganti URL gambar
3. Ganti alt text dan deskripsi
4. Sesuaikan grid jika perlu

### Mengubah Informasi Tabel
1. Cari section `<table>`
2. Edit row `<tr>` yang ingin diubah
3. Format: kolom kiri (label), kolom kanan (value)

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies
- Tailwind CSS CDN
- Google Fonts (Inter)
- Custom CSS (`landing.css`)
- Navbar component (`navbar.js`)

## Future Improvements
1. Implementasi real 360° virtual tour dengan library
2. Integrasi dengan backend untuk data dinamis
3. Tambah fitur booking/jadwal sholat
4. Tambah testimoni pengguna
5. Tambah peta lokasi interaktif
6. Dark mode toggle
