import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import Calculator from './components/calculator';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Calculator/>

    </div>
  );
}

export default App;
