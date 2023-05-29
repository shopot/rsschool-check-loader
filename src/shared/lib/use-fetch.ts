import { useEffect, useState } from 'react';
import { createAbortSignal } from '@/shared/lib';

const CANCEL_FETCH_TIMEOUT = 5000;

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
      .then(() => setIsLoading(false))
      .catch((err) => {
        setError((err as Error).message);
      });
  }, [uri]);

  return {
    isLoading,
    data,
    error,
  };
}
