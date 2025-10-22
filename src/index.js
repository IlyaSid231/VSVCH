import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { AppProvider } from './context/AppContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    primary: { main: '#274C5B' },
    secondary: { main: '#7EB693' },
    background: { default: '#FFFFFF', paper: '#F9F8F8' },
    text: { primary: '#274C5B', secondary: '#525C60' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: '4rem', lineHeight: 1.2 },
    h2: { fontSize: '2.5rem' },
    h3: { fontSize: '1.875rem' },
    body1: { fontSize: '1.125rem', lineHeight: 1.6 },
  },
  breakpoints: {
    values: { xs: 320, sm: 768, md: 1024, lg: 1440 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '0.9375rem' },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);