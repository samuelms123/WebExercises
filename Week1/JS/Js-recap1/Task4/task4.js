'use strict';

const score = parseFloat(prompt('Enter your course score (0-100)'));
let grade = document.querySelector('#target');

if (score < 0 || score > 100) {
  alert('Invalid course score');
} else {
  if (0 <= score && 39 >= score) {
    grade.innerHTML = 'Your course grade is 0';
  } else if (40 <= score && 51 >= score) {
    grade.innerHTML = 'Your course grade is 1';
  } else if (52 <= score && 63 >= score) {
    grade.innerHTML = 'Your course grade is 2';
  } else if (64 <= score && 75 >= score) {
    grade.innerHTML = 'Your course grade is 3';
  } else if (76 <= score && 87 >= score) {
    grade.innerHTML = 'Your course grade is 4';
  } else {
    grade.innerHTML = 'Your course grade is 5';
  }
}
