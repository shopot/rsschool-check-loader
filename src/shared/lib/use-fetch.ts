import { useEffect, useState } from 'react';
import { createAbortSignal } from '@/shared/lib';
import { CANCEL_FETCH_TIMEOUT } from '@/shared/config';

export function useFetch<T>(uri: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!uri) {
      return;
    }

    setIsLoading(true);

    const signal = createAbortSignal(CANCEL_FETCH_TIMEOUT);

    fetch(uri, { signal })
      .then((data) => data.json())
      .then(setData)
      .catch((err) => {
        setError((err as Error).message);
      })
      .finally(() => setIsLoading(false));
  }, [uri]);

  return {
    isLoading,
    data,
    error,
  };
}
