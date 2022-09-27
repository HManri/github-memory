import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'globalStyles';
import theme from 'theme/defaultTheme';
import 'reset.css';
import App from 'App';

const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
