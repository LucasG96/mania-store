import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import useShoppingCartContext from '../../../../context/shoppingCart/context';
import Header from '..';

jest.mock('../../../../context/shoppingCart/context');
const mockedUseShoppingCartContext = jest.mocked(useShoppingCartContext);

describe('Tests component Header', () => {
  it('Component rendering correctly', async () => {
    mockedUseShoppingCartContext.mockReturnValue({
      cart: [],
      totalItems: 57,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText('Logo');
    const shoppingCart = screen.getByLabelText('Carrinho de compras');
    const badgeQuantity = screen.getByText(57);
    const shoppingCartLink = badgeQuantity.parentElement?.firstChild;

    expect(logo).toBeInTheDocument();
    expect(shoppingCart).toBeInTheDocument();
    expect(badgeQuantity).toBeInTheDocument();
    expect(shoppingCartLink).toHaveAttribute('href', '/shopping/cart');
  });
});
