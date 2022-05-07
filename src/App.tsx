import React from 'react';
import { ThemeProvider } from '@mui/material';
import './App.css';
import Router from './router';
import theme from './config/material.theme';
import ShoppingCartProvider from './context/shoppingCart/provider';

function App() {
  return (
    <div aria-label="Mania Store" className="App">
      <ThemeProvider theme={theme}>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
