import React from 'react';
import WeatherIcon from './../WeatherIcon/WeatherIcon';
import { ForecastItemContainer } from './Styled';

const ForecastItem = ({iconCode, forecast, min, max, day}) => {
  return (
    <ForecastItemContainer>
      <h6>{day}</h6>
      <WeatherIcon code={iconCode} big />
      <p>{forecast}</p>
      <span>
      <h6>{min}<sup>&deg;</sup>/{max}<sup>&deg;</sup></h6>
      </span>
    </ForecastItemContainer>
  );
};

export default ForecastItem;