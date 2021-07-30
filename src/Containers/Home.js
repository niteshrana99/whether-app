import styled from 'styled-components';
import Footer from '../Components/Footer/Footer';
import Forecast from '../Components/Forecast/Forecast';
import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Weather from '../Components/Weather/Weather';
import { ContextProvider } from '../Context/context';

const HomeRoot = styled.div`
    width: 60%;
    margin: 0px auto;
`;

const Home = () => {
    return (
        <ContextProvider>
        <HomeRoot>
            <Header />
            <Search />
            <Weather />
            <Forecast />
            <Footer />
        </HomeRoot>
        </ContextProvider>
    )
}

export default Home
