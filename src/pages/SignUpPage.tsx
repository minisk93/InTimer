import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SignUpPageProps} from '../processes';
import {colors, globalStyles, Icon, sizes} from '../shared';
import {ArrowBackIcon} from '../shared/assets/icons';
import {SignUpForm} from '../widgets';

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

const styles = StyleSheet.create({
  iconArrowIcon: {
    position: 'absolute',
    width: sizes.iconSmall,
    height: sizes.iconSmall,
    left: sizes.baseX2,
    top: sizes.baseX3,
  },
});

export default SignUpPage;
