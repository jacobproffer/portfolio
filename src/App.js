import React from 'react';
import GlobalStyles from './styles/global-styles';
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
      <Header />
      <Hero
        heading="ウェブ開発者"
        image={image}
        imageAlt="Jacob Proffer."
      />
      <main>
        <Intro
          heading="インフォ"
        >
          <p>7中フやず康89記表育び祭周よさ止94会ぱふ芸主圧ラ感鋼ハナ度入ずぜり共本中ほ点死スカ会物タレエ通44他力拡盛1続団易針ーえ。気フ実進ラハヱ野粗会ぶじもぎ狙時だょス芸表ど最国ツセソタ索康っスぜ済残だばにて稷信ミネルレ就予いすづ内切ルリ三英ユ読計ハア改対載ニムホヲ要径猶わス。</p>
        </Intro>
        <Sites />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
