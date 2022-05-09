import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductCard from '..';
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

jest.mock('../../../../../../context/shoppingCart/context');
const mockedUseShoppingCartContext = jest.mocked(useShoppingCartContext);

describe('Tests component ProductCard', () => {
  it('Component rendering correctly', async () => {
    mockedUseShoppingCartContext.mockReturnValueOnce({
      cart: [],
      totalItems: 0,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<ProductCard product={product} />);

    const image = screen.getByAltText('Imagem do produto');
    const category = screen.getByText('Category text');
    const ratingRate = screen.getByLabelText('Avaliação do produto');
    const ratingCount = screen.getByText('123');
    const price = screen.getByText('R$ 123,45');
    const title = screen.getByText('Title text');
    const description = screen.getByText('description text');
    const botaoAdicionar = screen.getByText('adicionar ao carrinho');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'www.google.com');
    expect(category).toBeInTheDocument();
    expect(ratingRate).toBeInTheDocument();
    expect(ratingCount).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(botaoAdicionar).toBeInTheDocument();
  });

  it('Description exeeds 50 characters', async () => {
    mockedUseShoppingCartContext.mockReturnValueOnce({
      cart: [],
      totalItems: 0,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    const newProduct = {
      ...product,
      description: 'Lorem ipsum netus ante sem varius sodales, ligulas carmen',
    };

    render(<ProductCard product={newProduct} />);

    const description = screen.getByText(
      'lorem ipsum netus ante sem varius sodales, ligulas',
    );
    const showMore = screen.getByText('... ver mais');

    expect(description).toBeInTheDocument();
    expect(showMore).toBeInTheDocument();
  });

  it('Click show more button', async () => {
    mockedUseShoppingCartContext.mockReturnValue({
      cart: [],
      totalItems: 0,
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
      clearCart: jest.fn(),
    });

    const newProduct = {
      ...product,
      description: 'Lorem ipsum netus ante sem varius sodales, ligulas carmen',
    };

    render(<ProductCard product={newProduct} />);

    const descriptionBeforeClick = screen.getByText(
      'lorem ipsum netus ante sem varius sodales, ligulas',
    );
    expect(descriptionBeforeClick).toBeInTheDocument();

    const showMore = screen.getByText('... ver mais');
    fireEvent.click(showMore);

    const descriptionAfterClick = screen.getByText(
      'lorem ipsum netus ante sem varius sodales, ligulas carmen',
    );
    expect(descriptionAfterClick).toBeInTheDocument();
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

    render(<ProductCard product={product} />);

    const addButton = screen.getByText('adicionar ao carrinho');
    fireEvent.click(addButton);

    expect(mockAddProduct).toBeCalledTimes(1);
    expect(mockAddProduct).toBeCalledWith(product);
  });
});
