import React from 'react';
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';
import useShoppingCartContext from '../../../../../context/shoppingCart/context';
import { COLORS } from '../../../../../config/material.theme';
import ICartItem from '../../../../../shared/interfaces/ICartItem';

interface ICartItemProps {
  cartItem: ICartItem;
}

function CartItem({ cartItem }: ICartItemProps) {
  const { addProduct, removeProduct } = useShoppingCartContext();

  return (
    <Box key={cartItem.product.id}>
      <Grid container sx={{ pt: 2, pb: 2 }}>
        <Grid item xs={12} sm={6} alignItems="center" sx={{ display: 'flex' }}>
          <Box
            sx={{
              backgroundImage: `url(${cartItem.product.image})`,
              height: 50,
              width: 50,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: 50,
            }}
            aria-label="Imagem do produto"
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
            aria-label="Remover"
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
            aria-label="Adicionar"
          >
            <AddCircleOutline sx={{ color: COLORS.GREEN.DEFAULT }} />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ width: '100%' }} />
    </Box>
  );
}

export default CartItem;
