import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange, red } from '@mui/material/colors';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#CCC',
    },
    secondary: {
      main: orange[500],
    },
    myCustomColor: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },
  typography: {
    myVariant: {
      fontSize: '3rem',
      color: orange[500],
    },
  },
  // spacing: 1,
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
