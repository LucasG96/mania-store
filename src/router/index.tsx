import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/NotFound';
import ProductModule from '../pages/Product';
import ShoppingModule from '../pages/Shopping';
import Layout from '../shared/components/Layout';
import { ApplicationRoutes } from '../shared/utils/enum';

function Router() {
  const routes = [...ProductModule, ...ShoppingModule];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout>{route.component}</Layout>}
          />
        ))}
        <Route
          path="/"
          element={<Navigate to={ApplicationRoutes.ProdutList} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
