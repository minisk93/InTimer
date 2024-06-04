import {useEffect, useState} from 'react';

import {useNotificationStore} from 'shared/store';

const MESSAGE_DURATION_MS = 4000;

export const useNotifyWrapper = () => {
  const message = useNotificationStore(state => state.message);
  const setMessage = useNotificationStore(state => state.setMessage);
  const isLoading = useNotificationStore(state => state.isLoading);
  const [displayableMessage, setDisplayableMessage] = useState(message);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (message) {
      setDisplayableMessage(message);
      timeoutId = setTimeout(() => setMessage(null), MESSAGE_DURATION_MS);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [message, setMessage]);

  return {displayableMessage, message, setMessage, isLoading};
};
