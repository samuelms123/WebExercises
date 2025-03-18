'use strict';

const celsius = prompt('Enter value in celsius');
const kelvin = parseFloat(celsius) + 273.15;
const fahrenheit = (celsius * 9) / 5 + 32;

document.querySelector('#celsius').innerText = celsius;
document.querySelector('#kelvin').innerText = kelvin;
document.querySelector('#fahrenheit').innerText = fahrenheit;
