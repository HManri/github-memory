import React from 'react';
import { node, bool, string, func } from 'prop-types';

import { StyledButton } from './Button.style';

export default function Button({ children, disabled, testId, onClick }) {
  return (
    <StyledButton
      data-testid={testId}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: node.isRequired,
  disabled: bool,
  testId: string,
  onClick: func,
};
