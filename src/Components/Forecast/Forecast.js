import { useWeather } from '../../hooks/useWeather';
import { getNextSevenDays } from '../../utils/utils';
import ForecastItem from './ForecastItem';
import { ForecastContainer, ForecastItems, SectionTitle } from './Styled';

const Forecast = () => {
    const { weatherContext } = useWeather();
    const { extendedForecast } = weatherContext.state;
    console.log(extendedForecast);
    const next7Days = getNextSevenDays();
    const extendedForecastMap = extendedForecast.map((forecast, index) => {
        return {
            day: next7Days[index],
            iconCode: forecast.weather[0].id,
            forecast: forecast.weather[0].main,
            max: Math.floor(forecast.temp.max),
            min: Math.floor(forecast.temp.min),
        }
    });
    if (!extendedForecastMap.length) {
        return null;
    }
    return (
        <ForecastContainer>
            <SectionTitle>Extended Forecast</SectionTitle>
            <ForecastItems>
                {extendedForecastMap.map((item) => {
                    return (
                        <ForecastItem
                            key={item.day} day={item.day} iconCode={item.iconCode} forecast={item.forecast} max={item.max} min={item.min}
                        />
                    );
                })}
            </ForecastItems>
        </ForecastContainer>
    )
}

export default Forecast;
