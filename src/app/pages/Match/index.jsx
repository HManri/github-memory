import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GAME_RESULT } from 'constants/gameResult';
import { useGetImages } from 'hooks/useGetImages';
import { randomizeArray } from 'utils/randomizeArray';
import Board from 'pages/Match/components/Board';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import {
  MatchWrapper,
  BoardWrapper,
  ModalBody,
  ModalBodyTitle,
  ModalBodyScore,
  ModalBodyActions,
  LoadingGame,
  SpinnerWrapper,
} from './Match.style';

export default function Match() {
  const navigate = useNavigate();
  const [getImages, isLoadingImages] = useGetImages();
  const [cards, setCards] = useState();
  const [isOpenFinishMatchModal, setIsOpenFinishMatchModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [typeFinishGame, setTypeFinishGame] = useState(null);

  const handleOnFinishGame = (status, score) => {
    setFinalScore(score);
    setTypeFinishGame(status);
    setIsOpenFinishMatchModal(true);
  };

  const handleOnClickPlayAgain = () => {
    initializeGame();
    setIsOpenFinishMatchModal(false);
    setTypeFinishGame(null);
    setFinalScore(0);
  };

  const initializeGame = useCallback(async () => {
    const images = await getImages();

    const cards = randomizeArray(
      images.reduce((arrayCards, eachImage, index) => {
        const newCard = { ...eachImage, cardId: `${index}-${eachImage.id}` };
        arrayCards.push(newCard);
        arrayCards.push(newCard);
        return arrayCards;
      }, []),
    );
    setCards(cards);
  }, [getImages]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const isLoading = !cards || isLoadingImages;

  return (
    <MatchWrapper data-testid="match">
      <BoardWrapper data-testid="match__board">
        {isLoading && (
          <LoadingGame data-testid="match__board__loading">
            <SpinnerWrapper>
              <Spinner testId="match__board__loading__spinner" />
            </SpinnerWrapper>
          </LoadingGame>
        )}
        {!isLoading && (
          <Board testId="match__board__game" cards={cards} onFinishGame={handleOnFinishGame} />
        )}
      </BoardWrapper>

      <Modal
        testId="match__modal"
        isOpen={isOpenFinishMatchModal}
        onClose={() => setIsOpenFinishMatchModal(false)}
      >
        <ModalBody data-testid="match__modal__body">
          <ModalBodyTitle>{typeFinishGame === GAME_RESULT.WIN && `You Win!`}</ModalBodyTitle>
          <ModalBodyTitle>{typeFinishGame === GAME_RESULT.LOSE && `You lose :-(`}</ModalBodyTitle>
          <ModalBodyScore>{`Score: ${finalScore}`}</ModalBodyScore>

          <ModalBodyActions data-testid="match__modal__body__actions">
            <Button testId="match__modal__body__action__go_home_btn" onClick={() => navigate('/')}>
              Go home
            </Button>
            <Button testId="match__modal__body__action__play_btn" onClick={handleOnClickPlayAgain}>
              Play again
            </Button>
          </ModalBodyActions>
        </ModalBody>
      </Modal>
    </MatchWrapper>
  );
}
