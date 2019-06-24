import { createGlobalStyle } from 'styled-components';
import screen from 'superior-mq';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900&display=swap');

  :root {
    --container: 1220px;
    --white: #fff;
    --black: #010101;
    --green: #00b378;
    --red: #ff572b;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  ::selection {
    color: var(--white);
    background: var(--red); 
  }

  * {
    &:focus {
      border-color: var(--red);
      outline: none;
      box-shadow: inset 0 1px 2px var(--red), 0 0 0 .2em var(--red);
    }
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    position: relative;
    margin: 0;
    color: var(--white);
    background: var(--black);
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    border: 0;
  }

  main {
    position: relative;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;

    ${screen.below('768px', `
      font-size: 1.25rem;
    `)}
  }

  h2 {
    font-size: 6.25rem;

    ${screen.below('1280px', `
      font-size: 4.6875rem;
    `)}

    ${screen.below('1024px', `
      font-size: 3.135rem;
    `)}

    ${screen.below('480px', `
      font-size: 1.5625rem;
    `)}
  }

  h3 {
    font-size: 3rem;

    ${screen.below('1024px', `
      font-size: 2.5rem;
    `)}

    ${screen.below('768px', `
      font-size: 1.5rem;
    `)}
  }

`;

export default GlobalStyle;