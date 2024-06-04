import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useCallback, useEffect} from 'react';

import {useAppDataStore, useUserStore} from 'shared/store';

import {useGetUser} from './useGetUser';

export const useWatchUserAuth = () => {
  const {setIsInitLoading} = useAppDataStore(state => ({
    setIsInitLoading: state.setIsInitLoading
  }));
  const setUser = useUserStore(state => state.setUser);
  const setUserId = useGetUser();

  const _handleAuthStateChanged = useCallback(
    (userCreds: FirebaseAuthTypes.User | null) => {
      console.log('USER: ', userCreds);
      if (userCreds) {
        setUserId(userCreds.uid);
      } else {
        setUser(null);
        setUserId(null);
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
