import React from 'react';

import './global.css'

import logoArtsFlora from './assets/LOGO2.svg';

import Routes from './routes';

function App() {

  return (
    <div>
      <Routes />
      <div className="development">
        <h3> Developed by {" "}
          <a href="https://www.linkedin.com/in/marcoslopess/" target="blank" aria-label="Art's Flora">
            Marcos Lopes
            </a>
        </h3>
        <h3> © Copyright 2020  {" "} </h3>
        <a href="https://artsflora.com.br" target="blank" aria-label="Art's Flora">
          <img
            className="imgLogo"
            src={logoArtsFlora}
            width="70px"
            alt="APIFY"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
