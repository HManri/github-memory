import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/DefaultTheme';
import Spinner from '.';

describe('Spinner', () => {
  test('should render correctly', () => {
    const spinner = render(
      <ThemeProvider theme={theme}>
        <Spinner testId="spinner-test" />
      </ThemeProvider>,
    );

    expect(spinner).toMatchSnapshot();
  });
});
