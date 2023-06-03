import { StateCreator } from 'zustand';

export type TypeCriteria = {
  id: number;
  type: string;
  title?: string;
  text?: string;
  max?: number;
  value: number;
};

export type TypeResponseJSONObject = {
  taskName: string;
  github: string;
  information: string;
  criteria: Partial<TypeCriteria>[];
} | null;

export interface ITaskState {
  isLoading: boolean;
  taskName: string;
  taskInformation: string;
  criteriaResults: TypeCriteria[];
  maxTotalPoints: number;
  error: string;
  fetchTask: (url: string) => void;
  initTask: (data: TypeResponseJSONObject) => void;
  reset: () => void;
  resetTotalPoints: () => void;
  setCriteriaPoints: (id: number, value: number) => void;
  totalPoints: () => number;
}

export type TypeTaskStore = StateCreator<ITaskState>;
