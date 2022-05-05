import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/NotFound';
import ProductModule from '../pages/Product';
import ShoppingModule from '../pages/Shopping';

function Router() {
  const routes = [...ProductModule, ...ShoppingModule];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
