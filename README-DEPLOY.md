# 📦 FASKESKU Production - Ready to Deploy

## 🚀 Quick Deploy ke aaPanel

### 1. Upload File
- Upload `faskesku-production.zip` ke server via aaPanel File Manager
- Extract di `/www/wwwroot/faskesku.id`

### 2. Install Dependencies
```bash
cd /www/wwwroot/faskesku.id
npm install --production
```

### 3. Start dengan PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. Konfigurasi Nginx
Edit config Nginx di aaPanel → Website → Settings → Config File:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### 5. Done! ✅
Website bisa diakses di domain Anda.

---

## 📄 Isi File ZIP:
- ✅ `.next/` - Build production
- ✅ `public/` - Static files & images
- ✅ `src/` - Source code
- ✅ `package.json` - Dependencies
- ✅ `ecosystem.config.js` - PM2 config
- ✅ `DEPLOY-GUIDE.md` - Panduan lengkap

## 🔧 Troubleshooting:
Lihat file `DEPLOY-GUIDE.md` untuk panduan lengkap.

## 📞 Support:
- Check logs: `pm2 logs faskesku`
- Restart: `pm2 restart faskesku`
