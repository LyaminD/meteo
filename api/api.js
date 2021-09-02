const API_TOKEN = "27b55b3b7fb077c517fb9c7012a3d8f6";

export function getWeather(city) {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=27b55b3b7fb077c517fb9c7012a3d8f6&lang=fr&units=metric";
  return fetch(url)
    .then((response) => {return response.json()})
    .catch((error) => console.error(error));
}

export function getWeatherByLocation(lat, lon) {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=27b55b3b7fb077c517fb9c7012a3d8f6&lang=fr&units=metric";
  return fetch(url)
    .then((response) => {return response.json()})
    .catch((error) => console.error(error));
}