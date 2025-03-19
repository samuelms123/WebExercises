'use strict';

let numbers = [];

for (let i = 1; i <= 5; i++) {
  numbers.push(prompt(`Enter ${i}. number`));
}

document.querySelector('#numbers').innerHTML = 'Numbers: ' + numbers;
console.log('Numbers: ' + numbers);

if (
  numbers.includes(prompt("Enter a number to check if it's in the num array"))
) {
  alert('Number found!');
} else {
  alert('Number not found!');
}

numbers.pop();
document.querySelector('#numbers2').innerHTML = 'Updated numbers: ' + numbers;

numbers.sort(function (a, b) {
  return a - b;
});

document.querySelector('#numbers3').innerHTML =
  'Numbers in ascending order: ' + numbers;
