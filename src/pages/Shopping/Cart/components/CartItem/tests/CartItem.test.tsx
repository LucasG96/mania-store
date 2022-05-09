import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from '..';
import ICartItem from '../../../../../../shared/interfaces/ICartItem';
import IProduct from '../../../../../../shared/interfaces/IProduct';
import useShoppingCartContext from '../../../../../../context/shoppingCart/context';

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

jest.mock('../../../../../../context/shoppingCart/context');
const mockedUseShoppingCartContext = jest.mocked(useShoppingCartContext);

describe('Tests component cart item', () => {
  it('Component rendering correctly', async () => {
    mockedUseShoppingCartContext.mockReturnValueOnce({
      cart: [],
      totalItems: 0,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartItem cartItem={cartItem} />);

    const image = screen.getByLabelText('Imagem do produto');
    const title = screen.getByText('Title text');
    const price = screen.getByText('R$ 123,45');
    const quantity = screen.getByText(13);
    const addButton = screen.getByLabelText('Adicionar');
    const removeButton = screen.getByLabelText('Remover');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  it('Click add product button', async () => {
    const mockAddProduct = jest.fn();
    mockedUseShoppingCartContext.mockReturnValueOnce({
      cart: [],
      totalItems: 0,
      addProduct: mockAddProduct,
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartItem cartItem={cartItem} />);

    const addButton = screen.getByLabelText('Adicionar');
    fireEvent.click(addButton);

    expect(mockAddProduct).toBeCalledTimes(1);
    expect(mockAddProduct).toBeCalledWith(cartItem.product);
  });

  it('Click remove product button', async () => {
    const mockRemoveProduct = jest.fn();
    mockedUseShoppingCartContext.mockReturnValueOnce({
      cart: [],
      totalItems: 0,
      addProduct: jest.fn(),
      removeProduct: mockRemoveProduct,
      clearCart: jest.fn(),
    });

    render(<CartItem cartItem={cartItem} />);

    const removeButton = screen.getByLabelText('Remover');
    fireEvent.click(removeButton);

    expect(mockRemoveProduct).toBeCalledTimes(1);
    expect(mockRemoveProduct).toBeCalledWith(cartItem.product);
  });
});
