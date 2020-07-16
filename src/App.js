import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import world from './world.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          GroupHub
        </h1>
        <p> The ultimate hub to finding your next community <span role="img" aria-label="world emoji">🌐</span></p>
        <button class="button">Button</button>
        <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="80%" height="500px"/>
      </header>
      <footer className="App-footer">
        <p> Made by Anushka and Monika </p>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">hello</a>
      </footer>
    </div>
  );
}


export default App;
