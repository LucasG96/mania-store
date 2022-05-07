import React, { ReactElement, useMemo, useState } from 'react';
import ICartItem from '../../shared/interfaces/ICartItem';
import { DEFAULT_VALUE, ShoppingCartContext } from './context';

interface IShoppingCartProviderProps {
  children: ReactElement;
}

function ShoppingCartProvider({ children }: IShoppingCartProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>(DEFAULT_VALUE.cart);
  const [totalItems, setTotalItems] = useState(0);

  const addProduct = () => {
    console.log(totalItems);
    const newTotalItens = totalItems + 1;
    setTotalItems(newTotalItens);
  };
  const removeProduct = () => {
    console.log('remover produto');
  };
  const clearCart = () => {
    console.log('limpar carrinho');
  };

  const value = useMemo(
    () => ({
      cart,
      totalItems,
      addProduct,
      removeProduct,
      clearCart,
    }),
    [cart, totalItems, addProduct, removeProduct, clearCart],
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
