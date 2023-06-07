import { StateCreator } from 'zustand';

export type TypeResponseChecklistObject = {
  name: string;
  sha: string;
  download_url: string;
};

export type TypeChecklist = {
  id: string;
  label: string;
  value: string;
};

export interface IChecklistState {
  isLoading: boolean;
  results: TypeChecklist[];
  error: string;
  fetchChecklist: (url: string) => void;
}

export type TypeChecklistStore = StateCreator<IChecklistState>;
