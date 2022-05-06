import React, { ReactElement } from 'react';
import Header from '../Header';

interface ILayoutProps {
  children: ReactElement;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
