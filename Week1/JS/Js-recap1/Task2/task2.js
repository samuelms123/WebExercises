'use strict';

const x1 = parseFloat(prompt('Enter x1 value'));
const y1 = parseFloat(prompt('Enter y1 value'));
const x2 = parseFloat(prompt('Enter x2 value'));
const y2 = parseFloat(prompt('Enter y2 value'));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.querySelector('#target').innerHTML = distance;
