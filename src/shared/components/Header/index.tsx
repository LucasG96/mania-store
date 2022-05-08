import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
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
import { ApplicationRoutes } from '../../utils/enum';

function Header() {
  const { totalItems } = useShoppingCartContext();

  return (
    <AppBar position="sticky" sx={{ background: COLORS.WHITE.DEFAULT }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Link to={ApplicationRoutes.ProdutList}>
              <img src={Logo} alt="Logo" width={125} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton disableRipple aria-label="Carrinho de compras">
              <Badge badgeContent={totalItems} color="secondary">
                <Link to={ApplicationRoutes.ShoppingCart}>
                  <ShoppingBagOutlined
                    sx={{ fontSize: 35, color: COLORS.GREEN.DEFAULT }}
                  />
                </Link>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
