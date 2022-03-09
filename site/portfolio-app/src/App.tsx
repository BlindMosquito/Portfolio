import React from 'react';
import wifeAndI from './images/wifeAndI.jpg';
import Navbar from './navbar/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <img className="App-logo" src={wifeAndI} alt="Wife and I" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>
  );
}

export default App;
