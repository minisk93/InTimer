import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {colors, globalStyles, Header} from '../shared';
import {SignInForm} from '../widgets';

const SignInPage = () => {
  return (
    <SafeAreaView style={[globalStyles.page, styles.container]}>
      <SignInForm />
      <Header text="Don't have an account?" style={styles.textBottom}>
        <Text style={styles.textBlue}> Sign Up</Text>
      </Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  textBottom: {
    alignSelf: 'center',
  },
  textBlue: {
    color: colors.blue,
  },
});

export default SignInPage;
