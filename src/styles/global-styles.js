import { createGlobalStyle } from 'styled-components';
import screen from 'superior-mq';

const GlobalStyle = createGlobalStyle`
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
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', '游ゴシック' , '游ゴシック体' , YuGothic , 'Yu Gothic', 'ＭＳ ゴシック' , 'MS Gothic', sans-serif;
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

  ruby {
    rt {
      margin-bottom: 5px;
      color: var(--green);
      font-size: 1rem;
      ruby-align: center;
    }
  }

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 6.25rem;

    ${screen.below('1281px', `
      font-size: 4.6875rem;
    `)}

    ${screen.below('1024px', `
      font-size: 3.135rem;
    `)}

    ${screen.below('480px', `
      font-size: 1.5625rem;
    `)}
  }

  h2 {
    font-size: 3rem;
    line-height: 1;

    ${screen.below('1024px', `
      font-size: 2.5rem;
    `)}

    ${screen.below('768px', `
      font-size: 1.5rem;
    `)}
  }

`;

export default GlobalStyle;