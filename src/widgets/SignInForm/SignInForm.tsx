import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';

import {BaseButton, BaseInput, Header, Icon} from 'shared/components';

import {EyeCrossedIcon, EyeIcon, LogoIcon, sizes} from 'shared/assets';
import {authStyles} from '../authFormSytles';
import {SignInValidationSchema} from './constants';
import {useSignInForm} from './useSignInForm';

const initialFormValues = {
  email: '',
  password: ''
};

const SignInForm: React.FC = () => {
  const {trigger, isMutating, isPasswordVisible, setIsPasswordVisible} =
    useSignInForm();

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={SignInValidationSchema}
      onSubmit={trigger}>
      {({handleSubmit, isValid}) => (
        <View>
          <Icon
            icon={LogoIcon}
            size={sizes.logoIcon}
            style={authStyles.iconLogo}
          />
          <Header
            text="Sign in to your account"
            size="huge"
            style={authStyles.textHeader}
          />
          <BaseInput
            name="email"
            label="Email"
            style={authStyles.inputEmail}
            placeholder="mymail@gmail.com"
          />
          <BaseInput
            name="password"
            label="Password"
            placeholder="At least 8 charecters"
            trailingIcon={isPasswordVisible ? EyeIcon : EyeCrossedIcon}
            trailingIconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
            secureTextEntry={!isPasswordVisible}
          />
          <BaseButton
            text="Sign In"
            disabled={isMutating}
            isLoading={isMutating}
            style={authStyles.button}
            onPress={() => handleSubmit()}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
