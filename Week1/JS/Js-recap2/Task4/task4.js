'use strict';

function arraySorter(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

const randomArray = [1, 6, 80, 10, 4, 2, 8];

console.log('Original array: ' + randomArray);
console.log('Sorted array: ' + arraySorter(randomArray));
