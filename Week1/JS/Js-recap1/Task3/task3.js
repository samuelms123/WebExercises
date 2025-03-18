'use strict';

const firstSide = parseFloat(prompt('Enter 1. side lenght'));
const secondSide = parseFloat(prompt('Enter 2. side lenght'));
const thirdSide = parseFloat(prompt('Enter 3. side lenght'));

let target = document.querySelector('#target');

if (firstSide == secondSide && secondSide == thirdSide) {
  target.innerHTML =
    'Triangle is classified as equilateral (All sides are equal)';
} else if (
  firstSide == secondSide ||
  firstSide == thirdSide ||
  secondSide == thirdSide
) {
  target.innerHTML =
    'Triangle is classified as isosceler (Two sides are equal)';
} else {
  target.innerHTML = 'Triangle is classified as scalene (No sides are equal)';
}
