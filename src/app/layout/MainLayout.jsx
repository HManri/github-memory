import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner, Title } from './MainLayout.style';

export default function MainLayout() {
  return (
    <>
      <Banner>
        <Title>GitHub Memory</Title>
      </Banner>
      <Outlet />
    </>
  );
}
