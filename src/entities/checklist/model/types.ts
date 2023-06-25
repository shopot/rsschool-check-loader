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

export type TypeChecklistState = {
  isLoading: boolean;
  results: TypeChecklist[];
  error: string;
  fetchChecklist: (url: string | string[]) => Promise<void>;
};

export type TypeChecklistStore = StateCreator<TypeChecklistState>;
