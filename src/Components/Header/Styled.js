import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  /* height: 8rem; */
`;
export const Title = styled.h1`
  color: white;
  font-size: 2.2rem;
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