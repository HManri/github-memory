import { useCallback, useState } from 'react';

import { getGitHubContributors } from 'services/GitHubContributors';
import { useFetchRequest } from 'hooks/useFetchRequest';

export function useGetImages(numberOfImages = 6) {
  const [getContributors] = useFetchRequest(getGitHubContributors);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = useCallback(async () => {
    setIsLoading(true);
    const contributors = await getContributors();

    const images = contributors
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfImages)
      .map((eachContributor) => ({
        imageSrc: eachContributor.avatar_url,
        imageAlt: eachContributor.login,
      }));

    setIsLoading(false);

    return images;
  }, [getContributors, numberOfImages]);

  return [getImages, isLoading];
}
