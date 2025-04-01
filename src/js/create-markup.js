export function createMarkup(data) {
  return `
         <h2 class="countryName">${data.name}, ${data.sys.country}</h2>
          <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}" class="weatherImg" />
          <p class="disc">${data.weather[0].description}</p>
          <ul class="detailsList">
            <li class="weatherDetails">Temperature: ${data.main.temp}&#8451;</li>
            <li class="weatherDetails">Feels like: ${data.main.feels_like}&#8451;</li>
            <li class="weatherDetails">Humidity: ${data.main.humidity}%</li>
            <li class="weatherDetails">Pressure: ${data.main.pressure}</li>
          </ul>
  `;
}
