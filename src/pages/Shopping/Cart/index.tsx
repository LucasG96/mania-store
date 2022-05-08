import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  Link as LinkUI,
} from '@mui/material';
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';
import useShoppingCartContext from '../../../context/shoppingCart/context';
import { COLORS } from '../../../config/material.theme';
import { ApplicationRoutes } from '../../../shared/utils/enum';

function ShoppingCart() {
  const { cart, addProduct, removeProduct, clearCart } =
    useShoppingCartContext();

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
        <Box key={cartItem.product.id}>
          <Grid container sx={{ pt: 2, pb: 2 }}>
            <Grid
              item
              xs={12}
              sm={6}
              alignItems="center"
              sx={{ display: 'flex' }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${cartItem.product.image})`,
                  height: 50,
                  width: 50,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: 50,
                }}
              />
              <Typography
                component="div"
                variant="body1"
                align="left"
                sx={{ ml: 2 }}
              >
                {cartItem.product.title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              justifyContent="center"
              alignItems="center"
              sx={{ display: 'flex' }}
            >
              <Typography variant="body1">
                {cartItem.product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              justifyContent="center"
              alignItems="center"
              sx={{ display: 'flex' }}
            >
              <IconButton
                onClick={() => removeProduct(cartItem.product)}
                disableRipple
                sx={{ mr: 2 }}
              >
                <RemoveCircleOutline sx={{ color: COLORS.RED.LIGHT }} />
              </IconButton>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {cartItem.quantity}
              </Typography>
              <IconButton
                onClick={() => addProduct(cartItem.product)}
                disableRipple
                sx={{ ml: 2 }}
              >
                <AddCircleOutline sx={{ color: COLORS.GREEN.DEFAULT }} />
              </IconButton>
            </Grid>
          </Grid>
          <Divider sx={{ width: '100%' }} />
        </Box>
      ))}
    </Box>
  );
}

export default ShoppingCart;
