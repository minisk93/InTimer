import React from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {BaseButton, colors, globalStyles} from '../shared';

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
          left: 24,
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
