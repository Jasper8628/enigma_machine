import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/buttons'
import Bulbs from './components/bulbs'
import Board from './components/messageBoard'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(config);

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Enigma Machine</h1>
        <Bulbs />
        <Buttons />
      </div>
      {/* <Board /> */}

    </div>
  );
}

export default App;
