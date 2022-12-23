import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import AppContainer from './layout/AppContainer';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { theme } from './theme';

function App() {
  return (
    <div className='App'>
      <LocalizationProvider
        dateAdapter={AdapterMoment}
        locale='fr'
        adapterLocale='fr'
      >
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
