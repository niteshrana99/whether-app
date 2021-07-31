import React from 'react';
import ToggleSwitch from '../../ui/ToggleSwitch/ToggleSwitch';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { CurrentWeather, CurrentWeatherContainer, CurrentWeatherInfo, FeelsLike, HighLow, HighLowContainer, InfoRow, SectionTitle, Temprature, WeatherContainer } from './Styled';
import { ReactComponent as HighIcon } from "../../assets/high-icon.svg";
import { ReactComponent as LowIcon } from "../../assets/low-icon.svg";
import { ReactComponent as HumidityIcon } from "../../assets/humidity-icon.svg";
import { ReactComponent as PressureIcon } from "../../assets/pressure-icon.svg";
import { ReactComponent as WindIcon } from "../../assets/wind-icon.svg";
import { useWeather } from '../../hooks/useWeather';
import { getFormattedWeatherData } from '../../utils/utils';

const Weather = () => {
    const { weatherContext } = useWeather();
    let { weather } = weatherContext.state;
    if(!weather) {
        return null;
    }
    weather = getFormattedWeatherData(weather);
    const { name,  description, feels_like, humidity, iconCode,pressure,speed, temp, temp_max, temp_min} = weather;
    return (
        <WeatherContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SectionTitle>Current Weather</SectionTitle>
                <div>
                    <ToggleSwitch />
                </div>
            </div>
            <CurrentWeatherContainer>
                <CurrentWeather>
                    <h4>{name}</h4>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <WeatherIcon big code={iconCode} />
                        <span>
                            {temp}
                            <sup>&deg;</sup>
                        </span>
                    </div>
                    <h6>{ description }</h6>
                </CurrentWeather>
                <CurrentWeatherInfo>
                    <FeelsLike>
                        Feels like {feels_like}
                            <sup>&deg;</sup>
                    </FeelsLike>
                    <HighLowContainer>
                        <HighLow>
                        <HighIcon />
                        <Temprature>{temp_max} <sup>&deg;</sup></Temprature>
                        </HighLow>
                        <HighLow>
                        <LowIcon />
                        <Temprature>{temp_min} <sup>&deg;</sup></Temprature>
                        </HighLow>
                    </HighLowContainer>
                    <InfoRow>
                        <div>
                        <HumidityIcon /> Humidity
                        </div>
                        <span>{humidity}</span> 
                    </InfoRow>
                    <InfoRow>
                        <div>
                        <WindIcon /> Wind
                        </div>
                        <span>{speed}</span> 
                    </InfoRow>
                    <InfoRow>
                        <div>
                        <PressureIcon /> Pressure
                        </div>
                        <span>{pressure}</span> 
                    </InfoRow>
                </CurrentWeatherInfo>
            </CurrentWeatherContainer>
        </WeatherContainer>
    )
}

export default Weather
