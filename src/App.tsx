import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Ambiente: {process.env.REACT_APP_ENVIRONMENT}</span>
      </header>
    </div>
  );
}

export default App;
