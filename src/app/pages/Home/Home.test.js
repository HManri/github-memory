import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/DefaultTheme';
import Home from '.';

describe('Home', () => {
  test('should render correctly', () => {
    const home = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Home testId="home-test" />
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(home).toMatchSnapshot();
  });
});
