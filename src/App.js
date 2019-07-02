import React from 'react';
import GlobalStyles from './styles/global-styles';
import Wrap from './components/Wrap';
import Header from './components/Header';
import Hero from './components/home/Hero';
import Intro from './components/home/Intro';
import Sites from './components/home/Sites';
import Footer from './components/Footer';
import image from './static/hero.jpg';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrap>
        <Header />
        <Hero
          heading="ウェブ開発者"
          image={image}
          imageAlt="Portrait of Jacob Proffer."
        />
        <main id="content">
          <Intro
            heading="インフォ"
          >
            <p>私はアッパーミシガン州のウェブ開発者です。</p>
          </Intro>
          <Sites heading="作品" />
        </main>
        <Footer />
      </Wrap>
    </React.Fragment>
  );
}

export default App;
