import React from 'react';
import { string } from 'prop-types';

import { SpinnerContainer } from './Spinner.style';

export default function Spinner({ testId }) {
  return <SpinnerContainer data-testid={testId} />;
}

Spinner.propTypes = {
  testId: string,
};
