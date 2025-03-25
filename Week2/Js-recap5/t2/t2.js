import {sendData} from './sendData.js';

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

sendData('https://reqres.in/api/users', data);
