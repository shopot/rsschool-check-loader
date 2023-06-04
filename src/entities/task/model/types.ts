import { StateCreator } from 'zustand';

export const enum CriteriaType {
  Title = 'title',
  Subtask = 'subtask',
  Penalty = 'penalty',
}

export type TypeCriteria = {
  id: number;
  type: CriteriaType;
  title?: string;
  text?: string;
  max?: number;
  input: boolean;
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
  github: string;
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
