import * as yup from 'yup';
import {SignInValidationSchema} from '../SignInForm/constants';

export const SignUpValidationSchema = yup
  .object()
  .concat(SignInValidationSchema)
  .shape({
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required')
  });
