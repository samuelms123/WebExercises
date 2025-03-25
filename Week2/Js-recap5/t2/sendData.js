'use strict';

/*
POST Method. Practice making a POST request using the Fetch API with async/await and handling the response.

Make a POST request to the URL https://reqres.in/api/users with a JSON payload containing user information ( e.g., name and job).
Log the response data to the console.
3p
*/

export async function sendData(url, data) {
  try {
    const response = await fetch(url, data);

    if (!response.ok) {
      throw new Error('Invalid input!');
    }

    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error, ' Error happened while sending data.');
  }
}
