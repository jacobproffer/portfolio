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
        <main id="main-content">
          <Hero
            heading="ウェブ開発者"
            image={image}
            imageAlt="Portrait of Jacob Proffer."
          />
          <Intro heading="Info">
            <p>I am a Front-End Developer from Upper Michigan, currently working at Elegant Seagulls. I build speedy websites that are accessible and usable. For the past four years, I have focused on custom WordPress themes with Advanced Custom Fields. Most recently, I have grown a love for React and Hugo.</p>
            <p>When I am not coding, I focus the majority of my time on learning Japanese and long distance trail running.</p>
          </Intro>
          <Sites heading="Sites" />
        </main>
        <Footer />
      </Wrap>
    </React.Fragment>
  );
}

export default App;
