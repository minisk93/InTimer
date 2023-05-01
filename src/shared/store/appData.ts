import { create } from "zustand";

interface AppDataState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useAppDataStore = create<AppDataState>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
}));

