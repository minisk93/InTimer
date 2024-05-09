import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {EyeCrossedIcon, EyeIcon, LogoIcon} from 'shared/assets';
import {authStyles} from '../authFormSytles';
import {SignInValidationSchema} from './constants';
import {BaseButton, BaseInput, Header, Icon} from 'shared/components';

const initialFormValues = {
  email: '',
  password: ''
};

type FormFieldsType = {
  email: string;
  password: string;
};

const SignInForm: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const _handleFormSubmit = useCallback(({email, password}: FormFieldsType) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }, []);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={SignInValidationSchema}
      onSubmit={_handleFormSubmit}>
      {({handleSubmit, isValid}) => (
        <View>
          <Icon icon={LogoIcon} style={authStyles.iconLogo} />
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
            style={authStyles.button}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
