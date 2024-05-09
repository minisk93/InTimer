import {
  createOrUpdateUserRequest,
  fetchUsersNamesRequest,
  updateUserNamesRequest
} from 'shared/api';
import {useUserStore} from 'shared/store';
import {User} from '../types';

export const useUpdateUser = () => {
  const {setUser, setUserNames} = useUserStore(state => ({
    setUser: state.setUser,
    setUserNames: state.setUserNames,
  }));

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
    } catch (error) {
      console.log(error);
    }
  };

  return updateUser;
};
