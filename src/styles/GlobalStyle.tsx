import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: starWarsFont;
    src: url(./assets/Starjedi.ttf);
  }

  * {
    padding: 0;
    margin: 0;

    font-family: 'Secular One', sans-serif;
  }

  body {
    background-image: url(./assets/stars.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    height: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;