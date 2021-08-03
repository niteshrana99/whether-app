import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;

`;
export const Title = styled.h1`
  color: white;
  font-size: 2.2rem;
  @media only screen and (max-width: 600px) {
        font-size: 1.8rem ;
       
    }
`;
export const GithubLink = styled.a`
  margin-left: 1rem;
  svg {
    fill: black;
  }
  &:hover svg {
    fill: #20546a;
  }
`;
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;