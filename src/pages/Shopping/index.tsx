import React from 'react';
import IRoute from '../../shared/interfaces/IRoute';
import { ApplicationRoutes } from '../../shared/utils/enum';
import ShoppingCart from './Cart';

const shoppingModule: IRoute[] = [
  {
    path: ApplicationRoutes.ShoppingCart,
    component: <ShoppingCart />,
  },
];

export default shoppingModule;
