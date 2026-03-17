
function openMenu(){
document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu(){
document.getElementById("mobileMenu").classList.remove("active");
}

const texts = [
"Butuh Website untuk Bisnis?",
"Ingin Website Profesional?",
"Mau Website Modern & Cepat?",
"Siap Bangun Website Impianmu?"
];

let index = 0;

const textElement = document.getElementById("changing-text");

textElement.innerText = texts[0];

function changeText(){
index++;
if(index >= texts.length){ index = 0; }
textElement.innerText = texts[index];
}

setInterval(changeText,3000);

// Pilih paket ke order
function pilihPaket(paket){
document.getElementById("paket").value = paket;
document.getElementById("layanan").scrollIntoView({behavior:"smooth"});
}

// Order via WA otomatis
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function(e){
e.preventDefault();
const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const nomor = document.getElementById("nomor").value;
const paket = document.getElementById("paket").value;
const deskripsi = document.getElementById("deskripsi").value;

const waNumber = "6285194729714";
const waMessage = `Halo, saya ${nama}%0AEmail: ${email}%0ANomor WA: ${nomor}%0APaket: ${paket}%0ADeskripsi: ${deskripsi}`;
window.open(`https://wa.me/${waNumber}?text=${waMessage}`,"_blank");
});