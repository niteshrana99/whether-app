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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
        font-size: 12rem;
        color: rgb(74, 111, 161);
        margin-left: 1.5rem;
        line-height: 1;
        @media only screen and (max-width: 600px) {
        font-size: 5rem;
    }
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
    @media only screen and (max-width: 600px) {
        margin-bottom: 12px
    }
`;

export const HighLowContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 600px) {
        margin-bottom: 12px
    }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  div {
    color: grey;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    width: 10rem;
  }
  svg {
    fill: grey;
    margin-right: 1rem;
    width: 1.6rem;
    margin-left: -0.3rem;
  }
  span {
    color: #3080c8;
    font-weight: 500;
    font-size: 1.5rem;
  }`;

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


