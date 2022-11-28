// var number = prompt("sonni kiriting");

// if (number % 2 == 0) {
//   console.log("juft");
// } else {
//   console.log("toq");
// }

// var userGender = prompt("Jinsingizni kiriting: Ayol || Erkak");

// var userName = prompt("Ismingizni kiriting");

// var elGender = document.querySelector(".gender");

// var elName = document.querySelector(".name");

// if (userGender == "Erkak" || userGender == "erkak") {
//   elGender.textContent = `Janob`;
// } else if (userGender == "Ayol" || userGender == "ayol") {
//   elGender.textContent = `Xonim`;
// } else {
//   elGender.textContent = `Nomalum`;
// }

// elName.textContent = userName;

// PRAKTIKA

var elTitle = document.querySelector(".title");

var forTicket = 500;
var forHotel = 250;
var forMuseum = 120;
var dolarForSum = 11225;
var euroForSum = 11686;
var dolar = (forTicket + forHotel) * dolarForSum;
var euro = forMuseum * euroForSum;
var cost = dolar + euro;
var money = prompt("O'zingizda bor summani yozing");
if (money >= cost ) {
  elTitle.textContent = "Oq yo'l Alisher";
} else {
  elTitle.textContent = "Alisher ozgina sabr qilish kerak bo'lar ekan";
}