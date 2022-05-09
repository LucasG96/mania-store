import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '..';

describe('Tests component Layout', () => {
  it('Component rendering correctly', async () => {
    render(
      <MemoryRouter>
        <Layout>
          <span>Conteúdo</span>
        </Layout>
        ,
      </MemoryRouter>,
    );

    const layout = screen.getByTestId('layout-testid');
    const header = screen.getByAltText('Logo');
    const content = screen.getByText('Conteúdo');

    expect(layout).toBeInTheDocument();
    expect(layout.children.length).toBe(2);
    expect(header).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
