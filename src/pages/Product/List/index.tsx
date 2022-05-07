import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ProductService from '../../../services/ProductService';
import IProduct from '../../../shared/interfaces/IProduct';
import ProductCard from './components/ProductCard';

function ProductList() {
  const [producs, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await ProductService.list();
      setProducts(data as IProduct[]);
    }

    getData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {producs.map((product) => (
        <ProductCard product={product} />
      ))}
    </Box>
  );
}

export default ProductList;
