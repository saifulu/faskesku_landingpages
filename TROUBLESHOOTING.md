# 🔧 TROUBLESHOOTING INTERNAL SERVER ERROR

## ⚠️ Masalah: Internal Server Error (500)

Jika Anda masih mendapat error 500 bahkan tanpa .htaccess, kemungkinan masalahnya di **konfigurasi server**, bukan di kode.

---

## 🧪 LANGKAH TROUBLESHOOTING

### File Baru: faskesku-v3-troubleshoot.zip

Saya sudah buat versi baru dengan file testing. Upload file ini dan ikuti langkah berikut:

### STEP 1: Test File HTML Sederhana

1. Upload `faskesku-v3-troubleshoot.zip`
2. Extract di `public_html`
3. Buka: `http://yourdomain.com/test.html`

**Jika test.html BERHASIL:**
- ✅ Server bisa menampilkan HTML
- ❌ Masalah ada di file `index.html` atau folder `_next`

**Jika test.html GAGAL (Error 500):**
- ❌ Masalah di konfigurasi server
- Lanjut ke STEP 2

---

### STEP 2: Test PHP

Buka: `http://yourdomain.com/phpinfo.php`

**Jika phpinfo.php BERHASIL:**
- ✅ PHP berfungsi
- Server mungkin mencoba menjalankan .html sebagai PHP
- Lanjut ke STEP 3

**Jika phpinfo.php GAGAL:**
- ❌ PHP tidak berfungsi atau diblokir
- Hubungi hosting provider

---

### STEP 3: Cek Error Log

Di cPanel:
1. Buka **Metrics** → **Errors**
2. Atau **File Manager** → cari file `error_log`
3. Screenshot error yang muncul

Error log akan memberitahu **penyebab pasti** error 500.

---

## 🔍 KEMUNGKINAN PENYEBAB & SOLUSI

### 1. Server Mencoba Menjalankan HTML sebagai PHP

**Gejala:**
- test.html error 500
- phpinfo.php berhasil

**Solusi:**
Tambahkan file `.htaccess` dengan isi:
```apache
AddType text/html .html
RemoveHandler .html
```

---

### 2. Permission File Salah

**Gejala:**
- Error "Permission denied" di error log

**Solusi:**
Set permission yang benar:
```bash
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

---

### 3. Folder _next Tidak Bisa Diakses

**Gejala:**
- index.html muncul tapi blank/error
- Browser console error: "Failed to load resource"

**Solusi:**
1. Cek permission folder `_next` (harus 755)
2. Pastikan folder `_next` ada di root public_html
3. Cek apakah ada file `.htaccess` di parent directory yang memblokir

---

### 4. Server Configuration Issue

**Gejala:**
- Semua file error 500
- Error log kosong

**Solusi:**
Kemungkinan masalah di server configuration (Apache/Nginx). Hubungi hosting provider dengan info:
- "Static HTML files returning 500 error"
- "Need to disable PHP execution for .html files"
- "Need to allow access to _next directory"

---

## 📞 INFO UNTUK HOSTING PROVIDER

Jika harus hubungi hosting provider, berikan info ini:

```
Saya mengupload static HTML website (Next.js export) tapi mendapat error 500.

File yang diupload:
- index.html (static HTML)
- Folder _next/ (JavaScript dan CSS)
- Tidak ada file PHP atau server-side code

Yang sudah dicoba:
- Upload tanpa .htaccess → masih error 500
- Test file HTML sederhana → [berhasil/gagal]
- Cek permission file (644) dan folder (755) → sudah benar

Request:
- Mohon cek konfigurasi server untuk static HTML files
- Pastikan folder _next/ bisa diakses
- Disable PHP execution untuk .html files jika perlu
```

---

## 🎯 QUICK FIX: Gunakan Subdomain

Jika domain utama masih error, coba:

1. Buat **subdomain** baru (misal: `app.yourdomain.com`)
2. Upload file ke folder subdomain
3. Test apakah subdomain berfungsi

Kadang subdomain punya konfigurasi berbeda yang lebih permisif.

---

## 🚀 ALTERNATIF: Deploy ke Platform Lain

Jika hosting bermasalah, coba deploy ke:

### 1. Vercel (GRATIS & MUDAH) ⭐ RECOMMENDED
```bash
npm install -g vercel
vercel login
vercel
```

### 2. Netlify (GRATIS)
- Drag & drop folder `out` ke netlify.com/drop

### 3. GitHub Pages (GRATIS)
- Push folder `out` ke GitHub
- Enable GitHub Pages di repository settings

---

## 📋 CHECKLIST TROUBLESHOOTING

- [ ] Upload faskesku-v3-troubleshoot.zip
- [ ] Test: yourdomain.com/test.html
- [ ] Test: yourdomain.com/phpinfo.php
- [ ] Cek error log di cPanel
- [ ] Screenshot error untuk developer
- [ ] Coba subdomain jika perlu
- [ ] Hubungi hosting provider dengan info lengkap

---

**Jika sudah test semua, beri tahu saya hasilnya:**
1. Apakah test.html berhasil?
2. Apakah phpinfo.php berhasil?
3. Apa isi error log?

Saya akan bantu troubleshoot lebih lanjut! 🔧
