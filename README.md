# Organisasi Kepemudaan Dusun Kesamben — Web

Frontend React (Vite) + Firebase (Auth, Firestore, Storage). Hosting gratis via GitHub Pages.

## Setup Cepat
1. `npm install`
2. Edit `src/firebase/index.js` dengan config Firebase kamu
3. Ubah `vite.config.js` `base` ke nama repo GitHub Pages kamu
4. Jalankan lokal: `npm run dev`
5. Deploy: `npm run deploy`

## Koleksi Firestore
- `settings/umum`: { namaOrganisasi, deskripsi, visi, misi, footer, kontak, logoUrl, bannerUrl }
- `galeri/*`: { judul, kategori, url, path, createdAt }
- `kegiatan/*`: { nama, tanggal, lokasi }

## Admin Settings
Halaman: `/admin/settings` untuk ubah teks, logo, dan banner.

## Lisensi
MIT
