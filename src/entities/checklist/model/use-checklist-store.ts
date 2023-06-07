import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

import { createAbortSignal } from '@/shared/lib';
import { IChecklistState, TypeChecklistStore, TypeResponseChecklistObject } from './types.ts';
import { createChecklist } from '../lib';

const checklistStore: TypeChecklistStore = (set, get) => ({
  isLoading: false,

  results: [],

  error: '',

  fetchChecklist: (url: string): void => {
    if (get().results.length > 0) {
      return;
    }

    set({ isLoading: true });

    const signal = createAbortSignal();

    fetch(url, { signal })
      .then((response) => response.json())
      .then((data: TypeResponseChecklistObject[]) => {
        const results = createChecklist(data);

        set({ results });
      })
      .catch((error) => {
        set({ error: (error as Error).message });
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },
});

export const useChecklistStore = create<IChecklistState>()(
  devtools(checklistStore, { name: '@checklist-store' })
);
