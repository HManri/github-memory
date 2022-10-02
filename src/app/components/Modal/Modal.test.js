import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/DefaultTheme';
import Modal from '.';

describe('Modal', () => {
  test('should render correctly', () => {
    const modal = render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} testId="modal-test" onClose={() => null}>
          <div>Foo Bar</div>
        </Modal>
      </ThemeProvider>,
    );

    expect(modal).toMatchSnapshot();
  });

  test('should call onClose', () => {
    //  Disable Warning: render(): Rendering components directly into document.body is discouraged.
    const console = global.console;
    global.console = { error: jest.fn() };

    const mockFunction = jest.fn();
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} testId="modal-test" onClose={mockFunction}>
          <div>Foo Bar</div>
        </Modal>
      </ThemeProvider>,
      { container: document.body },
    );

    const closeButton = container.querySelector('div');
    fireEvent.click(closeButton);
    expect(mockFunction).toBeCalledTimes(1);

    unmount();
    global.console = console;
  });
});
