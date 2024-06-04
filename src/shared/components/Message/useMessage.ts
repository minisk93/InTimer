import {useCallback} from 'react';

import {useNotificationStore} from 'shared/store';

export const useMessage = () => {
  const setMessage = useNotificationStore(state => state.setMessage);

  return useCallback(() => {
    console.log('press');
    setMessage(null);
  }, [setMessage]);
};
