import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {HomePage} from 'pages';
import {routes} from 'shared/constants';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.Home} component={HomePage} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
