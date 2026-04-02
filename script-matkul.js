console.log("Script eksternal berhasil dimuat!");

// ── const: nilai TIDAK bisa diubah (gunakan sebagai default) ──
const namaAplikasi = "SIAK Universitas";
const tahunAkademik = 2024;
const PI = 3.14159;
// namaAplikasi = "Lain"; // ERROR! const tidak bisa diubah
console.log(`Aplikasi: ${namaAplikasi}, Tahun: ${tahunAkademik}, PI: ${PI}`);

// ── let: nilai BISA diubah (untuk variabel yang berubah) ──────
let namaUser = "Andi Pratama";
let nilaiUjian = 85;
let statusLogin = false;
nilaiUjian = 90; // OK, nilai bisa diubah

// ── var: cara lama, hindari penggunaan (scope berbeda) ────────
var umur = 20; // function-scoped, bisa hoisted

// ── Naming conventions ──────────────────────────────────────
let namaLengkap = "Sari Dewi"; // camelCase (direkomendasikan)
let total_harga = 150000; // snake_case
const MAX_NILAI = 100; // UPPER_CASE untuk konstanta

// ── Template Literal (string modern) ───────────────────────
let nim = "21001";
let nama = "Budi";
console.log(`Mahasiswa: ${nama}, NIM: ${nim}`);
// Output: Mahasiswa: Budi, NIM: 21001

// ── Tipe Data Primitif ──────────────────────────────────────

// String — teks
let nama2 = "Ahmad Fauzi";
let jurusan = "Sistem Informasi";
let keterangan = `Mahasiswa ${jurusan}`; // template literal

// Number — angka (integer dan desimal)
let nim2 = 21001;
let ipk2 = 3.75;
let suhu = -5;
let infinity = Infinity;
let bukan_angka = NaN; // Not a Number (hasil operasi invalid)

// Boolean — true atau false
let sudahLulus = true;
let sedangCuti = false;
let aktif = 1 > 0; // true

// null — nilai kosong yang disengaja
let fotoProfil = null; // belum ada foto

// undefined — variabel belum diberi nilai
let alamat; // undefined

// Symbol — nilai unik (jarang dipakai pemula)
const id = Symbol("id");

// ── Tipe Data Non-Primitif ──────────────────────────────────
let mahasiswa = { nama: "Andi", nim: "21001" }; // Object
let nilaiList = [85, 90, 78, 92]; // Array
let n2 = [0, 1, 2];
let nilaitotal = [...nilaiList, ...n2];
console.log(nilaitotal);
let hitungLulus = function (n) {
  return n >= 60;
}; // Function

// ── Cek tipe data ────────────────────────────────────────
console.log(typeof nama); // 'string'
console.log(typeof nim); // 'number'
console.log(typeof aktif); // 'boolean'
console.log(typeof mahasiswa); // 'object'
console.log(typeof nilaiList); // 'object' (array juga object!)
console.log(Array.isArray(nilaiList)); // true

console.log(hitungLulus(85));

let n = 5;
let o = n + 4;
console.log(o);

// Contoh operator dalam konteks SI
let harga = 150000;
let diskon = 0.1;
let qty = 3;

let subtotal = harga * qty; // 450000
let potongan = subtotal * diskon; // 45000
let total = subtotal - potongan; // 405000
let kena_ppn = total * 1.11; // 449550

// Strict equality — SELALU gunakan === bukan ==
console.log(1 === 1); // true
console.log(1 === "1"); // false (beda tipe!)
console.log(1 == "1"); // true  (jangan pakai ini!)

// Nullish coalescing ?? — sangat berguna
let inputNama = null;
let namaTampil = inputNama ?? "Anonim"; // 'Anonim'

// Ternary — if-else singkat
// nilais = 75;
// let grade =
//   nilai >= 90
//     ? "A"
//     : nilai >= 80
//       ? "B"
//       : nilai >= 70
//         ? "C"
//         : nilai >= 60
//           ? "D"
//           : "E";
// console.log(grade); // 'C'

// ── if / else if / else ─────────────────────────────────────
let ipk = 2;

if (ipk >= 3.5) {
  console.log("Predikat: Cumlaude");
} else if (ipk >= 3.0) {
  console.log("Predikat: Sangat Memuaskan");
} else if (ipk >= 2.5) {
  console.log("Predikat: Memuaskan");
} else {
  console.log("Predikat: Cukup");
}

// ── switch — untuk nilai tetap (lebih rapi) ─────────────────
let hari = "Kamis";

switch (hari) {
  case "Senin":
  case "Selasa":
    console.log("Awal minggu — kuliah pagi");
    break;
  case "Rabu":
  case "Kamis":
    console.log("Tengah minggu — praktikum");
    break;
  case "Jumat":
    console.log("Akhir minggu — kuliah sore");
    break;
  default:
    console.log("Weekend — libur!");
}

// ── Logika AND && dan OR || ──────────────────────────────────
let sks = 144;
let ipkS = 3.2;
let nilaiSkripsi = "A";

let bisaLulus = sks >= 144 && ipkS >= 2.0 && nilaiSkripsi !== "E";
console.log("Bisa lulus:", bisaLulus); // true

// ── for loop klasik ─────────────────────────────────────────
for (let i = 1; i <= 5; i++) {
  console.log(`Perulangan ke-${i}`);
}

// ── Iterasi array dengan for klasik ─────────────────────────
let mataKuliah = ["Pemrograman Web", "Basis Data", "Jaringan", "Algoritma"];

for (let i = 0; i < mataKuliah.length; i++) {
  console.log(`${i + 1}. ${mataKuliah[i]}`);
}

// ── for...of — iterasi nilai array (MODERN, lebih bersih) ───
for (let mk of mataKuliah) {
  console.log(mk);
}

// ── for...in — iterasi KEY object ────────────────────────────
// let mahasiswa = { nama: 'Rina', nim: '21005', ipk: 3.8 };

for (let key in mahasiswa) {
  console.log(`${key}: ${mahasiswa[key]}`);
}
// Output: nama: Rina | nim: 21005 | ipk: 3.8

// ── while loop ──────────────────────────────────────────────
let percobaan = 0;
let maxPercobaan = 3;

while (percobaan < maxPercobaan) {
  console.log(`Percobaan login ke-${percobaan + 1}`);
  percobaan++;
}

// ── break & continue ────────────────────────────────────────
let nilai = [85, 45, 90, 30, 78, 95];

for (let n of nilai) {
  if (n < 60) continue; // lewati nilai di bawah 60
  console.log(`Lulus: ${n}`);
}

let lulus = nilai.some((n) => n >= 60);
console.log("Nilai lulus:", lulus);
