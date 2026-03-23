import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9933', // Saffron
      dark: '#E67E22',
    },
    secondary: {
      main: '#800000', // Maroon/Wine color from your Donate icon
    },
    background: {
      default: '#fffaf5',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h2: { fontWeight: 700 },
  },
});

export default theme;