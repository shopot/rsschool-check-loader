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
  isReasonEnabled: boolean;
  reason: string;
};

export type TypeResponseJSONObject = {
  taskName: string;
  github: string;
  information: string;
  criteria: Partial<TypeCriteria>[];
} | null;

export type TypeTaskState = {
  isLoading: boolean;
  taskName: string;
  github: string;
  taskInformation: string;
  criteriaResults: TypeCriteria[];
  isReportOpen: boolean;
  error: string;
  fetchTask: (url: string) => void;
  initTask: (data: TypeResponseJSONObject) => void;
  reset: () => void;
  resetTaskResults: () => void;
  setCriteriaPoints: (id: number, value: number) => void;
  setReason: (id: number, value: string) => void;
  getTotalPoints: () => number;
  getCriteriaResults: () => TypeCriteria[];
  validateReport: () => boolean;
};

export type TypeTaskStore = StateCreator<TypeTaskState>;
