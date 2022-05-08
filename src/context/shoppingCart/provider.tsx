import React, { ReactElement, useMemo, useState } from 'react';
import ICartItem from '../../shared/interfaces/ICartItem';
import IProduct from '../../shared/interfaces/IProduct';
import { DEFAULT_VALUE, ShoppingCartContext } from './context';

interface IShoppingCartProviderProps {
  children: ReactElement;
}

function ShoppingCartProvider({ children }: IShoppingCartProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>(DEFAULT_VALUE.cart);
  const [totalItems, setTotalItems] = useState(0);

  const addProduct = (product: IProduct) => {
    let newCart: ICartItem[] = [];

    const oldCartItem = cart.find(
      (cartItem) => cartItem.product.id === product.id,
    );

    if (!oldCartItem) newCart = [...cart, { product, quantity: 1 }];

    if (oldCartItem)
      newCart = cart.map((cartItem) => {
        const newCartItem = cartItem;
        if (cartItem.product.id === product.id) newCartItem.quantity += 1;
        return newCartItem;
      });

    const newTotalItens = totalItems + 1;

    setTotalItems(newTotalItens);
    setCart(newCart);
  };

  const removeProduct = (product: IProduct) => {
    const oldCartItem = cart.find(
      (cartItem) => cartItem.product.id === product.id,
    );
    const oldQuantity = oldCartItem?.quantity || 0;

    let newCart: ICartItem[] = [];

    if (oldQuantity === 1)
      newCart = cart.filter((cartItem) => cartItem.product.id !== product.id);

    if (oldQuantity > 1)
      newCart = cart.map((cartItem) => {
        const newCartItem = cartItem;
        if (cartItem.product.id === product.id) newCartItem.quantity -= 1;
        return newCartItem;
      });

    const newTotalItens = totalItems - 1;

    setTotalItems(newTotalItens);
    setCart(newCart);
  };
  const clearCart = () => {
    setTotalItems(0);
    setCart([]);
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
