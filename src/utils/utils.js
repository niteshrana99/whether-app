export function getNextSevenDays() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const next7Days = [];
    for (let i = 0; i < 7; i++) {
        next7Days.push(days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]);
    }
    return next7Days;
}

export function getFormattedWeatherData(weather) {
    return {
        name: weather.name,
        description: weather.weather[0].description,
        iconCode:  weather.weather[0].id,
        temp: Math.floor(weather.main.temp),
        temp_max: Math.floor(weather.main.temp_max),
        temp_min: Math.floor(weather.main.temp_min),
        feels_like: Math.floor(weather.main.feels_like),
        humidity: `${weather.main.humidity}%`,
        pressure: `${weather.main.pressure}hPa`,
        speed: `${weather.wind.speed}Kph`
    }
}