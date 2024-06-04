import {useState} from 'react';
import useSWR from 'swr';

import {SwrKeys, fetchUserRequest} from 'shared/api';
import {useUserStore} from 'shared/store';

import {useWatchLoading} from './useWatchLoading';

export const useGetUser = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const setUser = useUserStore(state => state.setUser);

  const {isValidating} = useSWR(
    userId ? [SwrKeys.User, userId] : null,
    ([_, id]) => fetchUserRequest(id),
    {
      onSuccess: data => {
        if (data) {
          setUser(data);
        }
      }
    }
  );
  useWatchLoading(isValidating);

  return setUserId;
};
