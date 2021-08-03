import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import Footer from '../Components/Footer/Footer';
import Forecast from '../Components/Forecast/Forecast';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Weather from '../Components/Weather/Weather';
import ErrorFallBack from '../ui/ErrorBoundary/ErrorFallBack';
import { useWeather } from '../hooks/useWeather';
import Spinner from '../ui/Spinner/Spinner';

const HomeRoot = styled.div`
    width: 60%;
    margin: 0px auto;
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`;

const Home = () => {
    const { weatherContext } = useWeather();
    const { isLoading } = weatherContext.state
    return (
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <HomeRoot>
            {isLoading && <Spinner />}
            <Header />
            <Search />
            <Weather />
            <Forecast />
            <Footer />
        </HomeRoot>
        </ErrorBoundary>
    )
}

export default Home
