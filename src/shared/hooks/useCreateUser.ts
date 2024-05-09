import {createOrUpdateUserRequest} from 'shared/api';
import {useUserStore} from 'shared/store';
import {User} from '../types';
import auth from '@react-native-firebase/auth';

export const useCreateUser = () => {
  const {setUser} = useUserStore(state => ({
    setUser: state.setUser,
  }));

  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      const rawUserProfile: User = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        firstName: '',
        lastName: '',
        userName: '',
      };

      await createOrUpdateUserRequest(rawUserProfile);
      setUser(rawUserProfile);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }
  };

  return createUser;
};
