import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  Badge,
  Box,
  Container,
} from '@mui/material';
import Logo from '../../assets/logo.svg';
import { COLORS } from '../../../config/material.theme';
import useShoppingCartContext from '../../../context/shoppingCart/context';

function Header() {
  const { totalItems } = useShoppingCartContext();

  return (
    <AppBar position="sticky" sx={{ background: COLORS.WHITE.DEFAULT }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <img src={Logo} alt="Logo" width={125} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton disableRipple aria-label="Carrinho de compras">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingBagOutlined
                  sx={{ fontSize: 35, color: COLORS.GREEN.DEFAULT }}
                />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
