This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
 
## Deploy Cepat di aaPanel (Static Export)

Jika konten bersifat statis (tanpa SSR/route dinamis), cara paling mudah adalah mengekspor situs statis dan mengunggah folder hasilnya ke aaPanel.

1) Build dan export secara lokal:

```bash
npm run build:static
```

Perintah ini membuat folder `out/` di root proyek.

2) Unggah ke aaPanel:
- Buat situs baru di aaPanel: Website → Add Site → masukkan domain kamu.
- Upload file ZIP dari folder `out/` atau unggah isi `out/` langsung ke document root domain (misal: `/www/wwwroot/namadomainkamu.com`).
- Pastikan file `index.html` berada di root.

3) Aktifkan SSL (opsional namun disarankan):
- Website → pilih domain → SSL → Let’s Encrypt → Apply.

Selesai. Situs langsung online tanpa perlu PM2/Node.

## Alternatif: Jalankan sebagai Aplikasi Node (PM2)

Jika kamu membutuhkan SSR atau fitur dinamis:

1) Install dependencies di server:
```bash
cd /www/wwwroot/faskesku
npm ci
```

2) Build dan start dengan PM2 (via aaPanel PM2 Manager):
- Build: `npm run build`
- PM2 → Add Project: Name: `faskesku`, Run Dir: `/www/wwwroot/faskesku`, Start Command: `npm run start`, Env: `NODE_ENV=production`, `PORT=3000`.

3) Nginx Reverse Proxy:
- Website → domain → Reverse Proxy → Target: `http://127.0.0.1:3000`.

Dengan opsi ini, Next.js berjalan sebagai server Node dan Nginx meneruskan trafik ke port 3000.
