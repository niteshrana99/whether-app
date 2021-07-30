import { useWeather } from '../../hooks/useWeather';
import { getNextSevenDays } from '../../utils/utils';
import ForecastItem from './ForecastItem';
import { ForeCastContainer, ForeCastItems } from './Styled';

const Forecast = () => {
    const  { weatherContext } = useWeather();
    const { extendedForecast } =  weatherContext.state;
    console.log(extendedForecast);
    const next7Days = getNextSevenDays();
    const extendedForecastMap = extendedForecast.map((forecast, index) => {
        return {
            day: next7Days[index],
            iconCode: forecast.weather[0].id,
            forecast : forecast.weather[0].main,
            max: Math.floor(forecast.temp.max),
            min: Math.floor(forecast.temp.min),
        }
    });
    if(!extendedForecastMap.length) {
        return null;
    }
    return (
        <ForeCastContainer>
            <h1>Extended Forecast</h1>
            <ForeCastItems>
            {extendedForecastMap.map(item => {
                return (
                    <ForecastItem key={item.day} day={item.day} iconCode={item.iconCode} forecast={item.forecast} max={item.max} min={item.min} />
                )
            })}
            </ForeCastItems>
        </ForeCastContainer>
    )
}

export default Forecast;
