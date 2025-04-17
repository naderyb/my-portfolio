// src/lib/cursorStore.ts
import { create } from 'zustand';

interface CursorStore {
  cursorType: string;
  setCursorType: (type: string) => void;
}

export const useCursorStore = create<CursorStore>((set) => ({
  cursorType: 'default',
  setCursorType: (type) => set({ cursorType: type }),
}));
