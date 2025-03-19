'use strict';
/*
Write a program that allows users to track and rate their favorite movies. The program should prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5. The program should store the user input in an array of objects using object literals. Once all the movie ratings have been entered, the program should sort the movies based on their ratings and determine the highest-rated movie. Finally, it should display the sorted list of movies and the highest-rated movie on the HTML document.

Use object literals to represent each movie, with properties such as title and rating.
Prompt the user to enter the number of movies they want to rate.
Use a loop to gather user input for each movie, including the title and rating. Store the movie details in an array of objects.
Sort the array of movie objects based on the ratings, from highest to lowest.
Determine the highest-rated movie by accessing the first element of the sorted array.
Display the sorted list of movies and the highest-rated movie on the HTML document.
*/

let movieObjectArray = [];
const listElement = document.querySelector('#movieList');
const bestMovieElement = document.querySelector('#bestMovie');
const movieAmount = parseInt(prompt('Enter amount of movies you want to add'));

for (let i = 1; i <= movieAmount; i++) {
  let acceptableRating = false;
  let title = prompt(`Enter ${i}. movie title`);

  while (!acceptableRating) {
    const rating = parseInt(prompt(`Enter ${i}. movie rating (1-5)`));
    if (rating >= 1 && rating <= 5) {
      const movie = {
        title: title,
        rating: rating,
      };

      movieObjectArray.push(movie);
      acceptableRating = true;
    }
  }
}

movieObjectArray.sort((a, b) => b.rating - a.rating);

for (let movie of movieObjectArray) {
  let li = document.createElement('li');
  li.innerHTML = `${movie.title} - ${movie.rating}`;
  listElement.appendChild(li);
}

bestMovieElement.innerHTML = `Best movie: ${movieObjectArray[0].title} - ${movieObjectArray[0].rating}`;
