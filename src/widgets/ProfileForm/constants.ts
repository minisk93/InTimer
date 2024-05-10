import * as yup from 'yup';

export const getProfileValidationSchema = (userNames: [string] | []) =>
  yup.object().shape({
    firstName: yup.string().required('Fist name is Required'),
    lastName: yup.string().required('Last name is Required'),
    userName: yup
      .string()
      .required('User name is Required')
      .notOneOf(userNames, 'This user name is already in use')
  });
