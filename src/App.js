import React from 'react';
import GlobalStyles from './styles/global-styles';
import Hero from './components/home/Hero';

function App() {
  return (
    <main>
      <GlobalStyles />
      <Hero heading="Hello, my name is Jacob." />
    </main>
  );
}

export default App;
