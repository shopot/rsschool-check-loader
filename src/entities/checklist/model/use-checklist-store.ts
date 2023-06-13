import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

import {
  IChecklistState,
  TypeChecklist,
  TypeChecklistStore,
  TypeResponseChecklistObject,
} from './types.ts';
import { createChecklist } from '../lib';
import { API } from '@/shared/api';

const checklistStore: TypeChecklistStore = (set) => ({
  isLoading: false,

  results: [],

  error: '',

  fetchChecklist: async (url: string | string[]): Promise<void> => {
    set({ isLoading: true });

    const urlList: string[] = [];

    if (Array.isArray(url)) {
      urlList.push(...url);
    } else {
      urlList.push(url);
    }

    let results: TypeChecklist[] = [];

    for (const _url of urlList) {
      const data = await API.checklist.getChecklist(_url);

      if (data !== null) {
        const checklist = createChecklist(data as TypeResponseChecklistObject[]);

        if (checklist.length > 0) {
          results = results.concat(checklist);
        }
      }
    }

    if (results.length > 0) {
      set({ results });
    }

    set({ isLoading: false });
  },
});

export const useChecklistStore = create<IChecklistState>()(
  devtools(checklistStore, { name: '@checklist-store' })
);
