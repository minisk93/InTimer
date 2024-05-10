import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

import {BaseButton, BaseInput, Header, Icon} from 'shared/components';
import {useCreateUser} from 'shared/hooks';

import {EyeCrossedIcon, EyeIcon, LogoIcon} from 'shared/assets';
import {authStyles} from '../authFormSytles';
import {SignUpValidationSchema} from './constants';

const initialFormValues = {
  email: '',
  password: '',
  confirmPassword: ''
};

type FormFieldsType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const createUser = useCreateUser();

  const _handleFormSubmit = useCallback(({email, password}: FormFieldsType) => {
    createUser(email, password);
  }, []);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={SignUpValidationSchema}
      onSubmit={_handleFormSubmit}>
      {({handleSubmit, isValid}) => (
        <View>
          <Icon icon={LogoIcon} style={authStyles.iconLogo} />
          <Header
            text="Create your account"
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
          <BaseInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Repeat your password"
            trailingIcon={isConfirmPasswordVisible ? EyeIcon : EyeCrossedIcon}
            trailingIconOnPress={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
            secureTextEntry={!isConfirmPasswordVisible}
          />
          <BaseButton
            text="Sign Up"
            style={authStyles.button}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
