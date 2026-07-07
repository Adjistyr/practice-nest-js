# Resume — Belajar JavaScript Core (Fondasi Fullstack)

> Tempel isi file ini ke chat baru (Warp/Claude) buat lanjut sesi belajar.
> Doc ini menggantikan `BELAJAR-NESTJS-RESUME.md` untuk **fase fondasi JS**.
> `BELAJAR-NESTJS-RESUME.md` sekarang stale/kesempitan (NestJS-only) — rujuk balik
> nanti pas sudah masuk NestJS lagi.

## Siapa & gaya belajar
- User **pemula JavaScript/OOP**, tapi **fullstack** (frontend + backend).
  **Jangan terpaku ke NestJS/backend** — materi harus kepakai juga di frontend (React).
- Gaya: **jelasin konsep dulu, baru praktek**. Suka format kuis/soal.
- Minta **dikoreksi tegas, tunjuk baris kode spesifik**, tanpa basa-basi.
- **Balas dalam Bahasa Indonesia.**

## Metode belajar (gaya jschallenger, gratis, buatan sendiri)
User suka jschallenger.com tapi berbayar mulai materi Boolean. Jadi dibikin sendiri.
**Tiap topik = 2 file, alur 3 bagian (WAJIB urut ini — diminta user eksplisit):**

1. **Materi** — `NN-topik.md`: penjelasan konsep + **tabel perbedaan** (mis. `let` vs
   `const`, `==` vs `===`). Penjelasan DULU, sebelum coding.
2. **Kuis Pilihan Ganda** — masih di `.md`: 4–5 soal PG buat validasi paham materi.
   Jawaban disembunyikan pakai `<details><summary>▶ Jawaban</summary>` → user pilih dulu,
   baru buka buat cek (self-check ala jschallenger, native markdown, nol setup).
3. **Coding Test-Run** — `NN-topik.js`: isi **satu fungsi utuh** per soal, jalankan
   `node latihan/NN-topik.js`, tiap soal cetak `PASS ✅ / FAIL ❌` sendiri (blok `assert`).

Setelah coding: user paste kode + output → agent koreksi tegas. Lolos semua PASS **dan**
bisa jelasin ulang konsep → baru lanjut topik berikutnya.

Runner coding: `node latihan/xx.js`. Nol setup (`assert` bawaan Node). Logika murni, tanpa DOM.

## Aturan (penting — jangan dilanggar)
- **Jangan loncat topik** sebelum fondasi nempel.
- **Nama fungsi/variabel konsisten dalam satu file** (pelajaran dari bug `latihan2.js`
  yang campur `save`/`add`, `semua`/`getAll`, typo `tittle`).
- Tiap test: **happy path + minimal 2 edge case** (kosong, negatif/nol, tipe pinggiran).
- Soal dibikin **dua rasa bergantian**: backend (service/repo) & frontend (transform data
  buat render list, format harga, filter UI) — biar kerasa dua-duanya, konsep sama.
- **Jangan bikin semua file sekaligus** — satu file per sesi, tunggu user kelar.
- Detail format baku ada di `latihan/00-cara-pakai.md`.

## Kurikulum & progress
Fokus: core JS netral FE/BE. Update kolom **Status** tiap sesi.

| # | File | Topik | Status |
|---|------|-------|--------|
Tiap topik `NN` = `NN-topik.md` (materi + kuis PG) + `NN-topik.js` (coding).

| # | Topik | Status |
|---|-------|--------|
| 00 | `00-cara-pakai.md` — aturan main + alur 3 bagian | ✅ ada |
| 01 | Variabel, tipe, truthy/falsy, `===` | ✅ `.md`+`.js` ada · ⬜ belum dikerjakan user |
| 02 | Array method: map/filter/find/reduce | ⬜ belum dibuat |
| 03 | Object, destructuring, spread/immutability | ⬜ belum dibuat |
| 04 | Function: arrow vs function, `this`, higher-order/callback | ⬜ belum dibuat |
| 05 | Class/`new`/`this`/constructor (basis `latihan.js`) | ⬜ belum dibuat |
| 06 | Manual DI: repo+service disambung manual | ⬜ belum dibuat |
| 07 | Async: Promise, async/await (fetch FE & repo.save BE) | ⬜ belum dibuat |
| 08 | ES module import/export | ⬜ belum dibuat |

Catatan: `latihan.js` (LANGKAH 1–3, sudah benar & jalan) = latihan lama user yang bener,
dipakai ulang jadi basis `05`/`06`. `latihan2.js` rusak → bahan latihan "cari bug" sekali,
lalu stop diteruskan.

## Fase 2 (nanti): JavaScript → TypeScript
Alasan: React & NestJS dua-duanya TypeScript; JS core cuma batu loncatan.
Setelah `01..08` lolos, lanjut folder `latihan-ts/` (format & runner sama, pakai
`npx ts-node latihan-ts/xx.ts`). Urutan topik:

1. Tipe dasar + inferensi (`string`/`number`/`boolean`/`array`/`tuple`)
2. `interface` vs `type` — bentuk object/DTO/props React
3. Function typing — param, return, optional, default
4. Union & narrowing (`string | null`, guard)
5. Generics — `Array<T>`, `Promise<T>`, `Repository<T>` (TypeORM & util FE)
6. Class + access modifier (`private`/`readonly`)
7. Enum & literal types
8. Decorator + `tsconfig` dasar — jembatan ke `@Injectable`/`@Controller` NestJS

Detail latihan TS di-breakdown belakangan. Sekarang cukup arah, jangan dibuat dulu.
