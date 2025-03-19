'use strict';

const number = parseInt(prompt('Enter a positive number'));
let sum = 0;

if (number < 0) {
  alert('Enter a positive number!');
} else {
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  document.querySelector(
    '#target'
  ).innerHTML = `sum of numbers up to ${number} = ${sum}`;
}
