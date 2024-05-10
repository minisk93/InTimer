import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';

import {AuthStack, HomeStack, ProfileStack} from 'processes/navigation';
import {useWatchUserAuth} from 'shared/hooks';
import {useAppDataStore, useUserStore} from 'shared/store';
import {checkUserFullfilled} from 'shared/utils';

function App(): React.JSX.Element | null {
  useWatchUserAuth();
  const {isInitLoading} = useAppDataStore(state => ({
    isInitLoading: state.isInitLoading
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
