# Cara Pakai Latihan

Tiap topik = **2 file** dengan alur ala jschallenger:

1. **`NN-topik.md`** — baca **Materi** dulu (penjelasan + tabel perbedaan), lalu kerjakan
   **Kuis Pilihan Ganda**. Pilih di kepala, baru buka spoiler `▶ Jawaban` buat cek diri.
2. **`NN-topik.js`** — baru **Coding Test-Run**: isi fungsi, jalankan, lihat PASS/FAIL.

## Alur detail
1. Buka `NN-topik.md` → baca Materi → jawab Kuis PG (cek via spoiler).
2. Buka `NN-topik.js` → isi bagian `>>> TULIS DI SINI <<<`. **Satu fungsi UTUH per soal.**
3. Jalankan: `node latihan/NN-topik.js`
4. Lihat output tiap soal: `PASS ✅` atau `FAIL ❌ -> <alasan>`.
5. Semua PASS → paste kode + output ke chat buat dikoreksi → lanjut topik berikutnya.

## Aturan
- **JANGAN ubah blok TEST.** Itu validasinya. Kamu cuma isi badan fungsi.
- **Jangan ganti nama fungsi** yang sudah dikasih. (Bug klasik: nama ketuker.)
- Kalau `FAIL`, baca pesannya — `assert.deepStrictEqual` nunjukin *expected vs actual*.
- Soal terakhir tiap file biasanya **soal validasi**: tanpa contoh output, buktikan paham.

## Template baku tiap soal
```js
// ========== SOAL 1 — <judul konsep> ==========
// <deskripsi tugas 1-2 kalimat>
// Contoh: doubleAll([1,2,3]) -> [2,4,6]
function doubleAll(nums) {
  // >>> TULIS DI SINI <<<
}

// ---------- TEST (JANGAN diubah) ----------
const assert = require('node:assert');
try {
  assert.deepStrictEqual(doubleAll([1, 2, 3]), [2, 4, 6]);   // happy path
  assert.deepStrictEqual(doubleAll([]), []);                 // edge: kosong
  assert.deepStrictEqual(doubleAll([-1, 0, 5]), [-2, 0, 10]); // edge: negatif/nol
  console.log('SOAL 1: PASS ✅');
} catch (e) {
  console.log('SOAL 1: FAIL ❌ ->', e.message);
}
```

## Kenapa `require('node:assert')` diulang tiap file?
Sengaja. Biar tiap file bisa dijalankan berdiri sendiri tanpa import helper.
Duplikasi kecil > ribet setup. (Di Node, `const` yang sama boleh dideklarasi sekali
per file — jadi taruh `const assert = require('node:assert')` di ATAS file, sekali saja,
lalu blok test tinggal pakai.)
