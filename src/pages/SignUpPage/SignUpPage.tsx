import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SignUpPageProps} from 'shared/types';
import {colors, globalStyles, ArrowBackIcon} from 'shared/assets';
import {SignUpForm} from 'widgets';
import {Icon} from 'shared/components';
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
