import React, { useEffect, useState } from 'react';
import { array, func } from 'prop-types';

import { GAME_RESULT } from 'constants/gameResult';
import Card from 'components/Card';
import { BoardWrapper } from './Board.style';

export default function Board({ cards, onFinishGame }) {
  const [gameState, setGameState] = useState();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [numberOfPairs, setNumberOfPairs] = useState(0);

  const handleOnClickCard = (cardId, index) => () => {
    if (!selectedCardId) {
      setSelectedCardId(cardId);
      setSelectedCardIndex(index);
      return;
    }

    if (selectedCardId === cardId) {
      setGameState({ ...gameState, [cardId]: true });
      setNumberOfPairs(numberOfPairs + 1);
    }

    setSelectedCardId(null);
    setSelectedCardIndex(null);
  };

  useEffect(() => {
    setGameState(
      [...new Set(cards.map((eachCard) => eachCard.id))].reduce((acc, eachId) => {
        acc[eachId] = false;
        return acc;
      }, {}),
    );
    setNumberOfPairs(0);
  }, [cards]);

  useEffect(() => {
    if (gameState && numberOfPairs === Object.keys(gameState).length) {
      onFinishGame(GAME_RESULT.Win);
    }
  }, [gameState, numberOfPairs, onFinishGame]);

  if (!gameState) {
    // TODO show some kind of placeholder
    return null;
  }

  return (
    <BoardWrapper>
      {cards.map((eachCard, index) => (
        <Card
          key={`image-${index}-${eachCard.id}`}
          id={eachCard.id}
          image={eachCard.imageSrc}
          imageAlt={eachCard.imageAlt}
          active={index === selectedCardIndex}
          disabled={gameState[eachCard.id]}
          onClick={handleOnClickCard(eachCard.id, index)}
        />
      ))}
    </BoardWrapper>
  );
}

Board.propTypes = {
  cards: array.isRequired,
  onFinishGame: func.isRequired,
};
