import React from 'react';
import { SafeAreaView } from 'react-native';
import { globalStyles } from '../shared';
import { SignUpForm } from '../widgets';

const SignUpPage = () => {
  return <SafeAreaView style={globalStyles.page}>
    <SignUpForm />
  </SafeAreaView>;
};

export default SignUpPage;
