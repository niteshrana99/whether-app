import styled from 'styled-components';

export const WeatherContainer = styled.div`
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 1.5rem 2rem;
    flex-direction: row;
    margin-top: 4rem;
    background-color: white;
`;

export const SectionTitle = styled.h6`
    font-weight: 500;
    font-size: 2rem;
    color: grey;
`;

export const CurrentWeatherContainer = styled.div`
    display: flex;
`;



export const CurrentWeather = styled.div`
    display:flex;
    flex-direction: column;
    margin: 2rem 2rem;
    width: 55%;

    h4 {
        font-weight: 600;
        font-size: 2rem;
        color: #396bae;
        margin-bottom: 2rem;
    }

    span {
        font-weight: 200;
        font-size: 10rem;
        color: rgb(74, 111, 161);
        margin-left: 1.5rem;
        line-height: 1;
    }

    h6 {
        font-size: 2rem;
        text-align: left;
        color: rgb(123, 152, 178);
    }
`;

export const CurrentWeatherInfo = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        fill: grey;
`;

export const FeelsLike = styled.div`
    font-size: 2.5rem;
    color:rgb(74, 111, 161);
`;

export const HighLowContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const InfoRow = styled.div`
    display: flex;
    font-size: 16px;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    color: #396bae;
`;

export const Temprature = styled.span`
    font-size: 2rem;
    margin-left: 1rem;
`;

export const HighLow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(58, 134, 202);
`;


