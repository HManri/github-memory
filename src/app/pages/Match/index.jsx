import React, { useEffect, useCallback, useState } from 'react';

import { useGetImages } from 'hooks/useGetImages';
import { randomizeArray } from 'utils/randomizeArray';
import Card from 'components/Card';
import { Board } from './Match.style';

export default function Match() {
  const [getImages, isLoadingImages] = useGetImages();
  const [cards, setCards] = useState();
  const [gameState, setGameState] = useState();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleOnClickCard = (cardId, index) => () => {
    if (!selectedCardId) {
      setSelectedCardId(cardId);
      setSelectedCardIndex(index);
      return;
    }

    if (selectedCardId === cardId) {
      setGameState({ ...gameState, [cardId]: true });
    }

    setSelectedCardId(null);
    setSelectedCardIndex(null);
  };

  const initializeGame = useCallback(async () => {
    const images = await getImages();

    const initialGameState = {};
    const cards = randomizeArray(
      images.reduce((arrayCards, eachImage, index) => {
        const newCardId = `${index}-${eachImage.imageAlt}`;

        initialGameState[newCardId] = false;

        const newCard = { ...eachImage, id: newCardId };
        arrayCards.push(newCard);
        arrayCards.push(newCard);
        return arrayCards;
      }, []),
    );
    setCards(cards);
    setGameState(initialGameState);
    setSelectedCardId(null);
    setSelectedCardIndex(null);
  }, [getImages]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  if (!cards || isLoadingImages) {
    // TODO loading screen
    return <div>Loading</div>;
  }

  console.log('aaa', gameState, selectedCardId, selectedCardIndex);

  return (
    <Board>
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
    </Board>
  );
}
