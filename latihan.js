// =====================================================================
// CARA PAKAI:
// - Baca satu LANGKAH, jalanin `node latihan.js`, lihat hasilnya.
// - Kerjakan CUMA bagian yang ada tulisan  >>> ISI DI SINI <<<
// - Jangan pindah langkah sebelum langkah sebelumnya jalan.
// =====================================================================

// =====================================================================
// LANGKAH 1 — "class = cetakan, new = mencetak jadi barang"
// Bagian ini SUDAH JADI. Tugasmu: baca + jalanin, lihat outputnya.
// =====================================================================

class Kucing {
  constructor() {
    this.suara = 'meong'; // "this" = si kucing yang lagi dibikin
  }
}

const kucing1 = new Kucing(); // new = mencetak → dapat 1 barang nyata
console.log('LANGKAH 1 =>', kucing1.suara); // harusnya: meong

// -> Jalanin dulu: `node latihan.js`. Kalau muncul "meong", lanjut LANGKAH 2.

// =====================================================================
// LANGKAH 2 — "constructor bisa MINTA bahan dari luar"
// Beda dari Langkah 1: suaranya nggak dipatok, tapi DIKASIH dari luar.
// =====================================================================

class Hewan {
  constructor(hehe) {
    // minta 1 bahan namanya "suara"
    this.suara = hehe; // simpan bahan itu ke dalam diri sendiri
  }
}

// >>> ISI DI SINI <<<  (TODO A)
// Bikin instance Hewan, kasih bahan "guk guk", simpan ke variabel `anjing`.
// Pola:  const anjing = new Hewan( ...bahannya... );
const anjing = new Hewan('guk guk'); // ganti `null` ini

console.log('LANGKAH 2 =>', anjing ? anjing.suara : '(belum diisi)'); // target: guk guk

// =====================================================================
// LANGKAH 3 — "satu barang bisa jadi BAHAN buat barang lain"
// Ini inti Dependency Injection versi manual.
// =====================================================================

// Gudang: tempat nyimpen produk. SUDAH JADI, jangan diubah.
class ProductRepo {
  constructor() {
    this.products = [];
  }
  save(product) {
    this.products.push(product);
    return product;
  }
  findAll() {
    return this.products;
  }
}

// Service: dia NGGAK nyimpen sendiri, dia nyuruh si repo yang nyimpen.
class ProductService {
  constructor(repo) {
    // minta bahan "repo" (sebuah ProductRepo)
    this.repo = repo; // simpan biar bisa dipakai method di bawah
  }

  create(name) {
    return this.repo.save({ name });
    // >>> ISI DI SINI <<<  (TODO B)
    // suruh this.repo nyimpan { name }, lalu kembalikan hasilnya.
    // Pola:  return this.repo.save( ... );
  }

  findAll() {
    return this.repo.findAll(); // >>> ISI DI SINI <<<  (TODO C)
    // kembalikan semua produk lewat this.repo
  }
}

// --- Sekarang KAMU jadi "NestJS": cetak & sambungin manual ---

const repo = new ProductRepo(); // cetak gudang (SUDAH JADI)

// >>> ISI DI SINI <<<  (TODO D)
// cetak service, KASIH `repo` di atas sebagai bahannya.
// Pola:  const service = new ProductService( ... );
const service = new ProductService(repo); // ganti `null` ini

// >>> ISI DI SINI <<<  (TODO E)
// panggil service.create(...) DUA KALI: satu "Kopi", satu "Teh"
service.create('Kopi');
service.create('Teh');

console.log('LANGKAH 3 =>', service ? service.findAll() : '(belum diisi)');
// target: [ { name: 'Kopi' }, { name: 'Teh' } ]
