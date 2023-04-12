import {Formik} from 'formik';
import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  BaseButton,
  BaseInput,
  Header,
  EyeCrossedIcon,
  EyeIcon,
  Icon,
  LogoIcon,
} from '../../../shared';
import {authStyles} from '../authSytles';
import {SignUpValidationSchema} from '../constants';

const initialFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
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

  const _handleFormSubmit = useCallback(({email, password}: FormFieldsType) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
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
