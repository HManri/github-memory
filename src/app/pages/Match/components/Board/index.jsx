import React, { useEffect, useState } from 'react';
import { array, func } from 'prop-types';

import { useTimer } from 'hooks/useTimer';
import { GAME_RESULT } from 'constants/gameResult';
import Card from 'components/Card';
import { BoardWrapper } from './Board.style';

const DEFAULT_TIMER = 2 * 60;

export default function Board({ cards, onFinishGame }) {
  const [timer, startTimer, stopTimer] = useTimer(DEFAULT_TIMER);
  const [gameState, setGameState] = useState();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedPairCardIndex, setSelectedPairCardIndex] = useState(null);
  const [numberOfPairs, setNumberOfPairs] = useState(0);

  console.log('aaa', timer);

  const handleOnClickCard = (cardId, index) => () => {
    if (!selectedCardId) {
      // there is no selected card
      setSelectedCardId(cardId);
      setSelectedCardIndex(index);
      return;
    }

    if (selectedCardId === cardId && selectedCardIndex === index) {
      // selected card is the same we already had, so hide it
      setSelectedCardId(null);
      setSelectedCardIndex(null);
      return;
    }

    if (selectedCardId === cardId) {
      // selected card have the same id, but it's not the same, we have a match
      setGameState({ ...gameState, [cardId]: true });
      setNumberOfPairs(numberOfPairs + 1);
    }

    // otherwise, we don't have a match
    setSelectedPairCardIndex(index);
    setTimeout(() => {
      setSelectedCardId(null);
      setSelectedCardIndex(null);
      setSelectedPairCardIndex(null);
    }, 400);
  };

  useEffect(() => {
    setGameState(
      [...new Set(cards.map((eachCard) => eachCard.id))].reduce((acc, eachId) => {
        acc[eachId] = false;
        return acc;
      }, {}),
    );
    setNumberOfPairs(0);
    // startTimer();
  }, [cards, startTimer]);

  useEffect(() => {
    if (gameState && numberOfPairs === Object.keys(gameState).length) {
      onFinishGame(GAME_RESULT.WIN);
      stopTimer();
    }
  }, [gameState, numberOfPairs, onFinishGame, stopTimer]);

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, [stopTimer]);

  if (!gameState) {
    // TODO show some kind of placeholder
    return null;
  }

  return (
    <BoardWrapper>
      {cards.map((eachCard, index) => (
        <Card
          key={`card-${index}-${eachCard.id}`}
          testId={`${index}-${eachCard.id}`}
          image={eachCard.imageSrc}
          imageAlt={eachCard.imageAlt}
          active={index === selectedCardIndex || index === selectedPairCardIndex}
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
