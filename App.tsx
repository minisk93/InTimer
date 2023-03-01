import React from 'react';
import {View} from 'react-native';
import { SignInPage } from './src/pages';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <SignInPage />
    </View>
  );
}

export default App;
