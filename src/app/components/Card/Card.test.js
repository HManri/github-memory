import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/DefaultTheme';
import Card from '.';

describe('Card', () => {
  test('should render correctly', () => {
    const card = render(
      <ThemeProvider theme={theme}>
        <Card
          testId="card-test"
          image="https://avatars.githubusercontent.com/u/3624098?v=4"
          imageAlt="foo"
          onClick={() => null}
        />
      </ThemeProvider>,
    );

    expect(card).toMatchSnapshot();
  });

  test('should call click method', async () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Card
          testId="card-test"
          image="https://avatars.githubusercontent.com/u/3624098?v=4"
          imageAlt="foo"
          onClick={mockFunction}
        />
      </ThemeProvider>,
    );

    const cardHtml = container.querySelector('[data-testid="card-test"]');
    const imageCard = cardHtml.querySelector('img');
    expect(imageCard).toHaveStyle('opacity: 0');
    fireEvent.click(cardHtml);
    expect(mockFunction).toBeCalledTimes(1);
  });

  test('image should be visible', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Card
          testId="card-test"
          image="https://avatars.githubusercontent.com/u/3624098?v=4"
          imageAlt="foo"
          active={true}
          onClick={() => null}
        />
      </ThemeProvider>,
    );

    const image = container.querySelector('img');
    const translucidLayer = container.querySelector('[data-testid="card-test__translucid_layer"]');
    expect(image).toHaveStyle('opacity: 1');
    expect(translucidLayer).toHaveStyle('opacity: 0');
  });

  test('translucid layer should be visible and onClick is not fireing', () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Card
          testId="card-test"
          image="https://avatars.githubusercontent.com/u/3624098?v=4"
          imageAlt="foo"
          disabled={true}
          onClick={mockFunction}
        />
      </ThemeProvider>,
    );

    const image = container.querySelector('img');
    const translucidLayer = container.querySelector('[data-testid="card-test__translucid_layer"]');
    expect(image).toHaveStyle('opacity: 1');
    expect(translucidLayer).toHaveStyle('opacity: 0.8');
  });
});
