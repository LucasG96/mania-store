import React from 'react';
import IRoute from '../../shared/interfaces/IRoute';
import { ApplicationRoutes } from '../../shared/utils/enum';
import ProductList from './List';

const productModule: IRoute[] = [
  {
    path: ApplicationRoutes.ProdutList,
    component: <ProductList />,
  },
];

export default productModule;
