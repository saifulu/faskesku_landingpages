# 🚀 Panduan Deploy FASKESKU ke aaPanel

## 📋 Persiapan

### 1. **Requirement Server (aaPanel)**
- ✅ Node.js 18.x atau lebih tinggi
- ✅ PM2 (Process Manager)
- ✅ Nginx (Web Server)
- ✅ Domain yang sudah pointing ke server

---

## 🔧 Langkah-Langkah Deploy

### **STEP 1: Install Node.js di aaPanel**

1. Login ke **aaPanel** (`http://your-server-ip:7800`)
2. Pergi ke **App Store**
3. Cari dan install **Node.js Version Manager (NVM)**
4. Install **Node.js 18.x** atau **20.x**
5. Verifikasi instalasi:
   ```bash
   node -v
   npm -v
   ```

---

### **STEP 2: Install PM2**

1. Buka **Terminal** di aaPanel atau SSH ke server
2. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```
3. Verifikasi:
   ```bash
   pm2 -v
   ```

---

### **STEP 3: Persiapkan Directory Website**

1. Di aaPanel, buat **Website** baru:
   - Klik **Website** → **Add Site**
   - Domain: `faskesku.id` (atau domain Anda)
   - Root Directory: `/www/wwwroot/faskesku.id`
   - PHP Version: **Pure Static** atau **None**

2. Catat path directory website Anda, contoh:
   ```
   /www/wwwroot/faskesku.id
   ```

---

### **STEP 4: Upload Code ke Server**

#### **Opsi A: Via Git (Recommended)**

1. SSH ke server atau gunakan Terminal aaPanel
2. Masuk ke directory website:
   ```bash
   cd /www/wwwroot/faskesku.id
   ```

3. Clone repository dari GitHub:
   ```bash
   git clone https://github.com/saifulu/faskesku_landingpages.git .
   ```
   
   Atau jika sudah ada, pull update terbaru:
   ```bash
   git pull origin saiful
   ```

#### **Opsi B: Via FTP/SFTP**

1. Gunakan FileZilla atau WinSCP
2. Connect ke server dengan kredensial aaPanel
3. Upload semua file ke `/www/wwwroot/faskesku.id`

---

### **STEP 5: Install Dependencies**

1. Masuk ke directory website:
   ```bash
   cd /www/wwwroot/faskesku.id
   ```

2. Install dependencies:
   ```bash
   npm install
   # atau
   npm ci --production
   ```

---

### **STEP 6: Build Production**

1. Build aplikasi Next.js:
   ```bash
   npm run build
   ```

2. Tunggu hingga proses build selesai (biasanya 1-3 menit)

3. Verifikasi folder `.next` sudah terbuat:
   ```bash
   ls -la .next
   ```

---

### **STEP 7: Setup PM2**

1. Buat file `ecosystem.config.js` di root project:
   ```bash
   nano ecosystem.config.js
   ```

2. Isi dengan konfigurasi berikut:
   ```javascript
   module.exports = {
     apps: [{
       name: 'faskesku',
       script: 'npm',
       args: 'start',
       cwd: '/www/wwwroot/faskesku.id',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   }
   ```

3. Save file (Ctrl+X, Y, Enter)

4. Start aplikasi dengan PM2:
   ```bash
   pm2 start ecosystem.config.js
   ```

5. Verifikasi aplikasi berjalan:
   ```bash
   pm2 status
   pm2 logs faskesku
   ```

6. Setup PM2 auto-start saat server reboot:
   ```bash
   pm2 startup
   pm2 save
   ```

---

### **STEP 8: Konfigurasi Nginx di aaPanel**

1. Di aaPanel, pergi ke **Website** → Pilih site `faskesku.id`
2. Klik **Settings** → **Config File**
3. Edit konfigurasi Nginx, ganti dengan:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name faskesku.id www.faskesku.id;
    
    # Redirect HTTP to HTTPS (setelah SSL aktif)
    # return 301 https://$server_name$request_uri;

    # Logs
    access_log /www/wwwlogs/faskesku.id.log;
    error_log /www/wwwlogs/faskesku.id.error.log;

    # Proxy ke Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location /_next/static {
        proxy_pass http://127.0.0.1:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Images caching
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
}
```

4. **Save** konfigurasi
5. **Reload Nginx**:
   ```bash
   nginx -t
   nginx -s reload
   ```

---

### **STEP 9: Setup SSL (HTTPS)**

1. Di aaPanel, pergi ke **Website** → Pilih site `faskesku.id`
2. Klik **SSL** → **Let's Encrypt**
3. Centang domain dan www subdomain
4. Klik **Apply**
5. Tunggu hingga SSL certificate terinstall
6. Enable **Force HTTPS**

Atau via Terminal:
```bash
# Install Certbot
apt install certbot python3-certbot-nginx -y

# Generate SSL
certbot --nginx -d faskesku.id -d www.faskesku.id
```

---

### **STEP 10: Testing & Verifikasi**

1. **Test aplikasi berjalan**:
   ```bash
   curl http://localhost:3000
   ```

2. **Test via domain**:
   - Buka browser: `http://faskesku.id`
   - Atau: `https://faskesku.id` (jika SSL sudah aktif)

3. **Check PM2 status**:
   ```bash
   pm2 status
   pm2 logs faskesku --lines 50
   ```

4. **Monitor resource**:
   ```bash
   pm2 monit
   ```

---

## 🔄 Update Website (Deploy Update)

Setiap kali ada perubahan code:

```bash
# 1. Masuk ke directory
cd /www/wwwroot/faskesku.id

# 2. Pull update dari GitHub
git pull origin saiful

# 3. Install dependencies baru (jika ada)
npm install

# 4. Build ulang
npm run build

# 5. Restart PM2
pm2 restart faskesku

# 6. Check logs
pm2 logs faskesku --lines 20
```

---

## 🛠️ Troubleshooting

### **Problem: Port 3000 sudah digunakan**
```bash
# Cari process yang menggunakan port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Atau gunakan port lain di ecosystem.config.js
```

### **Problem: Build error**
```bash
# Clear cache
rm -rf .next node_modules package-lock.json

# Install ulang
npm install
npm run build
```

### **Problem: PM2 tidak start otomatis**
```bash
pm2 unstartup
pm2 startup
pm2 save
```

### **Problem: Nginx 502 Bad Gateway**
```bash
# Check PM2 status
pm2 status

# Restart aplikasi
pm2 restart faskesku

# Check Nginx error log
tail -f /www/wwwlogs/faskesku.id.error.log
```

---

## 📊 Monitoring & Maintenance

### **Check Logs**
```bash
# PM2 logs
pm2 logs faskesku

# Nginx access log
tail -f /www/wwwlogs/faskesku.id.log

# Nginx error log
tail -f /www/wwwlogs/faskesku.id.error.log
```

### **Resource Monitoring**
```bash
# PM2 monitoring
pm2 monit

# Server resources
htop
```

### **Backup**
```bash
# Backup database (jika ada)
# Backup files
tar -czf faskesku-backup-$(date +%Y%m%d).tar.gz /www/wwwroot/faskesku.id
```

---

## ✅ Checklist Deploy

- [ ] Node.js 18+ terinstall
- [ ] PM2 terinstall
- [ ] Code sudah di-clone/upload
- [ ] Dependencies terinstall (`npm install`)
- [ ] Build sukses (`npm run build`)
- [ ] PM2 berjalan (`pm2 status`)
- [ ] Nginx dikonfigurasi
- [ ] Domain sudah pointing
- [ ] SSL certificate aktif
- [ ] Website bisa diakses via domain
- [ ] PM2 auto-start enabled

---

## 🎯 Performance Tips

1. **Enable Gzip di Nginx**:
   ```nginx
   gzip on;
   gzip_vary on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
   ```

2. **Cache Static Files**:
   - Sudah dikonfigurasi di Nginx config di atas

3. **Use CDN** (Optional):
   - Cloudflare
   - BunnyCDN
   - AWS CloudFront

4. **Monitor dengan PM2 Plus** (Optional):
   ```bash
   pm2 link <secret> <public>
   ```

---

## 📞 Support

Jika ada masalah:
1. Check PM2 logs: `pm2 logs faskesku`
2. Check Nginx logs: `tail -f /www/wwwlogs/faskesku.id.error.log`
3. Restart services: `pm2 restart faskesku && nginx -s reload`

---

**Selamat! Website FASKESKU sudah live di production! 🎉**

Akses di: `https://faskesku.id`
