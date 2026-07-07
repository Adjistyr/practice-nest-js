// =====================================================================
// 01 — VARIABEL & TIPE  (jalanin: node latihan/01-variabel-tipe.js)
// Isi bagian >>> TULIS DI SINI <<<. Satu fungsi utuh per soal.
// JANGAN ubah blok TEST. Baca dulu latihan/00-cara-pakai.md.
// =====================================================================

const assert = require('node:assert'); // dipakai semua soal, cukup sekali di atas

// ========== SOAL 1 — typeof ==========
// Buat fungsi `tipeDari(nilai)` yang mengembalikan TIPE dari nilai sebagai string.
// Petunjuk: ada operator bawaan `typeof`.
// Contoh: tipeDari(5) -> 'number'   |   tipeDari('halo') -> 'string'
function tipeDari(nilai) {
  // >>> TULIS DI SINI <<<
}

// ---------- TEST (JANGAN diubah) ----------
try {
  assert.strictEqual(tipeDari(5), 'number');
  assert.strictEqual(tipeDari('halo'), 'string');
  assert.strictEqual(tipeDari(true), 'boolean');       // edge: boolean
  assert.strictEqual(tipeDari(undefined), 'undefined'); // edge: undefined
  console.log('SOAL 1: PASS ✅');
} catch (e) {
  console.log('SOAL 1: FAIL ❌ ->', e.message);
}

// ========== SOAL 2 — truthy / falsy ==========
// Buat fungsi `adaIsinya(nilai)` yang mengembalikan true kalau nilai "berisi"
// (truthy), dan false kalau "kosong" (falsy). Ini yang dipakai di frontend
// buat cek input: '' , 0 , null , undefined dianggap KOSONG.
// Petunjuk: paksa ke boolean pakai Boolean(...) atau tanda seru ganda (!!).
// Contoh: adaIsinya('budi') -> true   |   adaIsinya('') -> false
function adaIsinya(nilai) {
  // >>> TULIS DI SINI <<<
}

// ---------- TEST (JANGAN diubah) ----------
try {
  assert.strictEqual(adaIsinya('budi'), true);
  assert.strictEqual(adaIsinya(''), false);     // edge: string kosong = falsy
  assert.strictEqual(adaIsinya(0), false);      // edge: nol = falsy
  assert.strictEqual(adaIsinya(null), false);   // edge: null = falsy
  assert.strictEqual(adaIsinya(42), true);
  console.log('SOAL 2: PASS ✅');
} catch (e) {
  console.log('SOAL 2: FAIL ❌ ->', e.message);
}

// ========== SOAL 3 — strict equality (===) ==========
// Buat fungsi `samaPersis(a, b)` yang mengembalikan true HANYA kalau a dan b
// sama nilai DAN sama tipe. Pakai === (BUKAN ==). Ini kenapa penting:
// dengan ===, angka 1 dan string '1' TIDAK sama.
// Contoh: samaPersis(1, 1) -> true   |   samaPersis(1, '1') -> false
function samaPersis(a, b) {
  // >>> TULIS DI SINI <<<
}

// ---------- TEST (JANGAN diubah) ----------
try {
  assert.strictEqual(samaPersis(1, 1), true);
  assert.strictEqual(samaPersis(1, '1'), false);        // beda tipe → false
  assert.strictEqual(samaPersis(0, false), false);      // 0 vs false → false
  assert.strictEqual(samaPersis(null, undefined), false); // null vs undefined → false
  console.log('SOAL 3: PASS ✅');
} catch (e) {
  console.log('SOAL 3: FAIL ❌ ->', e.message);
}

// ========== SOAL 4 — VALIDASI (tanpa contoh output, buktikan paham) ==========
// Buat fungsi `labelStok(jumlah)` yang mengembalikan:
//   - 'habis'    jika jumlah === 0
//   - 'menipis'  jika jumlah kurang dari 5 (tapi bukan 0)
//   - 'aman'     selain itu
// Dipakai di FE (badge stok) & BE (validasi order). Pikirkan urutan cek-nya.
function labelStok(jumlah) {
  // >>> TULIS DI SINI <<<
}

// ---------- TEST (JANGAN diubah) ----------
try {
  assert.strictEqual(labelStok(0), 'habis');
  assert.strictEqual(labelStok(3), 'menipis');
  assert.strictEqual(labelStok(4), 'menipis');  // edge: batas bawah 'aman'
  assert.strictEqual(labelStok(5), 'aman');     // edge: tepat 5 = aman
  assert.strictEqual(labelStok(100), 'aman');
  console.log('SOAL 4: PASS ✅');
} catch (e) {
  console.log('SOAL 4: FAIL ❌ ->', e.message);
}
