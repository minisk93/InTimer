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

export type ProfileStackParamsList = {
  Profile: undefined;
};

export type ProfilePageProps = NativeStackScreenProps<
  ProfileStackParamsList,
  'Profile'
>;

export type HomeStackParamsList = {
  Home: undefined;
};

export type HomePageProps = NativeStackScreenProps<
HomeStackParamsList,
  'Home'
>;
