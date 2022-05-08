import { createTheme } from '@mui/material/styles';

export const COLORS = {
  BLACK: {
    DEFAULT: '#171717',
    LIGHT: '#363636',
  },
  ORANGE: {
    DEFAULT: '#E29101',
    LIGHT: '#F9A424',
  },
  BLUE: {
    DEFAULT: '#1A2767',
    LIGHT: '#363D80',
  },
  LILAC: {
    DEFAULT: '#A86FED',
    LIGHT: '#B97FFF',
  },
  GREEN: {
    DEFAULT: '#018684',
  },
  WHITE: {
    DEFAULT: '#FFF',
  },
  RED: {
    LIGHT: '#ff5252',
  },
};

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: { main: COLORS.BLUE.DEFAULT },
    secondary: { main: COLORS.ORANGE.LIGHT },
    success: { main: COLORS.GREEN.DEFAULT },
    error: { main: COLORS.RED.LIGHT },
    text: {
      primary: COLORS.BLACK.DEFAULT,
      secondary: COLORS.BLACK.LIGHT,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: COLORS.GREEN.DEFAULT,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: COLORS.WHITE.DEFAULT,
        },
      },
    },
  },
});

export default theme;
