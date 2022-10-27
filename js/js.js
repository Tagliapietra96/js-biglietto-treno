const now = new Date();
const yearNow = now.getFullYear();
const userName = prompt("Come ti chiami?");

let userBirthYear = parseInt(prompt("In che anno sei nato?"));

if (isNaN(userBirthYear)) {
  alert(
    "Il dato non è corretto, inserisci nuovamente il tuo anno di nascita in valori numerici"
  );
  userBirthYear = parseInt(prompt("In che anno sei nato?"));
}

let travelKm = parseInt(prompt("Quanti chilometri devi percorrere?"));

if (isNaN(travelKm)) {
  alert(
    "Il dato non è corretto, inserisci nuovamente quanti chilometri devi percorrere in valori numerici"
  );
  travelKm = parseInt(prompt("Quanti chilometri devi percorrere?"));
}

const userAge = yearNow - userBirthYear;
const price = Math.round(travelKm * 0.21 * 100) / 100;
const discount2 = 0.8;
const discount4 = 0.6;

let finalPrice = price;

if (userAge < 18) {
  finalPrice = Math.round(price * discount2 * 100) / 100;
} else if (userAge > 65) {
  finalPrice = Math.round(price * discount4 * 100) / 100;
}

const result = document.getElementById("result");
result.innerHTML = `Ciao ${userName}! Il prezzo del tuo biglietto è di €${finalPrice}`;
