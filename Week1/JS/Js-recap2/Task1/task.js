'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits:');
for (const fruit of fruits) {
  console.log(fruit);
}

console.log('Lenght of fruits array: ' + fruits.length);

console.log('Fruit with index 2 in fruits array: ' + fruits[2]);

console.log('Last element in the fruits array: ' + fruits[fruits.length - 1]);

let vegetables = [];

for (let i = 1; i <= 3; i++) {
  vegetables.push(prompt(`Enter ${i}. vegetable`));
}

console.log('Vegetables:');
for (const vegetable of vegetables) {
  console.log(vegetable);
}

console.log('Lenght of vegetables array: ' + vegetables.length);
