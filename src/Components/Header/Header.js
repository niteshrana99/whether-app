import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { GithubLink, HeaderContainer, HeaderIconsContainer, Title } from './Styled';

const Header = () => {
    return (
        <HeaderContainer>
      <Title>Weather App</Title>
      <HeaderIconsContainer>
        <DarkModeToggle checked={false} size={60} />
        <GithubLink target="_blank" href="https://github.com/niteshrana99/whether-app">
          <GithubIcon />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
    )
}

export default Header
