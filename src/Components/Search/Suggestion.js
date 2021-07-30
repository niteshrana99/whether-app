import { useWeather } from '../../hooks/useWeather'
import { SuggestionItem } from './Styled'

const Suggestion = ({label, hideSuggestionFn}) => {
    const { weatherContext, fetchWeather } = useWeather();
    const onClick = () => {
        
        fetchWeather(weatherContext.dispatch, label.split(",")[0])
        setTimeout(() => {
            hideSuggestionFn();
          }, 400);
    }
    return (
        <SuggestionItem onClick={onClick}>{label}</SuggestionItem>
    )
}

export default Suggestion
