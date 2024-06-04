import {useEffect} from 'react';

import {useNotificationStore} from 'shared/store';

export const useWatchLoading = (isLoading: boolean) => {
  const setIsLoading = useNotificationStore(state => state.setIsLoading);

  useEffect(() => setIsLoading(isLoading), [isLoading, setIsLoading]);
};
