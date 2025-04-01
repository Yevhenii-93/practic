// 1. Створи застосунок для пошуку погоди в своєму місті
// Використовуй API https://openweathermap.org/api
// (Current Weather Data -> Built-in API request by city name)
// створи файл api.js що робитиме запит на бек
// створи файл create-markup.js для створення розмітки (https://prnt.sc/LEataI862RLd)
// додай пошук погоди в конкретному місті використовуючи форму

// 4. Додай в картку з погодою кнопку Save для зберігання
// інформації про погоду в місті в localStorage, щоб при оновленні сторінки
// йшов запит за погодою в збереженому місті
// коли місто збережено, кнопка стає Delete і можна видалити місто, тоді запит
// не буде йти при оновленні сторінки

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchWeather } from './js/api';
import { createMarkup } from './js/create-markup';

const form = document.querySelector('.form');
const card = document.querySelector('.card');

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  const city = form.elements.city.value.trim();

  if (!city) {
    iziToast.error({
      title: 'Error',
      message: 'Enter city',
      position: 'topRight',
    });
    return;
  }

  try {
    const data = await fetchWeather(city);
    if (!data) {
      iziToast.error({
        title: 'Error',
        message: 'Enter city',
        position: 'topRight',
      });
      return;
    }
    card.innerHTML = createMarkup(data);
  } catch (error) {
    console.log(error);
  }
}
