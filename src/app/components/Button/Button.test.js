import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/DefaultTheme';
import Button from '.';

describe('Button', () => {
  test('should render correctly', () => {
    const button = render(
      <ThemeProvider theme={theme}>
        <Button testId="button-test">
          <span>I am a button</span>
        </Button>
      </ThemeProvider>,
    );

    expect(button).toMatchSnapshot();
  });

  test('should render children', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button testId="button-test">
          <span>This is a test component</span>
        </Button>
      </ThemeProvider>,
    );

    expect(getByText(/This is a test component/i)).toBeInTheDocument();
  });

  test('should call click method', () => {
    const mockFunction = jest.fn();
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button testId="test-mock-button" onClick={mockFunction}>
          <span>Click me!</span>
        </Button>
      </ThemeProvider>,
    );

    expect(container.firstChild.getAttribute('data-testid')).toContain('test-mock-button');

    const htmlButton = container.querySelector('button');
    fireEvent.click(htmlButton);
    expect(mockFunction).toBeCalledTimes(1);
  });

  test('should not call click method because is disabled', () => {
    const mockFunction = jest.fn();
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button testId="test-mock-button" onClick={mockFunction} disabled>
          <span>Click me!</span>
        </Button>
      </ThemeProvider>,
    );

    expect(container.firstChild.getAttribute('data-testid')).toContain('test-mock-button');

    const htmlButton = container.querySelector('button');
    expect(htmlButton.hasAttribute('disabled')).toBe(true);
    fireEvent.click(htmlButton);
    expect(mockFunction).not.toBeCalled();
  });
});
