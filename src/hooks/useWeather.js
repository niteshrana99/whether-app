import React from "react";
import { fetchExtendedForecastData, fetchWeatherData } from "../api/fetchWeather";
import { WeatherContext } from "../Context/context"

export const useWeather = () => {
    const weatherContext = React.useContext(WeatherContext);
    if(!weatherContext) {
        throw new Error("useWeather must be used inside of WeatherContext Provier");
    };

    /**
     * Here I am using context module function react pattern
     */

    async function fetchWeather(dispatch, city) {
        dispatch({type: 'FETCH_WEATHER_START'});
        try {
            let weather = await fetchWeatherData(city);
            weather = await weather.json();
            console.log(weather);
            let extendedForecast = await fetchExtendedForecastData(city);
            extendedForecast = await extendedForecast.json();
            extendedForecast = extendedForecast.list;
            console.log(extendedForecast);
            dispatch({type: 'FETCH_WEATHER_SUCCESS', data: {weather, extendedForecast}})
        } catch(e) {
            dispatch({type: 'FETCH_WEATHER_FAIL', data: e.message})
            console.log(e.message);
        }
    }

    return { weatherContext , fetchWeather }
}