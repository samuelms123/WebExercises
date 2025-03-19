'use strict';

let numbers = [];
let evenNumbers = [];
let asking = true;

while (asking) {
  const answer = prompt("Enter a number (or 'done' to finish)");
  if (answer == 'done') {
    asking = false;
  } else {
    numbers.push(Number(answer));
  }
}

for (const number of numbers) {
  if (number % 2 == 0) {
    evenNumbers.push(number);
  }
}

document.querySelector('#numbers').innerHTML = 'Even numbers: ' + evenNumbers;

if (evenNumbers.length == 0) {
  document.querySelector('#numbers').innerHTML = 'Even numbers: None';
}
