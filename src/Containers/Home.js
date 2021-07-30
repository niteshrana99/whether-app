import styled from 'styled-components';
import Footer from '../Components/Footer/Footer';
import Forecast from '../Components/Forecast/Forecast';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Weather from '../Components/Weather/Weather';
import { useWeather } from '../hooks/useWeather';
import Spinner from '../ui/Spinner/Spinner';

const HomeRoot = styled.div`
    width: 60%;
    margin: 0px auto;
`;

const Home = () => {
    const { weatherContext } = useWeather();
    const { isLoading } = weatherContext.state
    console.log(weatherContext)
    return (
        <HomeRoot>
            {isLoading && <Spinner />}
            <Header />
            <Search />
            <Weather />
            <Forecast />
            <Footer />
        </HomeRoot>
    )
}

export default Home
