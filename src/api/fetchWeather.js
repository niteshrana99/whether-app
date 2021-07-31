const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city , units="metric") => {
  let url = `${baseUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`;
  }
  return fetch(url);
};

export const fetchExtendedForecastData = (city , units="metric") => {
  let url = `${baseUrl}/forecast/daily?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/forecast/daily?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`;
  }

  return fetch(url);
};