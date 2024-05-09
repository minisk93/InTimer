import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useCallback, useEffect} from 'react';
import {useUserStore, useAppDataStore} from 'shared/store';
import {useGetUser} from './useGetUser';

export const useWatchUserAuth = () => {
  const {setIsInitLoading} = useAppDataStore(state => ({
    setIsInitLoading: state.setIsInitLoading
  }));
  const {setUser} = useUserStore(state => ({
    setUser: state.setUser
  }));
  const getUser = useGetUser();

  const _handleAuthStateChanged = useCallback(
    (userCreds: FirebaseAuthTypes.User | null) => {
      console.log('USER: ', userCreds);
      if (userCreds) {
        getUser(userCreds.uid);
      } else {
        setUser(null);
      }
      setIsInitLoading(false);
    },
    []
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(_handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
};
