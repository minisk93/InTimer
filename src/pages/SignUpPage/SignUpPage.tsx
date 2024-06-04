import React from 'react';

import {Icon, PageWrapper} from 'shared/components';
import {SignUpPageProps} from 'shared/types';
import {SignUpForm} from 'widgets';

import {ArrowBackIcon, colors, sizes} from 'shared/assets';
import {styles} from './SignUpPageStyles';

const SignUpPage: React.FC<SignUpPageProps> = ({navigation}) => {
  return (
    <PageWrapper>
      <SignUpForm />
      <Icon
        icon={ArrowBackIcon}
        size={sizes.iconSmall}
        style={styles.iconArrowIcon}
        fill={colors.blue}
        onPress={() => navigation.goBack()}
      />
    </PageWrapper>
  );
};

export default SignUpPage;
