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

function Header() {
  return (
    <AppBar position="static" sx={{ background: COLORS.WHITE.DEFAULT }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <img src={Logo} alt="Logo" width={125} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton disableRipple aria-label="Carrinho de compras">
              <Badge badgeContent={4} color="success">
                <ShoppingBagOutlined
                  sx={{ fontSize: 35, color: COLORS.ORANGE.DEFAULT }}
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
