import { StateCreator } from 'zustand';

export type TypeCriteriaItem = {
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
  criteria: Partial<TypeCriteriaItem>[];
} | null;

export interface ITaskState {
  isLoading: boolean;
  taskName: string;
  taskInformation: string;
  criteriaResults: TypeCriteriaItem[];
  totalPoints: number;
  maxTotalPoints: number;
  error: string;
  fetchTask: (url: string) => void;
  initTask: (data: TypeResponseJSONObject) => void;
}

export type TypeTaskStore = StateCreator<ITaskState>;
