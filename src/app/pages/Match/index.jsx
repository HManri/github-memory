import React, { useEffect, useCallback, useState } from 'react';

import { useGetImages } from 'hooks/useGetImages';
import { randomizeArray } from 'utils/randomizeArray';
import Board from 'pages/Match/components/Board';

export default function Match() {
  const [getImages, isLoadingImages] = useGetImages();
  const [cards, setCards] = useState();

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

  return <Board cards={cards} />;
}
