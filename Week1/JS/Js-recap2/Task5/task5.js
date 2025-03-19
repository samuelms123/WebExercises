'use strict';

function arraySorter(array, order) {
  if (order == 'asc') {
    array.sort(function (a, b) {
      return a - b;
    });
    return array;
  } else if (order == 'desc') {
    array.sort(function (a, b) {
      return b - a;
    });
    return array;
  } else {
    return 'Check typos in order parameter (asc/desc)';
  }
}

const numbers = [5, 2, 8, 1, 9];

console.log(arraySorter(numbers, 'asc'));
console.log(arraySorter(numbers, 'desc'));
console.log(arraySorter(numbers, 'jee'));
