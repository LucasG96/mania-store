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

function Header() {
  return (
    <AppBar position="static" sx={{ background: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <img src={Logo} alt="Logo" width={125} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="success">
                <ShoppingBagOutlined sx={{ fontSize: 40 }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
