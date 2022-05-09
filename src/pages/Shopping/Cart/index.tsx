import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Link as LinkUI } from '@mui/material';
import useShoppingCartContext from '../../../context/shoppingCart/context';
import { ApplicationRoutes } from '../../../shared/utils/enum';
import CartItem from './components/CartItem';

function ShoppingCart() {
  const { cart, clearCart } = useShoppingCartContext();

  return (
    <Box>
      <Typography color="primary" variant="h5" sx={{ mb: 7 }}>
        seu carrinho
      </Typography>
      {cart.length > 0 && (
        <Button
          color="error"
          variant="contained"
          onClick={clearCart}
          sx={{
            border: 'none',
            borderRadius: 50,
            textTransform: 'lowercase',
            mb: 7,
          }}
        >
          esvaziar carrinho
        </Button>
      )}
      {cart.length === 0 && (
        <Typography variant="h6">
          Ops... seu carrinho está vazio.{' '}
          <LinkUI
            underline="none"
            component={Link}
            to={ApplicationRoutes.ProdutList}
          >
            Clique aqui
          </LinkUI>{' '}
          e continue suas compras
        </Typography>
      )}
      {cart.map((cartItem) => (
        <CartItem key={cartItem.product.id} cartItem={cartItem} />
      ))}
    </Box>
  );
}

export default ShoppingCart;
