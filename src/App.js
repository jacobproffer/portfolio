import React from 'react';
import GlobalStyles from './styles/global-styles';
import Hero from './components/home/Hero';
import Footer from './components/Footer';
import image from './static/hero.jpg';

function App() {
  return (
    <React.Fragment>
      <main>
        <GlobalStyles />
        <Hero heading="ウェブ開発者" image={image} imageAlt="Jacob Proffer." />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
