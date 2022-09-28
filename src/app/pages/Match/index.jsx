import React, { useEffect, useCallback, useState } from 'react';

import { useGetImages } from 'hooks/useGetImages';

export default function Match() {
  const [getImages, isLoadingImages] = useGetImages();
  const [images, setImages] = useState();

  const initializeGame = useCallback(async () => {
    const result = await getImages();
    setImages(result);
  }, [getImages]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  if (!images || isLoadingImages) {
    // TODO loading screen
    return <div>Loading</div>;
  }

  return (
    <div>
      {images.map((eachImage) => (
        <div key={`image-${eachImage.imageAlt}`}>
          <img src={eachImage.imageSrc} alt={eachImage.imageAlt} width="50" height="50" />
        </div>
      ))}
    </div>
  );
}
