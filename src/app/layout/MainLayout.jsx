import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner, Title, Wrapper } from './MainLayout.style';

export default function MainLayout() {
  return (
    <>
      <Banner data-testid="app__banner">
        <Title>GitHub Memory</Title>
      </Banner>
      <Wrapper data-testid="app__wrapper">
        <Outlet />
      </Wrapper>
    </>
  );
}
