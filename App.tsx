import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { AuthStack } from './src/processes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
