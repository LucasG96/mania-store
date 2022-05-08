import { Typography, Box } from '@mui/material';
import { SearchOffOutlined } from '@mui/icons-material';
import React from 'react';
import { COLORS } from '../../config/material.theme';

function NotFound() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="h5">Ops... Página não encontrada.</Typography>
      <Typography variant="body1">
        Por favor, verifique o endereço digitado e tente novamente.
      </Typography>
      <SearchOffOutlined
        aria-label="Ícone página não encontrada"
        sx={{ mt: 5, fontSize: 70, color: COLORS.BLACK.LIGHT }}
      />
    </Box>
  );
}

export default NotFound;
