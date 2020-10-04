import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/buttons'
import Bulbs from './components/bulbs'

function App() {
  return (
    <div className="container">
      <h1>Enigma Machine</h1>
      <Bulbs />
      <Buttons />
    </div>
  );
}

export default App;
