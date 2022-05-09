import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ICartItem from '../../../../shared/interfaces/ICartItem';
import IProduct from '../../../../shared/interfaces/IProduct';
import ShoppingCart from '..';
import useShoppingCartContext from '../../../../context/shoppingCart/context';

const product: IProduct = {
  id: 1,
  image: 'www.google.com',
  category: 'Category text',
  title: 'Title text',
  description: 'Description text',
  price: 123.45,
  rating: {
    count: 123,
    rate: 4.5,
  },
};

const cartItem: ICartItem = {
  product,
  quantity: 13,
};

jest.mock('../../../../context/shoppingCart/context');
const mockedUseShoppingCartContext = jest.mocked(useShoppingCartContext);

describe('Tests page shopping cart', () => {
  it('Shopping cart is not empty', async () => {
    mockedUseShoppingCartContext.mockReturnValue({
      cart: [cartItem],
      totalItems: 1,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<ShoppingCart />);

    const image = screen.getByText('seu carrinho');
    const container = image.parentElement;
    const clearCartButton = screen.getByText('esvaziar carrinho');
    const productTitle = screen.getByText('Title text');

    expect(image).toBeInTheDocument();
    expect(container?.children.length).toBe(3);
    expect(clearCartButton).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
  });

  it('Shopping cart is empty', async () => {
    mockedUseShoppingCartContext.mockReturnValue({
      cart: [],
      totalItems: 1,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    render(
      <MemoryRouter>
        <ShoppingCart />
      </MemoryRouter>,
    );

    const image = screen.getByText('seu carrinho');
    const container = image.parentElement;
    const message = screen.getByText(
      'Ops... seu carrinho está vazio. e continue suas compras',
    );
    const messageLink = screen.getByText('Clique aqui');

    expect(image).toBeInTheDocument();
    expect(container?.children.length).toBe(2);
    expect(message).toBeInTheDocument();
    expect(messageLink).toBeInTheDocument();
    expect(messageLink).toHaveAttribute('href', '/product/list');
  });

  it('Click clear cart button', async () => {
    const mockClearCart = jest.fn();
    mockedUseShoppingCartContext.mockReturnValue({
      cart: [cartItem],
      totalItems: 1,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: mockClearCart,
    });

    render(<ShoppingCart />);

    const clearCartButton = screen.getByText('esvaziar carrinho');
    fireEvent.click(clearCartButton);

    expect(mockClearCart).toBeCalledTimes(1);
  });
});
