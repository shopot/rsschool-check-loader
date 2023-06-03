import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CANCEL_FETCH_TIMEOUT } from '@/shared/config';

import { ITaskState, TypeCriteria, TypeResponseJSONObject, TypeTaskStore } from './types.ts';
import { createCriteria, createAbortSignal } from '../lib';

const initialState = {
  isLoading: false,
  taskName: '',
  taskInformation: '',
  criteriaResults: [],
  maxTotalPoints: 0,
  error: '',
};

const getInitialState = () => ({ ...initialState, criteriaResults: [] });

const taskStore: TypeTaskStore = (set, get) => ({
  ...getInitialState(),

  fetchTask: (url: string) => {
    // Reset state
    get().reset();

    set({ isLoading: true });

    const signal = createAbortSignal(CANCEL_FETCH_TIMEOUT);

    fetch(url, { signal })
      .then((data) => data.json())
      .then((jsonObject: TypeResponseJSONObject) => {
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
        criteriaResults: createCriteria(criteria as TypeCriteria[]),
      });
    } else {
      set({ error: 'Unknown a task from json file' });
    }
  },

  reset: (): void => {
    set({ ...getInitialState() });
  },

  resetTotalPoints: (): void => {
    const stateNext = get().criteriaResults.map((criteria) => ({ ...criteria, value: 0 }));

    set({ criteriaResults: stateNext });
  },

  setCriteriaPoints: (id: number, value: number): void => {
    const criteriaState = get().criteriaResults;

    const idx = criteriaState.findIndex((item) => item.id === id);

    if (idx) {
      const stateNext = [...criteriaState];
      stateNext[idx] = { ...stateNext[idx], value: value };
      set({ criteriaResults: stateNext });
    }
  },

  totalPoints: (): number => {
    const total = get().criteriaResults.reduce((sum, criteria) => sum + criteria.value, 0);

    return total > 0 ? total : 0;
  },
});

export const useTaskStore = create<ITaskState>()(devtools(taskStore, { name: '@task-store' }));
