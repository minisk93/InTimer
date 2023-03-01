import {Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
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
import {SignInValidationSchema} from '../constants';

const initialFormValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={SignInValidationSchema}
      onSubmit={() => console.log()}>
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
