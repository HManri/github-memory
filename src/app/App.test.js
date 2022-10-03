import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/defaultTheme';
import App from 'App.jsx';

describe('App', () => {
  test('should render correctly with Router', () => {
    const app = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );

    expect(app).toMatchSnapshot();
  });
});
