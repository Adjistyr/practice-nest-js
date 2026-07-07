# 01 — Variabel & Tipe

Alur: **baca Materi → kerjakan Kuis pilihan ganda (cek jawaban di spoiler) → baru buka
`01-variabel-tipe.js` buat coding test-run.** Jangan loncat ke coding sebelum kuis PG kelar.

---

## Materi

### 1. Variabel: `const` vs `let` (lupakan `var`)
Variabel = wadah bernama buat nyimpan nilai.

- **`const`** — wadah yang **tidak bisa di-assign ulang**. Default pakai ini.
- **`let`** — wadah yang **boleh di-assign ulang**. Pakai kalau nilainya memang berubah.
- **`var`** — cara lama, punya jebakan scope. **Jangan dipakai.**

```js
const nama = 'Budi';
nama = 'Andi';   // ❌ error: Assignment to constant variable
let umur = 20;
umur = 21;       // ✅ boleh
```

> Gotcha: `const` pada object/array = **referensinya** yang dikunci, isinya masih bisa diubah.
> `const arr = []; arr.push(1)` → ✅ boleh. `arr = [1]` → ❌ error. (Dibahas dalam di topik object.)

### 2. Tipe data
Dua kelompok:

| Kelompok | Tipe | Contoh |
|---|---|---|
| **Primitive** | `string` | `'halo'`, `"x"`, `` `t` `` |
| | `number` | `5`, `3.14`, `-2` (int & desimal sama-sama number) |
| | `boolean` | `true`, `false` |
| | `undefined` | variabel belum diisi |
| | `null` | sengaja dikosongkan |
| **Object** | `object` | `{}`, `[]` (array juga object), fungsi |

Cek tipe pakai operator **`typeof`**: `typeof 5` → `'number'`.

> Gotcha terkenal: `typeof null` → `'object'` (bug bersejarah JS, hafalin aja).

### 3. Truthy / Falsy
Di kondisi (`if`, `Boolean(...)`), tiap nilai dianggap "benar" (truthy) atau "salah" (falsy).

**Yang FALSY cuma 6:** `false`, `0`, `''` (string kosong), `null`, `undefined`, `NaN`.
**Selain itu semua TRUTHY** — termasuk `'0'`, `'false'`, `[]`, `{}`.

Dipakai tiap hari di frontend: `if (!input) { tampilkan error }`.

### 4. `==` vs `===`
- **`===` (strict)** — sama nilai **DAN** sama tipe. **Selalu pakai ini.**
- **`==` (loose)** — maksa konversi tipe dulu → sumber bug. **Hindari.**

| Ekspresi | `==` | `===` |
|---|---|---|
| `1 == '1'` / `1 === '1'` | `true` 😱 | `false` ✅ |
| `0 == false` / `0 === false` | `true` 😱 | `false` ✅ |
| `null == undefined` / `null === undefined` | `true` | `false` |

---

## Kuis Pilihan Ganda

Pilih dulu di kepala, baru buka spoiler `▶ Jawaban` buat cek. Jangan ngintip duluan.

**Q1.** Mana deklarasi yang menyebabkan **error** saat di-assign ulang?
- A. `let x = 1; x = 2;`
- B. `const x = 1; x = 2;`
- C. `let x = 1; x = x + 1;`
- D. Tidak ada yang error

<details><summary>▶ Jawaban</summary>

**B.** `const` tidak boleh di-assign ulang. A & C pakai `let` → boleh.
</details>

**Q2.** `typeof null` menghasilkan?
- A. `'null'`
- B. `'undefined'`
- C. `'object'`
- D. `'boolean'`

<details><summary>▶ Jawaban</summary>

**C.** `'object'` — jebakan bersejarah JS. `null` secara makna "kosong", tapi `typeof`-nya `'object'`.
</details>

**Q3.** Mana yang **FALSY**?
- A. `'0'`
- B. `[]`
- C. `0`
- D. `'false'`

<details><summary>▶ Jawaban</summary>

**C.** Angka `0` falsy. `'0'`, `[]`, `'false'` semuanya **truthy** (string berisi & array = truthy).
</details>

**Q4.** Hasil `1 === '1'` dan `1 == '1'`?
- A. `true` dan `true`
- B. `false` dan `true`
- C. `true` dan `false`
- D. `false` dan `false`

<details><summary>▶ Jawaban</summary>

**B.** `===` cek tipe → `false` (number vs string). `==` maksa konversi → `true`. Makanya pakai `===`.
</details>

**Q5.** `Boolean('')` menghasilkan?
- A. `true`
- B. `false`
- C. `''`
- D. error

<details><summary>▶ Jawaban</summary>

**B.** String kosong `''` termasuk 6 nilai falsy → `false`.
</details>

---

## Coding Test-Run

Sudah paham materi + lolos kuis? Lanjut:

```bash
node latihan/01-variabel-tipe.js
```

Isi tiap `>>> TULIS DI SINI <<<`, jalankan sampai semua soal `PASS ✅`, lalu paste
kode + output ke chat buat dikoreksi.
