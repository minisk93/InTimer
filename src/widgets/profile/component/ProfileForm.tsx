import {Formik} from 'formik';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {
  BaseButton,
  BaseInput,
  Header,
  useGetUserNames,
  useUserStore,
} from '../../../shared';
import {getProfileValidationSchema} from '../constants';
import {styles} from './profileStyles';

const initialFormValues = {
  firstName: '',
  lastName: '',
  userName: '',
};

type FormFieldsType = {
  firstName: string;
  lastName: string;
  userName: string;
};

const ProfileForm: React.FC = () => {
  const fetchUserNames = useGetUserNames();
  const {userNames} = useUserStore(state => ({userNames: state.userNames}));
  //console.log('USER NAMES: ', userNames);
  useEffect(() => {
    fetchUserNames();
  }, []);

  const ProfileValidationSchema = useMemo(() => {
    getProfileValidationSchema(userNames);
  }, [userNames]);

  const _handleFormSubmit = useCallback(
    ({firstName, lastName, userName}: FormFieldsType) => {
      try {
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={ProfileValidationSchema}
      onSubmit={_handleFormSubmit}>
      {({handleSubmit, isValid}) => (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Header
              text="Set up your profile"
              size="huge"
              style={[styles.header, styles.topMarginBig]}
            />
            <BaseInput
              name="firstName"
              label="First name"
              style={styles.topMarginBig}
              placeholder="John"
            />
            <BaseInput
              name="lastName"
              label="Last name"
              style={styles.topMarginSmall}
              placeholder="Doe"
            />
            <BaseInput
              name="userName"
              label="User name"
              style={styles.topMarginSmall}
              placeholder="Ninja"
            />
            <Header
              text="Tip: Username is used to uniquely identify you within a system"
              size="medium"
              style={styles.topMarginBig}
            />
          </View>
          <BaseButton text="Continue" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ProfileForm;
