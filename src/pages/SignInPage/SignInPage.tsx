import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {routes} from 'shared/constants';
import {globalStyles} from 'shared/assets';
import {SignInForm} from 'widgets';
import {Header} from 'shared/components';
import {styles} from './SignInPageStyles';
import {SignInPageProps} from 'shared/types';

const SignInPage: React.FC<SignInPageProps> = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.pageSafeArea}>
      <View style={[globalStyles.page, styles.container]}>
        <SignInForm />
        <Header text="Don't have an account?" style={styles.textBottom}>
          <Text
            style={[styles.textBlue]}
            onPress={() => navigation.navigate(routes.SignUp)}>
            {' '}
            Sign Up
          </Text>
        </Header>
      </View>
    </SafeAreaView>
  );
};

export default SignInPage;
