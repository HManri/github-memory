import React, { useEffect, useCallback, useState } from 'react';

import { useGetImages } from 'hooks/useGetImages';
import { randomizeArray } from 'utils/randomizeArray';

export default function Match() {
  const [getImages, isLoadingImages] = useGetImages();
  const [cards, setCards] = useState();
  // const [images, setImages] = useState();

  const initializeGame = useCallback(async () => {
    const images = await getImages();
    // setImages(images);

    const cards = randomizeArray(
      images.reduce((arrayCards, eachImage, index) => {
        const newCard = { ...eachImage, id: `${index}-${eachImage.imageAlt}` };
        arrayCards.push(newCard);
        arrayCards.push(newCard);
        return arrayCards;
      }, []),
    );
    setCards(cards);
    console.log(images, cards);
  }, [getImages]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  if (!cards || isLoadingImages) {
    // TODO loading screen
    return <div>Loading</div>;
  }

  return (
    <div>
      {cards.map((eachCard, index) => (
        <div key={`image-${index}-${eachCard.id}`}>
          <img src={eachCard.imageSrc} alt={eachCard.imageAlt} width="50" height="50" />
        </div>
      ))}
    </div>
  );
}
