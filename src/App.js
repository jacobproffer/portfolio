import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/global-styles';
import Header from './components/Header';
import Hero from './components/home/Hero';
import Intro from './components/home/Intro';
import Sites from './components/home/Sites';
import Footer from './components/Footer';
import image from './static/hero.jpg';

const Ruby = styled.ruby`
  ruby-align: start;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Hero
        image={image}
        imageAlt="Portrait of Jacob Proffer."
      />
      <main id="content">
        <Intro
          heading="インフォ"
        >
          <p><Ruby>私<rt>わたし</rt></Ruby>はアッパーミシガン<Ruby>州<rt>しゅう</rt></Ruby>のウェブ開発者です。</p>
        </Intro>
        <Sites />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
