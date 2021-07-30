import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { ForecastItemContainer } from './Styled'

const ForecastItem = ({iconCode, forecast, min, max, day}) => {
    return (
        <ForecastItemContainer>
            <h6>{day}</h6>
            <WeatherIcon code={Number(iconCode)} big />
            <h6>{forecast}</h6>
            <h6>{min}<sup>&deg;</sup>/{max}<sup>&deg;</sup></h6>
        </ForecastItemContainer>
    )
}

export default ForecastItem
