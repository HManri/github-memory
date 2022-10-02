import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GAME_RESULT } from 'constants/gameResult';
import { useGetImages } from 'hooks/useGetImages';
import { randomizeArray } from 'utils/randomizeArray';
import Board from 'pages/Match/components/Board';
import Modal from 'components/Modal';
import Button from 'components/Button';
import {
  MatchWrapper,
  BoardWrapper,
  ModalBody,
  ModalBodyTitle,
  ModalBodyScore,
  ModalBodyActions,
} from './Match.style';

export default function Match() {
  const navigate = useNavigate();
  const [getImages, isLoadingImages] = useGetImages();
  const [cards, setCards] = useState();
  const [isOpenFinishMatchModal, setIsOpenFinishMatchModal] = useState(false);
  const [typeFinishGame, setTypeFinishGame] = useState(null);

  const handleOnFinishGame = (status) => {
    setTypeFinishGame(status);
    setIsOpenFinishMatchModal(true);
  };

  const handleOnClickPlayAgain = () => {
    initializeGame();
    setTypeFinishGame(null);
    setIsOpenFinishMatchModal(false);
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

  if (!cards || isLoadingImages) {
    // TODO loading screen
    return <div>Loading</div>;
  }

  return (
    <MatchWrapper>
      <BoardWrapper>
        <Board cards={cards} onFinishGame={handleOnFinishGame} />
      </BoardWrapper>

      <Modal
        testId="match__modal"
        isOpen={isOpenFinishMatchModal}
        onClose={() => setIsOpenFinishMatchModal(false)}
      >
        <ModalBody>
          <ModalBodyTitle>{typeFinishGame === GAME_RESULT.WIN && `You Win!`}</ModalBodyTitle>
          <ModalBodyTitle>{typeFinishGame === GAME_RESULT.LOSE && `You lose :-(`}</ModalBodyTitle>
          <ModalBodyScore>Score: 500</ModalBodyScore>

          <ModalBodyActions>
            <Button onClick={() => navigate('/')}>Go home</Button>
            <Button onClick={handleOnClickPlayAgain}>Play again</Button>
          </ModalBodyActions>
        </ModalBody>
      </Modal>
    </MatchWrapper>
  );
}
