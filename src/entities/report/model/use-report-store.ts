import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { TypeReportState, TypeReportStore } from './types.ts';

const reportStore: TypeReportStore = (set) => ({
  isOpen: false,
  content: '',
  setContent: (content) => set({ content }),
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
});

export const useReportStore = create<TypeReportState>()(
  devtools(reportStore, { name: '@report-store' })
);
