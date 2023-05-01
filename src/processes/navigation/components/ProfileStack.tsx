import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routes';
import {ProfileStackParamsList} from '../constants/types';
import {ProfilePage} from '../../../pages';

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      id="profileStack"
      initialRouteName={routes.Profile}
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name={routes.Profile} component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
