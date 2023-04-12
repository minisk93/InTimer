import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from '../constants/routes';
import { HomePage } from '../../../pages';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.Home} component={HomePage} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
