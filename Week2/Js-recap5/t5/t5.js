import {getData} from '../t1/getData.js';
import {getDailyMenu} from './getDailyMenu.js';

const restaurants = await getData(
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants'
);

const table = document.querySelector('table');
const modal = document.querySelector('#modal');

let previousHightlight;

restaurants.sort((a, b) => {
  return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
});

for (let restaurant of restaurants) {
  let tr = document.createElement('tr');

  tr.addEventListener('click', async function () {
    if (previousHightlight != undefined) {
      previousHightlight.classList.remove('highlight');
    }

    const dailyMenu = await getDailyMenu(restaurant._id);
    console.log(dailyMenu);

    previousHightlight = tr;
    tr.classList.add('highlight');

    modal.innerText = '';

    const nameH3 = document.createElement('h3');
    nameH3.innerText = restaurant.name;

    const addressP = document.createElement('p');
    addressP.innerText = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}`;

    const info = document.createElement('p');
    info.innerText = `${restaurant.phone}
                      ${restaurant.company}`;

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    for (let item of dailyMenu.courses) {
      const food = document.createElement('div');
      const name = document.createElement('h4');
      const price = document.createElement('p');
      const diets = document.createElement('p');

      name.innerText = item.name;
      price.innerText = item.price;
      diets.innerText = item.diets;

      food.append(name, price, diets);
      menuItems.append(food);
    }

    modal.append(nameH3, addressP, info, menuItems);

    modal.showModal();
  });

  let nameTd = document.createElement('td');
  nameTd.innerText = restaurant.name;

  const addressTd = document.createElement('td');
  addressTd.innerText = restaurant.address;

  const cityTd = document.createElement('td');
  cityTd.innerText = restaurant.city;

  tr.append(nameTd, addressTd, cityTd);
  table.append(tr);
}
