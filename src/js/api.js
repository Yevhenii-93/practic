import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// 07904cc67030c59fe615e3aa37a319a8

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export async function fetchWeather(city) {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '07904cc67030c59fe615e3aa37a319a8';
  const params = {
    q: city,
    appid: API_KEY,
    units: 'metric',
  };

  try {
    const { data } = await axios(BASE_URL, { params });
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
