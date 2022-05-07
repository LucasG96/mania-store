import React from 'react';
import { ThemeProvider } from '@mui/material';
import './App.css';
import Router from './router';
import theme from './config/material.theme';

function App() {
  return (
    <div aria-label="Mania Store" className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
