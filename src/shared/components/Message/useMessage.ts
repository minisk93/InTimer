import {useCallback} from 'react';

import {useNotificationStore} from 'shared/store';

export const useMessage = () => {
  const setMessage = useNotificationStore(state => state.setMessage);

  return useCallback(() => setMessage(null), [setMessage]);
};
