import { create } from 'zustand';

interface DarkModeStore {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
}

export const useDarkMode = create<DarkModeStore>((set) => ({
  darkMode: false,
  setDarkMode: (value: boolean) => set(() => ({ darkMode: value })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

