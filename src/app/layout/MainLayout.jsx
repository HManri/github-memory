import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner, Title, Wrapper } from './MainLayout.style';

export default function MainLayout() {
  return (
    <>
      <Banner>
        <Title>GitHub Memory</Title>
      </Banner>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}
