'use strict';

import {getData} from '../t1/getData.js';
import {sendData} from '../t2/sendData.js';

/*
Attempt to make a GET request to a non-existent URL (e.g., https://reqres.in/api/unknown/23).
Handle the error using try/catch blocks.
Also try other methods (POST, PUT, DELETE)
Log an error message to the console in case of an error.

*/
const data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Testi Testinen',
    email: 'Testi@Testi.com',
  }),
};

getData('https://reqres.in/api/unknown/23'); // GET
sendData('https://reqres.in/api/unknown/23', data); // POST
