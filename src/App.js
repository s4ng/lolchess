import React, { useState } from 'react';
import './App.css';
import Tier from './components/tier/tier.js';
import Material from './components/material/material.js';
import Core from './components/core/core.js';

function App() {
  const [scene, setScene] = useState({comp:Tier});

  function fnChangeComp(index) {
    switch(index) {
      case 1:  setScene({comp:Material}); break;
      case 2:  setScene({comp:Core}); break;
      default: setScene({comp:Tier});
    }
  }

  return (
    <div className="app">
      <div className="buttons">
        <button className="pick" onClick={() => {
          fnChangeComp(0);
        }}>티어</button>
        <button className="pick" onClick={() => {
          fnChangeComp(1)
        }}>조합표(full)</button>
        <button className="pick" onClick={() => {
          fnChangeComp(2)
        }}>조합표(core)</button>
      </div>
      <div className="container">
        <scene.comp/>
      </div>
      <div className="copyRight">
        ⓒ2019, <a href="https://github.com/s4ng">Sang-geun Lee</a> All rights reserved
      </div>
    </div>
  );
}

export default App;
