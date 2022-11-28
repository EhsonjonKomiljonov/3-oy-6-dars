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

// var elTitle = document.querySelector(".title");

// var forTicket = 500;
// var forHotel = 250;
// var forMuseum = 120;
// var dolarForSum = 11225;
// var euroForSum = 11686;
// var dolar = (forTicket + forHotel) * dolarForSum;
// var euro = forMuseum * euroForSum;
// var cost = dolar + euro;
// var money = +prompt("O'zingizda bor summani yozing");
// if (money >= cost) {
//   elTitle.textContent = "Oq yo'l Alisher";
// } else if (money < 0) {
//   elTitle.textContent = "Alisher aka To'gri qiymat kiriting";
// } else if (isNaN(money)) {
//   elTitle.textContent = "Alisher aka, son kiriting";
// } else if (isNaN(money) == "0") {
//   elTitle.textContent = "Alisher aka, son kiriting";
// } else {
//   elTitle.textContent = "Alisher ozgina sabr qilish kerak bo'lar ekan";
// }

elForm = document.querySelector(".form");
elInput = document.querySelector(".input");
elInputOne = document.querySelector(".input-one");
elInputTwo = document.querySelector(".input-two");
elInputThree = document.querySelector(".input-three");
elInputFour = document.querySelector(".input-four");
elTitle = document.querySelector(".title");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var elInputVelue = elInput.value;
  var elInputVelue1 = elInputOne.value;
  var elInputVelue2 = elInputTwo.value;
  var elInputVelue3 = elInputThree.value;
  var elInputVelue4 = elInputFour.value;

  console.log(elInputVelue);
  console.log(elInputVelue1);
  console.log(elInputVelue2);
  console.log(elInputVelue3);
  console.log(elInputVelue4);

  // if (elInputVelue % 3 == 0 && elInputVelue % 5 == 0) {
  //   elTitle.textContent = "5 ga ham 3 ga ham qoldiqsiz bo'linadi";
  // } else if (elInputVelue % 3 == 0) {
  //   elTitle.textContent = "3 ga qoldiqsiz bo'linadi";
  // } else if (elInputVelue % 5 == 0) {
  //   elTitle.textContent = "5 ga qoldiqsiz bo'linadi";
  // } else if (isNaN(elInputVelue)) {
  //   elTitle.textContent = "Aka, son kiriting";
  // } else {
  //   elTitle.textContent = "5 ga ham 3 ga ham bo'linmaydi";
  // }
});
