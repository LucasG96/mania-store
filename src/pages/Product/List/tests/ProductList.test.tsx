import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductService from '../../../../services/ProductService';
import IProduct from '../../../../shared/interfaces/IProduct';
import ProductList from '..';

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

describe('Tests page product list', () => {
  it('Component rendering correctly', async () => {
    jest
      .spyOn(ProductService, 'list')
      .mockResolvedValue([
        product,
        { ...product, id: 2 },
        { ...product, id: 3 },
      ]);

    render(<ProductList />);

    const containerProducts = screen.getByLabelText('Listagem de produtos');
    const productList = await screen.findAllByLabelText('Detalhes do produto');

    expect(containerProducts).toBeInTheDocument();
    expect(productList.length).toBe(3);
  });
});
