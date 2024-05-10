import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {SignInPage, SignUpPage} from 'pages';
import {routes} from 'shared/constants';
import {AuthStackParamList} from 'shared/types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.SignIn}
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Stack.Screen name={routes.SignIn} component={SignInPage} />
      <Stack.Screen name={routes.SignUp} component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
