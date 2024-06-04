import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {SWRConfig} from 'swr';

import {AuthStack, HomeStack, ProfileStack} from 'processes/navigation';
import {useMessageNotify, useWatchUserAuth} from 'shared/hooks';
import {useAppDataStore, useUserStore} from 'shared/store';
import {checkUserFullfilled} from 'shared/utils';
import {NotifyWrapper} from 'widgets';

function App(): React.JSX.Element | null {
  useWatchUserAuth();
  const {isInitLoading} = useAppDataStore(state => ({
    isInitLoading: state.isInitLoading
  }));
  const {user} = useUserStore(state => ({user: state.user}));
  const {notifyAnError} = useMessageNotify();

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
    <NotifyWrapper>
      <SWRConfig value={{onError: error => notifyAnError(error.message)}}>
        <NavigationContainer>
          {user === null ? (
            <AuthStack />
          ) : isUserFullfilled ? (
            <HomeStack />
          ) : (
            <ProfileStack />
          )}
        </NavigationContainer>
      </SWRConfig>
    </NotifyWrapper>
  );
}

export default App;
