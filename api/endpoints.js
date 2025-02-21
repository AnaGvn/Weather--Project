
const API_KEY = "fc939fd77ea2d21ce7e9262f4f6cb604";

// Construim link-urile (andpoint-urile) severelor de la care vom primi date.
function getCurrentWeatherEndpoint(city) {

  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
