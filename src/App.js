import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import themes from './themes';

const App = () => {
  const customization = {
    isOpen: [],
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12,
    opened: true
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  )

}

export default App