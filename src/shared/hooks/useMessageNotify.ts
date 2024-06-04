import {useCallback} from 'react';

import {useNotificationStore} from '../store/notificationStore';
import {UiMessage, UiMessageType} from '../types/uiTypes';

export const useMessageNotify = () => {
  const setMessage = useNotificationStore(state => state.setMessage);

  const notifyAnError = useCallback(
    (error: any) => {
      const uiError: UiMessage = {
        title: 'Error',
        message: '',
        type: UiMessageType.Error
      };
      if (typeof error === 'string') {
        uiError.message = error;
      } else if (typeof error === 'object' && 'message' in error) {
        uiError.message = error.message;
      } else if (error instanceof Error) {
        uiError.message = error.message;
      } else {
        uiError.title = 'Unknown error';
        uiError.message = error + '';
      }
      setMessage(uiError);
    },
    [setMessage]
  );

  const notifyOperationSuccess = useCallback(
    (message: string, params?: {title?: string; type?: UiMessageType}) => {
      setMessage({
        title: params?.title || 'Success!',
        message,
        type: params?.type || UiMessageType.Success
      });
    },
    [setMessage]
  );

  return {notifyAnError, notifyOperationSuccess};
};
