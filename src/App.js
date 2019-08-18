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
        }}>아이템(full)</button>
        <button className="pick" onClick={() => {
          fnChangeComp(2)
        }}>아이템(core)</button>
      </div>
      <div className="container">
        <scene.comp/>
      </div>
    </div>
  );
}

export default App;
