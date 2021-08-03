import styled from "styled-components";

export const ForeCastContainer = styled.div`
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 1.5rem 2rem;
    flex-direction: row;
    margin-top: 4rem;
    background-color: white;
    overflow: auto;

    h1 {
        font-weight: 500;
        font-size: 2rem;
        color: grey;
    }
`;

export const ForeCastItems = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    h6 {
        font-size: 13px;
        color:grey;
    }
`;

export const ForecastItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;