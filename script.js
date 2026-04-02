const header = document.querySelector("header");
console.log(header);

const kartuPertama = document.querySelector(".card");
console.log(kartuPertama);

const formLogin = document.querySelector("#form-login");
console.log(formLogin);

const semuaLink = document.querySelectorAll("a");
console.log(semuaLink);

function ubahLink() {
  semuaLink.forEach((n) => {
    n.style.border = "1px solid blue";
  });
}

const formData = document.getElementById("form-login");
console.log(formData);

const elemen = document.querySelector("#judul");

// ── Membaca konten ──────────────────────────────────────────
console.log(elemen.textContent); // teks mentah (aman, tanpa HTML)
console.log(elemen.innerHTML); // termasuk tag HTML di dalamnya
console.log(elemen.outerHTML); // termasuk tag elemen itu sendiri

elemen.textContent = "Selamat Datang, Saya"; // mengubah teks

const link = document.querySelector("#link");
link.setAttribute("href", "https://www.google.com"); // mengubah atribut href
link.setAttribute("target", "_blank"); // mengubah atribut target

const input = document.querySelector(".search-input");
input.placeholder = "Ketik nama...";
