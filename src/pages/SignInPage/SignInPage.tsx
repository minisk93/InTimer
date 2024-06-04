import React from 'react';
import {Text} from 'react-native';

import {Header, PageWrapper} from 'shared/components';
import {routes} from 'shared/constants';
import {SignInPageProps} from 'shared/types';
import {SignInForm} from 'widgets';

import {styles} from './SignInPageStyles';

const SignInPage: React.FC<SignInPageProps> = ({navigation}) => {
  return (
    <PageWrapper>
      <SignInForm />
      <Header text="Don't have an account?" style={styles.textBottom}>
        <Text
          style={[styles.textBlue]}
          onPress={() => navigation.navigate(routes.SignUp)}>
          {' '}
          Sign Up
        </Text>
      </Header>
    </PageWrapper>
  );
};

export default SignInPage;
