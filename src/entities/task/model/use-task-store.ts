import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAbortSignal } from '@/shared/lib';
import {
  CriteriaType,
  TypeTaskState,
  TypeCriteria,
  TypeResponseJSONObject,
  TypeTaskStore,
} from './types.ts';
import { createCriteria } from '../lib';
import { REASON_MIN_LENGTH } from '@/shared/config';

const initialState = {
  isLoading: false,
  taskName: '',
  github: '',
  taskInformation: '',
  criteriaResults: [],
  isReportOpen: false,
  error: '',
};

const getInitialState = () => structuredClone(initialState);

const taskStore: TypeTaskStore = (set, get) => ({
  ...getInitialState(),

  fetchTask: (url: string) => {
    // Reset state
    get().reset();

    set({ isLoading: true });

    const signal = createAbortSignal();

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
  },

  initTask: (data) => {
    if (data === null) {
      set({ error: 'Invalid a data from json file' });
      return;
    }

    const { taskName, criteria, information, github } = data;

    if (taskName) {
      set({
        taskName: taskName,
        github: github || '',
        taskInformation: information || '',
        criteriaResults: createCriteria((criteria as TypeCriteria[]) || []),
      });
    } else {
      set({ error: 'Unknown a task from json file' });
    }
  },

  reset: (): void => {
    set({ ...getInitialState() });
  },

  resetTaskResults: (): void => {
    const stateNext = get().criteriaResults.map((criteria) => ({
      ...criteria,
      value: 0,
      reason: '',
      isReasonEnabled: false,
    }));

    set({ criteriaResults: stateNext });
  },

  setCriteriaPoints: (id: number, value: number): void => {
    const criteriaResults = get().criteriaResults;

    const idx = criteriaResults.findIndex((item) => item.id === id);

    if (idx) {
      const { type, max } = criteriaResults[idx];

      let isReasonEnabled = false;

      if (type === CriteriaType.Subtask) {
        isReasonEnabled = max !== value;
      } else if (type === CriteriaType.Penalty) {
        isReasonEnabled = value !== 0;
      }

      criteriaResults[idx] = {
        ...criteriaResults[idx],
        value,
        isReasonEnabled,
      };

      set({ criteriaResults: [...criteriaResults] });
    }
  },

  setReason: (id: number, value: string): void => {
    const criteriaState = get().criteriaResults;

    const idx = criteriaState.findIndex((item) => item.id === id);

    if (idx) {
      const stateNext = [...criteriaState];

      stateNext[idx] = {
        ...stateNext[idx],
        reason: value,
      };

      set({ criteriaResults: stateNext });
    }
  },

  getTotalPoints: (): number => {
    const total = get().criteriaResults.reduce((sum, criteria) => sum + criteria.value, 0);

    return total > 0 ? total : 0;
  },

  getCriteriaResults: (): TypeCriteria[] => {
    return get().criteriaResults.filter((criteria) => criteria.type !== CriteriaType.Title);
  },

  validateReport: (): boolean => {
    const { criteriaResults } = get();

    let status = true;

    for (let i = 0; i < criteriaResults.length; i++) {
      const criteria = criteriaResults[i];

      if (
        criteria.type === CriteriaType.Subtask &&
        criteria.max !== criteria.value &&
        criteria.reason.length < REASON_MIN_LENGTH
      ) {
        criteria.isReasonEnabled = true;

        status = false;
      } else if (
        criteria.type === CriteriaType.Penalty &&
        criteria.value !== 0 &&
        criteria.reason.length < REASON_MIN_LENGTH
      ) {
        criteria.isReasonEnabled = true;

        status = false;
      }
    }

    if (!status) {
      set({ criteriaResults: criteriaResults });
    }

    return status;
  },
});

export const useTaskStore = create<TypeTaskState>()(devtools(taskStore, { name: '@task-store' }));
