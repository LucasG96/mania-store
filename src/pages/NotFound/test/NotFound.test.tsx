import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '..';

describe('Tests page NotFound', () => {
  it('Page rendering correctly', async () => {
    render(<NotFound />);

    const title = screen.getByText('Ops... Página não encontrada.');
    const description = screen.getByText(
      'Por favor, verifique o endereço digitado e tente novamente.',
    );
    const icon = screen.getByLabelText('Ícone página não encontrada');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
