// =====================================================================
// KUIS — isi semua TODO. Jalanin: node latihan2.js
// Jangan ubah nama class / method. Cuma isi bagian TODO.
//
// TARGET OUTPUT (harus sama persis):
//   [ { title: 'Belajar' }, { title: 'Olahraga' } ]
// =====================================================================

// Gudang tugas.
class TaskRepo {
  constructor(task) {
    this.task = [];
    // TODO 1: siapkan tempat nyimpan tugas (kosong)
  }

  add(task) {
    this.task.push(task);
    return task;
    // TODO 2: masukkan task, lalu kembalikan task-nya
  }

  getAll() {
    return task();
    // TODO 3: kembalikan semua task
  }
}

// Service yang butuh TaskRepo sebagai bahan.
class TaskService {
  constructor(repo) {
    this.repo = repo;
  }
  // TODO 4: constructor minta "repo", simpan biar bisa dipakai method di bawah

  tambah(title) {
    return this.repo.save({ tittle });
  }

  semua() {
    return this.repo.semua();
    // TODO 6: lewat repo, kembalikan semua task
  }
}

const repo = new TaskRepo();
const service = new TaskService();

repo.add('Belajar');
repo.add('Olahraga');

console.log(service.semua);
// --- Kamu jadi "NestJS": cetak & sambungin manual ---

// TODO 7: cetak repo
// TODO 8: cetak service, kasih repo sebagai bahan
// TODO 9: tambah dua tugas: "Belajar" dan "Olahraga"

// TODO 10: console.log hasil semua tugas
