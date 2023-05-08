const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// Vypište na výstup všechna čísla.
numbers.forEach((number) => {
  //console.log(number);
});
// Vypište na výstup druhé mocniny všech čísel.
numbers.forEach((number) => {
  // console.log(number * number);
});
// Vypište na výstup pouze záporná čísla.
numbers.forEach((number) => {
  if (number < 0) {
    // console.log(number)
  }
})
// Vypište na výstup absolutní hodnotu všech čísel.
numbers.forEach((number) => {
  if (number < 0) {
    //console.log(-1 * number)
  }
})
// Vypište na výstup pouze sudá čísla.
numbers.forEach((number) => {
  if (number % 2 === 0) {
    // console.log(number)
  }
})
// Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
numbers.forEach((number) => {
  if (Math.abs(number) % 3 === 0) {
    // console.log(number)
  }
})
// Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
numbers.forEach((number) => {
  console.log(numbers.indexOf(5) - numbers.indexOf(number))
})
// Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
numbers.forEach((number) => {
  const distance = numbers.indexOf(5) - numbers.indexOf(number);
  console.log(distance * distance);
});

// Spočítejte, kolik je v seznamu záporných čísel.
let negativeCount = 0;
numbers.forEach((number) => {
  if (number < 0) {
    negativeCount++;
  }
});
console.log('Počet záporných:', negativeCount);

// Spočítejte součet všech čísel v poli.
let evenSum = 0;
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenSum += number;
  }
});
console.log('Součet sudých:', evenSum);
// Spočítejte průměr všech čísel v poli.

let sum = 0;
numbers.forEach((number) => {
  sum += number
});
console.log('Průměr všech:', sum / numbers.length);

// Spočítejte součet všech kladných čísel v poli.
let positiveSum = 0;
numbers.forEach((number) => {
  if (number > 0) {
    positiveSum += number;
  }
});
console.log('Průměr všech:', positiveSum);