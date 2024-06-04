import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text} from 'react-native';

import {BaseButton, PageWrapper} from 'shared/components';

import {colors} from 'shared/assets';

const HomePage = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default HomePage;
