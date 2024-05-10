import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Icon} from 'shared/components';
import {SignUpPageProps} from 'shared/types';
import {SignUpForm} from 'widgets';

import {ArrowBackIcon, colors, globalStyles} from 'shared/assets';
import {styles} from './SignUpPageStyles';

const SignUpPage: React.FC<SignUpPageProps> = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.pageSafeArea}>
      <View style={globalStyles.page}>
        <SignUpForm />
        <Icon
          icon={ArrowBackIcon}
          style={styles.iconArrowIcon}
          fill={colors.blue}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
