import {
  createOrUpdateUserRequest,
  fetchUsersNamesRequest,
  updateUserNamesRequest
} from 'shared/api';
import {useUserStore} from 'shared/store';

import {User} from '../types';
import {useMessageNotify} from './useMessageNotify';

export const useUpdateUser = () => {
  const {setUser, setUserNames} = useUserStore(state => ({
    setUser: state.setUser,
    setUserNames: state.setUserNames
  }));
  const {notifyAnError} = useMessageNotify();

  const updateUser = async (user: User) => {
    try {
      const userNames = await fetchUsersNamesRequest();
      if (userNames) {
        setUserNames(userNames);
        if (userNames.find(item => item === user.userName)) {
          throw new Error('User name already exist. Please, use another one');
        }
      }

      await updateUserNamesRequest(user.userName);
      await createOrUpdateUserRequest(user);
      setUser(user);
    } catch (error: any) {
      notifyAnError(error.message);
    }
  };

  return updateUser;
};
