import React from 'react';
import { string, func, bool } from 'prop-types';

import { Wrapper } from './Card.style';

export default function Card({ testId, image, imageAlt, active, disabled, onClick }) {
  return (
    <Wrapper
      data-testid={testId}
      active={active}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      <img src={image} alt={imageAlt} />
    </Wrapper>
  );
}

Card.propTypes = {
  testId: string,
  image: string.isRequired,
  imageAlt: string.isRequired,
  active: bool,
  disabled: bool,
  onClick: func.isRequired,
};
