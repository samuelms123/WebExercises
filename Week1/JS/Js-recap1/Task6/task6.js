'use strict';

const table = document.querySelector('#table');

const number = parseInt(
  prompt('Enter max positive number for multiplication table')
);

if (number < 0) {
  alert('Please enter a positive number');
} else {
  for (let i = 1; i <= number; i++) {
    let row = table.appendChild(document.createElement('tr'));
    for (let j = 1; j <= number; j++) {
      let td = row.appendChild(document.createElement('td'));
      td.innerHTML = i * j;
    }
  }
}
