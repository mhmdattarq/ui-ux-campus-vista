# Panduan Pengelolaan Asset Gambar Musholla

## Lokasi File Gambar

Semua gambar untuk halaman Musholla ITBRP disimpan di direktori berikut:

```
/assets/img/musholla/
├── hero.jpg              - Foto hero utama musholla
├── tampak_depan.jpg      - Foto tampak depan musholla
├── tampak_samping.jpg    - Foto tampak samping musholla
└── tampak_dalam.jpg      - Foto tampak dalam musholla

/assets/img/
└── musholla_360.jpg      - Gambar panorama 360° musholla
```

## Cara Mengganti Gambar

### 1. Untuk Gambar Biasa (Hero & Gallery)

Untuk mengganti gambar hero dan galeri:
1. Siapkan foto baru dengan format JPG atau PNG
2. Rename file sesuai dengan nama yang ada di atas
3. Upload file ke direktori `/assets/img/musholla/`
4. File akan otomatis terupdate di website

### 2. Untuk Gambar Virtual Tour 360°

Untuk mengganti gambar panorama 360°:
1. Siapkan foto panorama 360° dengan format JPG
2. Disarankan resolusi minimal: 4096 x 2048 px
3. Rename file menjadi `musholla_360.jpg`
4. Upload ke direktori `/assets/img/`

## Spesifikasi Gambar yang Disarankan

### Hero Image (hero.jpg)
- Format: JPG atau PNG
- Resolusi: 1920 x 1080 px atau lebih tinggi
- Rasio: 16:9
- Ukuran file: Maksimal 2MB

### Gallery Images (tampak_depan, tampak_samping, tampak_dalam)
- Format: JPG atau PNG
- Resolusi: 1200 x 800 px atau lebih tinggi
- Rasio: 3:2
- Ukuran file: Maksimal 1MB per foto

### Virtual Tour 360°
- Format: JPG
- Resolusi: Minimal 4096 x 2048 px (untuk kualitas HD)
- Rasio: 2:1 (equirectangular projection)
- Ukuran file: Maksimal 5MB

## Edit Manual di HTML (Jika Diperlukan)

Jika ingin mengubah path atau nama file secara manual, edit file `explore_musholla.html` pada baris berikut:

**Hero Image** - Sekitar baris 168:
```html
<img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&h=600&fit=crop" 
     alt="Musholla ITBRP Front View">
```

**Gallery Images** - Sekitar baris 348-382:
```html
<!-- Tampak Depan -->
<img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&h=500&fit=crop">

<!-- Tampak Samping -->
<img src="https://images.unsplash.com/photo-1566885769339-15f93f840f3e?q=80&w=800&h=500&fit=crop">

<!-- Tampak Dalam -->
<img src="https://images.unsplash.com/photo-1555824954-42d264937746?q=80&w=800&h=500&fit=crop">
```

Ganti URL dengan path lokal:
```html
<img src="assets/img/musholla/tampak_depan.jpg" alt="Tampak Depan Musholla">
<img src="assets/img/musholla/tampak_samping.jpg" alt="Tampak Samping Musholla">
<img src="assets/img/musholla/tampak_dalam.jpg" alt="Tampak Dalam Musholla">
```

## Tips Pengambilan Foto 360°

1. Gunakan kamera 360° (Ricoh Theta, Insta360, dll)
2. Posisikan kamera di tengah ruangan
3. Pastikan pencahayaan merata
4. Hindari bayangan fotografer
5. Export dalam format equirectangular
6. Compress gambar jika terlalu besar (gunakan tools online seperti TinyJPG)

## Troubleshooting

**Q: Gambar tidak muncul setelah di-upload**
A: Pastikan nama file dan path sudah benar. Clear cache browser dengan Ctrl+F5.

**Q: Gambar tampil pecah/blur**
A: Gunakan gambar dengan resolusi lebih tinggi sesuai spesifikasi di atas.

**Q: Virtual tour 360° tidak smooth**
A: Pastikan ukuran file tidak terlalu besar. Compress gambar ke ukuran maksimal 5MB.
