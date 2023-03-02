import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInPageProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignIn'
>;

export type SignUpPageProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUp'
>;
