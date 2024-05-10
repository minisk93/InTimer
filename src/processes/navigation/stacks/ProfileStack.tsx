import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {ProfilePage} from 'pages';
import {routes} from 'shared/constants';
import {ProfileStackParamsList} from 'shared/types';

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      id="profileStack"
      initialRouteName={routes.Profile}
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom'
      }}>
      <Stack.Screen name={routes.Profile} component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
