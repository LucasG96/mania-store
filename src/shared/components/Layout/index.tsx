import { Container } from '@mui/material';
import React, { ReactElement } from 'react';
import Header from '../Header';

interface ILayoutProps {
  children: ReactElement;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div data-testid="layout-testid">
      <Header />
      <main>
        <Container sx={{ mt: 5 }}>{children}</Container>
      </main>
    </div>
  );
}

export default Layout;
