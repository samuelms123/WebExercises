'use strict';

/*
Browser name and version. (e.g. Google Chrome, 114)
(Operating system name.)
Screen width and height.
Available screen space for the browser.
Current date and time. Use Finnish localization
1. helmikuuta 2056 as date format
Hours and minutes for time
Place each item within its own <p> element, for example.
*/

const targetElem = document.querySelector('div');

// Browser name and version
const p1 = document.createElement('p');
p1.innerText = `Browser: ${navigator.userAgent}`;
targetElem.appendChild(p1);

// Screen width and height
const p2 = document.createElement('p');
p2.innerText = `Screen width: ${screen.width} px
                Screen height: ${screen.height} px`;
targetElem.appendChild(p2);

// Available screen space for the browser
const p3 = document.createElement('p');
p3.innerText = `Available width for browser: ${screen.availWidth} px
                Available height for browser: ${screen.availHeight} px`;
targetElem.appendChild(p3);

// Current Finnish date and time
const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const p4 = document.createElement('p');
p4.innerText = `${date.toLocaleDateString('fi-FI', options)}
                ${date.getHours()}:${date.getMinutes()}`;
targetElem.appendChild(p4);
