import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import theme from './utils/theme'
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './pages/Navigation';

export default function App() {

  const THEME = createTheme(theme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  )
}
