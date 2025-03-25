/*
GET Method. Practice using the Fetch API with async/await to make a GET request and log the response.

Utilize the Fetch API with async/await to make a GET request to the URL https://reqres.in/api/users/1.
Log the response data to the console.
*/

export async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Invalid input!');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error, ' Error happened while fetching data.');
  }
}
