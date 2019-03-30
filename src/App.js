import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drum from './Components/Drum/Drum';
import KeyStateProvider from './Components/KeyStateProvider/KeyStateProvider';


const App = () => {
  return (
    <KeyStateProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Drum />
      </div>
    </KeyStateProvider>
  );
}

export default App;
