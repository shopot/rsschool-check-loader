import { StateCreator } from 'zustand';

export type TypeReportState = {
  isOpen: boolean;
  content: string;
  setContent: (content: string) => void;
  toggleIsOpen: () => void;
};

export type TypeReportStore = StateCreator<TypeReportState>;
