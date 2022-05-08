import React, { useState } from 'react';
import { AddShoppingCart } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Typography,
} from '@mui/material';
import IProduct from '../../../../../shared/interfaces/IProduct';
import useShoppingCartContext from '../../../../../context/shoppingCart/context';

interface IProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: IProductCardProps) {
  const [showMore, setShowMore] = useState(false);

  const { addProduct } = useShoppingCartContext();

  const maxSizeDescription = 50;
  const descriptionExceedsSizeLimit =
    product.description.length > maxSizeDescription;

  const startDescription = descriptionExceedsSizeLimit
    ? product.description.substring(0, maxSizeDescription)
    : product.description;

  const endDescription = descriptionExceedsSizeLimit
    ? product.description.substring(
        maxSizeDescription,
        product.description.length,
      )
    : product.description;

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, mb: 5 }}>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt="Imagem do produto"
      />
      <CardContent>
        <Typography
          component="div"
          variant="caption"
          sx={{
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {product.category}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Rating
              defaultValue={product.rating.rate}
              precision={0.1}
              readOnly
              sx={{ mr: 1, fontSize: '1rem' }}
              aria-label="Avaliação do produto"
            />
            {product.rating.count}
          </Box>
        </Typography>

        <Typography
          variant="h6"
          align="left"
          sx={{ fontWeight: 'bold', mt: 1, mb: 2 }}
        >
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>

        <Typography
          variant="body1"
          align="left"
          sx={{ fontWeight: 'bold', mt: 2, mb: 2 }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" align="left">
          {startDescription.toLowerCase()}
          {descriptionExceedsSizeLimit && !showMore && (
            <Link
              onClick={() => setShowMore(true)}
              sx={{ cursor: 'pointer' }}
              underline="none"
            >
              ... ver mais
            </Link>
          )}
          {showMore && endDescription.toLocaleLowerCase()}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography
          component={Box}
          variant="body1"
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => addProduct(product)}
            sx={{
              borderRadius: 50,
              textTransform: 'lowercase',
            }}
          >
            <AddShoppingCart sx={{ mr: 2 }} />
            adicionar ao carrinho
          </Button>
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
