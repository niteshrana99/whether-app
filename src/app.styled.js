import { createGlobalStyle } from 'styled-components';
import bgImage from './assets/bg_image_2.jpg';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        // display: flex;
        justify-content: center;
        /* min-height: 100vh; */
        background-image: url(${bgImage});
        background-repeat: no-repeat;
      }
`;