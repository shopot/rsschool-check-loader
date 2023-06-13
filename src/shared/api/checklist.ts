import { PUBLIC_API_GITHUB_TOKEN } from '../config';
import { createAbortSignal } from '../lib';

const getChecklist = async (url: string): Promise<JSONValue | null> => {
  try {
    const signal = createAbortSignal();

    const response = await fetch(url, {
      signal,
      headers: {
        Authorization: 'Bearer ' + PUBLIC_API_GITHUB_TOKEN,
      },
    });

    if (response.ok) {
      return (await response.json()) as JSONValue;
    }

    return null;
  } catch {
    return null;
  }
};

export const checklist = {
  getChecklist,
};
