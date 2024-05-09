import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {AuthStack, HomeStack, ProfileStack} from 'processes/navigation';
import {checkUserFullfilled} from 'shared/utils';
import {useUserStore, useAppDataStore} from 'shared/store';
import {useWatchUserAuth} from 'shared/hooks';

function App(): React.JSX.Element | null {
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
      <ProfileStack />
    </NavigationContainer>
  );
}

export default App;
