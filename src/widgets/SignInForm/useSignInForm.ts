import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import useSWRMutation from 'swr/mutation';

import {SwrKeys} from 'shared/api';

type FormFieldsType = {
  email: string;
  password: string;
};

const signInWithEmailAndPassword = (_: string, {arg}: {arg: FormFieldsType}) =>
  auth().signInWithEmailAndPassword(arg.email, arg.password);

export const useSignInForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {trigger, isMutating} = useSWRMutation(
    SwrKeys.SignIn,
    signInWithEmailAndPassword
  );

  return {
    trigger,
    isMutating,
    isPasswordVisible,
    setIsPasswordVisible
  };
};
