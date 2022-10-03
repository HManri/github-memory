import React, { useEffect, useState } from 'react';
import { arrayOf, string, func, shape } from 'prop-types';

import { useTimer } from 'hooks/useTimer';
import { GAME_RESULT } from 'constants/gameResult';
import Card from 'components/Card';
import Button from 'components/Button';
import {
  BoardWrapper,
  BoardGame,
  BoardResults,
  BoardResultsText,
  BoardResultsActions,
} from './Board.style';

const DEFAULT_TIMER = 60;

export default function Board({ cards, testId, onFinishGame }) {
  const [timer, startTimer, stopTimer] = useTimer(DEFAULT_TIMER);
  const [gameState, setGameState] = useState();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedPairCardIndex, setSelectedPairCardIndex] = useState(null);
  const [numberOfPairs, setNumberOfPairs] = useState(0);

  const calculateScore = (pairs) => {
    return pairs * 100;
  };

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

  const handleOnClickGiveUp = () => {
    stopTimer();
    onFinishGame(GAME_RESULT.LOSE, calculateScore(numberOfPairs));
  };

  useEffect(() => {
    setGameState(
      [...new Set(cards.map((eachCard) => eachCard.id))].reduce((acc, eachId) => {
        acc[eachId] = false;
        return acc;
      }, {}),
    );
    setNumberOfPairs(0);
    startTimer();
  }, [cards, startTimer]);

  useEffect(() => {
    if (gameState && numberOfPairs === Object.keys(gameState).length) {
      onFinishGame(GAME_RESULT.WIN, calculateScore(numberOfPairs));
      stopTimer();
    }
  }, [gameState, numberOfPairs, onFinishGame, stopTimer]);

  useEffect(() => {
    if (timer === 0) {
      onFinishGame(GAME_RESULT.LOSE, calculateScore(numberOfPairs));
    }
  }, [onFinishGame, numberOfPairs, timer]);

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
    <BoardWrapper data-testid={testId}>
      <BoardGame data-testid={`${testId}__board_game`}>
        {cards.map((eachCard, index) => (
          <Card
            key={`card-${index}-${eachCard.id}`}
            testId={`card-${index}-${eachCard.id}`}
            image={eachCard.imageSrc}
            imageAlt={eachCard.imageAlt}
            active={index === selectedCardIndex || index === selectedPairCardIndex}
            disabled={gameState[eachCard.id]}
            onClick={handleOnClickCard(eachCard.id, index)}
          />
        ))}
      </BoardGame>

      <BoardResults data-testid={`${testId}__board_results`}>
        <BoardResultsText data-testid={`${testId}__board_results__timer`}>
          <span>{`Time: ${timer} seconds`}</span>
        </BoardResultsText>
        <BoardResultsText data-testid={`${testId}__board_results__score`}>
          <span>{`Score: ${calculateScore(numberOfPairs)}`}</span>
        </BoardResultsText>
        <BoardResultsActions data-testid={`${testId}__board_results__actions`}>
          <Button
            testId={`${testId}__board_results__actions__give_up_btn`}
            onClick={handleOnClickGiveUp}
          >
            <BoardResultsText>Give up</BoardResultsText>
          </Button>
        </BoardResultsActions>
      </BoardResults>
    </BoardWrapper>
  );
}

Board.propTypes = {
  cards: arrayOf(shape({ id: string, imageSrc: string, imageAlt: string, cardId: string }))
    .isRequired,
  testId: string,
  onFinishGame: func.isRequired,
};
