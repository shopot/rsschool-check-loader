import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CANCEL_FETCH_TIMEOUT } from '@/shared/config';

import { ITaskState, TypeCriteriaItem, TypeTaskStore } from './types.ts';
import { createCriteria, createAbortSignal } from '../lib';

const initialState = {
  isLoading: false,
  taskName: '',
  taskInformation: '',
  criteriaResults: [],
  totalPoints: 0,
  maxTotalPoints: 0,
  error: '',
};

const getInitialState = () => ({ ...initialState, criteriaResults: [] });

const taskStore: TypeTaskStore = (set, get) => ({
  ...getInitialState(),
  fetchTask: (url: string) => {
    set({ isLoading: true });

    const signal = createAbortSignal(CANCEL_FETCH_TIMEOUT);

    fetch(url, { signal })
      .then((data) => data.json())
      .then((jsonObject: TypeResponseTaskJSON) => {
        get().initTask(jsonObject);
      })
      .catch((err) => {
        set({ error: (err as Error).message });
      })
      .finally(() => {
        set({ isLoading: false });
      });

    console.log('fetching task url:', url);
  },
  initTask: (data) => {
    if (data === null) {
      set({ error: 'Invalid a data from json file' });
      return;
    }

    const { taskName, criteria, information } = data;

    if (taskName && criteria && information) {
      set({
        taskName: taskName,
        taskInformation: information,
        criteriaResults: createCriteria(criteria as TypeCriteriaItem[]),
      });
    } else {
      set({ error: 'Unknown a task from json file' });
    }
  },
});

export const useTaskStore = create<ITaskState>()(devtools(taskStore, { name: '@task-store' }));
