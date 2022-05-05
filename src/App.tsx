import React from 'react';
import './App.css';
import { AccessTime } from '@mui/icons-material';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          Learn React <AccessTime sx={{ fontSize: 50 }} />
          <Button variant="contained">Acessar</Button>
        </a>
      </header>
    </div>
  );
}

export default App;
