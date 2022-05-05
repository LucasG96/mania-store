import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ambiente: {process.env.REACT_APP_ENVIRONMENT}</p>
      </header>
    </div>
  );
}

export default App;
