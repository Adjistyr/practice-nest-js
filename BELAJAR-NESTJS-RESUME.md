# Resume — Sesi Belajar NestJS

> Tempel isi file ini ke chat baru (Warp) buat lanjut. Format: jelasin-dulu-baru-praktek, dengan kuis dari kode project sendiri (user ngoding manual).

## Siapa & gaya belajar
- User belajar NestJS sambil ngoding manual (bukan generate).
- **Masih pemula JavaScript/OOP** — ini akar utama kebingungan, bukan NestJS-nya.
- Gaya: **jelasin konsep dulu, baru praktek**. Suka dikuis pakai kode dari project sendiri.
- Minta ditantang & dikoreksi tegas, tanpa basa-basi.

## Project
- NestJS 11 + TypeORM + class-validator + Postgres.
- Module yang ada: `products`, `partners`, `user`, `cats`. Pola controller-tipis/service-tebal sudah benar.
- DB config di `src/app.module.ts` (`forRoot`, `synchronize: true`, kredensial hardcoded — catatan buat nanti, belum dibahas).

## Yang sudah dibahas (Level 1 — Konsep Inti) ✅
Kuis 5 soal (DI, providers, exports antar-module, controller vs service, @InjectRepository). Hasil koreksi:

1. **DI** — user tadinya nggak tahu class harus di-`new` jadi instance. Sudah dijelaskan: class=cetakan → `new`=instance → constructor minta bahan → **NestJS yang `new` & suntik untuk kamu** = Dependency Injection.
2. **providers** ✅ paham — hapus dari `providers` = error resolve dependency saat startup.
3. **exports/imports antar-module** ⚠️ tadinya bingung. Sudah dijelaskan: `providers` privat ke module-nya; module lain butuh service → wajib `exports` di module asal + `imports` di module tujuan.
4. **controller vs service** (tadinya di-skip) — Controller urus HTTP, Service urus logika+DB. Dipisah biar reusable & gampang di-test = separation of concerns.
5. **@InjectRepository / forFeature** ✅ paham konsep. Diluruskan: `Repository<Product>` = *tipe/bahan*; yang *nyerahin* objeknya = **NestJS** (dibikinin TypeORM), bukan database langsung. Beda `forRoot` (koneksi global, sekali) vs `forFeature` (daftar entity per-module).

## Konsep fondasi yang sudah dikunci (class/instance/constructor/this)
Dibedah pakai `ProductsService` asli + analogi "cetakan → barang → bahan":
- **class** = cetakan (nggak bisa kerja sendiri). `ProductsService.findAll()` (pakai nama class) = ❌ error.
- **instance** = hasil `new`. Method dipanggil lewat instance (`this.xxx` / `service.xxx`) = ✅.
- **`this`** = si barang nyata yang lagi hidup saat request masuk.
- **constructor** = tempat minta "bahan" wajib. `private productRepo` = shortcut TS (terima + simpan ke `this.productRepo` sekaligus).
- **"apa bahannya" (tipe) vs "siapa nyediain" (NestJS)** — user sempat ketuker, sudah diluruskan.

## SEDANG BERJALAN: latihan kode kecil (belum diselesaikan user)
User diminta bikin `latihan.js` (JS polos, `node latihan.js`) buat ngerasain `new`/`this`/constructor tanpa NestJS. Isi tugasnya:

```js
// BAGIAN A: repo mini
class ProductRepo {
  constructor() { this.products = []; }
  save(product) { this.products.push(product); return product; }
  findAll() { return this.products; }
}

// BAGIAN B: service yang butuh repo sebagai bahan
class ProductService {
  // TODO 1: constructor minta `repo`, simpan ke this.repo
  create(name) { /* TODO 2: this.repo.save({ name }) */ }
  findAll() { /* TODO 3: return this.repo.findAll() */ }
}

// BAGIAN C: user jadi "NestJS" — cetak & sambungin manual
// TODO 4: new ProductRepo()
// TODO 5: new ProductService(repo)   <-- inti: nyerahin bahan
// TODO 6: service.create(...) 2x
// TODO 7: console.log(service.findAll())
```
Target output: `[ { name: 'Kopi' }, { name: 'Teh' } ]`
Poin yang harus dirasakan: TODO 5 = user jadi NestJS (nyerahin bahan); coba sengaja `ProductService.findAll()` buat lihat error nama-class-vs-instance.

## LANGKAH BERIKUTNYA
1. User selesaikan `latihan.js`, paste kode + output → dikoreksi.
2. Setelah itu → **Level 2: Request lifecycle — DTO, Validation (class-validator), Pipes**. Kuis lagi dari kode `dto/` & controller yang sudah ada.
3. Antrian topik urut: Konsep inti (✅) → DTO/Validation → Database/TypeORM (relasi, migration) → dst.

## Aturan gaya (penting)
- Balas dalam Bahasa Indonesia.
- Jangan lanjut ke topik baru sebelum fondasi OOP kerasa nempel.
- Kuis pakai kode project user, bukan contoh generik.
- Koreksi tegas, tunjuk baris kode spesifik.
