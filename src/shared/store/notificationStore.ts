import {create} from 'zustand';

import {UiMessage} from '../types/uiTypes';

interface NotificationState {
  message: UiMessage | null;
  isLoading: boolean;
  setMessage: (message: UiMessage | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useNotificationStore = create<NotificationState>(set => ({
  message: null,
  isLoading: false,
  setMessage: message => set(() => ({message})),
  setIsLoading: isLoading => set(() => ({isLoading}))
}));
