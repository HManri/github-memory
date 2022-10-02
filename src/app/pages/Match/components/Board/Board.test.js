import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/DefaultTheme';
import Board from '.';

describe('Board', () => {
  test('should render correctly', () => {
    const cards = [
      {
        id: '13352',
        imageSrc: 'https://avatars.githubusercontent.com/u/13352?v=4',
        imageAlt: 'cpojer',
        cardId: '0-13352',
      },
      {
        id: '13352',
        imageSrc: 'https://avatars.githubusercontent.com/u/13352?v=4',
        imageAlt: 'cpojer',
        cardId: '1-13352',
      },
    ];

    const board = render(
      <ThemeProvider theme={theme}>
        <Board testId="board-test" cards={cards} onFinishGame={() => null} />
      </ThemeProvider>,
    );

    expect(board).toMatchSnapshot();
  });
});
