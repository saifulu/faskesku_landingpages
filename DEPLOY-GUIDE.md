# PANDUAN DEPLOY FASKESKU

## 📦 File yang Tersedia

Saya telah membuat 2 versi deployment:

### 1. faskesku-v1-standard.zip (517 KB)
- Berisi file .htaccess dengan konfigurasi lengkap
- Cocok untuk Apache server
- Gunakan ini jika server mendukung .htaccess

### 2. faskesku-v2-no-htaccess.zip (516 KB) ⭐ RECOMMENDED
- TANPA file .htaccess
- Lebih aman, tidak menyebabkan Internal Server Error
- Cocok untuk semua jenis server
- **COBA INI DULU!**

---

## 🚀 CARA DEPLOY (Step by Step)

### Langkah 1: Persiapan
1. Login ke cPanel hosting Anda
2. Buka **File Manager**
3. Masuk ke folder `public_html` atau `www`
4. **HAPUS SEMUA FILE LAMA** di folder tersebut

### Langkah 2: Upload File
1. Upload file **faskesku-v2-no-htaccess.zip** ke folder `public_html`
2. Klik kanan pada file zip → **Extract**
3. Setelah extract, **HAPUS file zip**

### Langkah 3: Verifikasi Struktur
Pastikan struktur folder seperti ini:

```
public_html/
├── index.html          ← File utama (HARUS ADA!)
├── 404.html
├── _next/              ← Folder JavaScript (HARUS ADA!)
│   └── static/
│       ├── chunks/
│       ├── css/
│       └── media/
├── favicon.ico
├── bpjs-logo.png
├── satu-sehat-logo.png
└── ... (file lainnya)
```

⚠️ **PENTING**: File `index.html` dan folder `_next` HARUS ada di root `public_html`!

### Langkah 4: Set Permission (Opsional)
Jika masih error, set permission:
- Folder: 755
- File: 644

Di cPanel Terminal, jalankan:
```bash
cd public_html
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

### Langkah 5: Test
Buka domain Anda di browser: `http://yourdomain.com`

---

## ❌ Jika Masih Error 500

### Coba Versi dengan .htaccess Minimal:

1. Upload file **faskesku-v1-standard.zip**
2. Extract seperti langkah di atas
3. Di folder `public_html`, rename file:
   - `.htaccess-minimal` → `.htaccess`
4. Hapus file `.htaccess` yang lama
5. Test lagi

---

## 🔧 Troubleshooting

### Error 403 Forbidden
- Cek permission file (harus 644)
- Cek permission folder (harus 755)
- Pastikan ada file `index.html`

### Error 500 Internal Server Error
- Hapus file `.htaccess` (gunakan versi v2-no-htaccess)
- Cek error log di cPanel
- Hubungi hosting provider

### Halaman Blank / Tidak Muncul
- Cek apakah folder `_next` ada
- Cek browser console (F12) untuk error JavaScript
- Clear cache browser (Ctrl+F5)

### File CSS/JS Tidak Load
- Pastikan folder `_next/static` ada
- Cek permission folder `_next` (harus 755)

---

## 📞 Dukungan

Jika masih ada masalah:
1. Screenshot error yang muncul
2. Cek error log di cPanel → Metrics → Errors
3. Kirim info ke developer

---

## ✅ Checklist Deploy

- [ ] Hapus semua file lama di public_html
- [ ] Upload faskesku-v2-no-htaccess.zip
- [ ] Extract file zip
- [ ] Verifikasi index.html ada di root
- [ ] Verifikasi folder _next ada
- [ ] Hapus file zip
- [ ] Test di browser
- [ ] Clear cache browser jika perlu

---

**Dibuat**: 22 November 2024
**Versi**: 1.0
