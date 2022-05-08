import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App rendering correctly', () => {
  render(<App />);
  const app = screen.getByLabelText('Mania Store');
  expect(app).toBeInTheDocument();
});
