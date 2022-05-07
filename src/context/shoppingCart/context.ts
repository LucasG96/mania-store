import React, { useContext } from 'react';
import ICartItem from '../../shared/interfaces/ICartItem';
import IProduct from '../../shared/interfaces/IProduct';

interface IShoppingCartContextProps {
  cart: ICartItem[];
  totalItems: number;
  addProduct: (product: IProduct) => void;
  removeProduct: () => void;
  clearCart: () => void;
}

export const DEFAULT_VALUE = {
  cart: [],
  totalItems: 0,
  addProduct: () => null,
  removeProduct: () => null,
  clearCart: () => null,
} as IShoppingCartContextProps;

export const ShoppingCartContext =
  React.createContext<IShoppingCartContextProps>(DEFAULT_VALUE);

const useShoppingCartContext = () => useContext(ShoppingCartContext);

export default useShoppingCartContext;
