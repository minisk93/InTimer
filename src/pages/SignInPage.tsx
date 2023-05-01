import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {routes, SignInPageProps} from '../processes';
import {colors, globalStyles, Header} from '../shared';
import {SignInForm} from '../widgets';

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
