import auth from '@react-native-firebase/auth';

import {createOrUpdateUserRequest} from 'shared/api';
import {useUserStore} from 'shared/store';

import {User} from '../types';
import {useMessageNotify} from './useMessageNotify';

export const useCreateUser = () => {
  const {setUser} = useUserStore(state => ({
    setUser: state.setUser
  }));
  const {notifyAnError} = useMessageNotify();

  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      const rawUserProfile: User = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        firstName: '',
        lastName: '',
        userName: ''
      };

      await createOrUpdateUserRequest(rawUserProfile);
      setUser(rawUserProfile);
    } catch (error: any) {
      notifyAnError(error.message);
    }
  };

  return createUser;
};
