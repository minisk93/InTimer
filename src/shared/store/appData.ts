import {create} from 'zustand';

interface AppDataState {
  isInitLoading: boolean;
  setIsInitLoading: (isLoading: boolean) => void;
}

export const useAppDataStore = create<AppDataState>(set => ({
  isInitLoading: true,
  setIsInitLoading: isInitLoading => set(() => ({isInitLoading}))
}));
