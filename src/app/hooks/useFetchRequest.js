import { useState, useCallback } from 'react';

export function useFetchRequest(request, parameters) {
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    const result = await request(parameters);
    setIsLoading(false);
    return result;
  }, [request, parameters]);

  return [fetch, isLoading];
}
