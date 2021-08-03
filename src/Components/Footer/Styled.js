import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    
    color: white;
    justify-content: center;
    margin: 2rem 0;
`;

export const FooterParagraph = styled.p`
    font-size: 2rem;
    @media only screen and (max-width: 600px) {
        font-size: 1.4rem ;
       
    }
`;

export const FooterLink = styled.a`
    font-size: 2rem;
    color: white;
    margin-left: 1rem;
    @media only screen and (max-width: 600px) {
        font-size: 1.4rem ;
       
    }
`;