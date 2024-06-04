import useSWR from 'swr';

import {SwrKeys, fetchUsersNamesRequest} from 'shared/api';
import {useUserStore} from 'shared/store';

import {useWatchLoading} from './useWatchLoading';

export const useGetUserNames = () => {
  const {setUserNames} = useUserStore(state => ({
    setUserNames: state.setUserNames
  }));

  const {isValidating} = useSWR(SwrKeys.UsersNames, fetchUsersNamesRequest, {
    onSuccess: data => {
      if (data) {
        setUserNames(data);
      }
    }
  });
  useWatchLoading(isValidating);
};
