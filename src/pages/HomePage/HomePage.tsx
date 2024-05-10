import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, View} from 'react-native';

import {BaseButton} from 'shared/components';

import {colors, globalStyles} from 'shared/assets';

const HomePage = () => {
  return (
    <View style={globalStyles.page}>
      <Text style={{justifyContent: 'center', alignItems: 'center'}}>
        Home Page
      </Text>
      <BaseButton
        text="Sign Out"
        style={{
          backgroundColor: colors.red,
          position: 'absolute',
          bottom: 20,
          left: 24
        }}
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </View>
  );
};

export default HomePage;
