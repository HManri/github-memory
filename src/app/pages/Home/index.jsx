import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import {
  HomeWrapper,
  HomeFloating,
  Title,
  MainTitle,
  StrongTitle,
  HomeActions,
  ButtonText,
} from './Home.style';

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <HomeFloating>
        <Title>
          <MainTitle>Welcome to</MainTitle>
          <StrongTitle>GitHub Memory</StrongTitle>
        </Title>

        <HomeActions>
          <Button testId="start_game__btn" onClick={() => navigate('/match')}>
            <ButtonText>Start</ButtonText>
          </Button>
        </HomeActions>
      </HomeFloating>
    </HomeWrapper>
  );
}
