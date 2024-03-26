import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {AuthStack, HomeStack, ProfileStack} from './src/processes';
//import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  checkUserFullfilled,
  useUserStore,
  useWatchUserAuth,
} from './src/shared';
import {useAppDataStore} from './src/shared/store/appData';

function App(): JSX.Element | null {
  useWatchUserAuth();
  const {isInitLoading} = useAppDataStore(state => ({
    isInitLoading: state.isInitLoading,
  }));
  const {user} = useUserStore(state => ({user: state.user}));

  const isUserFullfilled = useMemo(() => {
    if (user) {
      return checkUserFullfilled(user);
    }
    return false;
  }, [user]);

  if (isInitLoading || user === undefined) {
    return null;
  }

  return (
    <NavigationContainer>
      {user === null ? (
        <AuthStack />
      ) : isUserFullfilled ? (
        <HomeStack />
      ) : (
        <ProfileStack />
      )}
    </NavigationContainer>
  );
}

export default App;
