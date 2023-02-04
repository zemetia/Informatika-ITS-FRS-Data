import React from 'react';
import logo from './logo.svg';
import Schedule from './components/schedule/Schedule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Schedule></Schedule>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
