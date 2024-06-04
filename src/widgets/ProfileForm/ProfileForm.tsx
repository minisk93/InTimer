import {Formik} from 'formik';
import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {BaseButton, BaseInput, Header} from 'shared/components';
import {useGetUserNames, useUpdateUser} from 'shared/hooks';
import {useUserStore} from 'shared/store';

import {styles} from './ProfileFormStyles';
import {getProfileValidationSchema} from './constants';

const initialFormValues = {
  firstName: '',
  lastName: '',
  userName: ''
};

type FormFieldsType = {
  firstName: string;
  lastName: string;
  userName: string;
};

const ProfileForm: React.FC = () => {
  useGetUserNames();
  const updateUser = useUpdateUser();
  const {userNames} = useUserStore(state => ({userNames: state.userNames}));
  const {user} = useUserStore(state => ({user: state.user}));

  console.log('USER NAMES: ', userNames);

  const ProfileValidationSchema = useMemo(
    () => getProfileValidationSchema(userNames),
    [userNames]
  );

  const _handleFormSubmit = useCallback(
    ({firstName, lastName, userName}: FormFieldsType) => {
      if (!user) {
        return;
      }
      updateUser({...user, firstName, lastName, userName});
    },
    []
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
          <BaseButton text="Continue" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
};

export default ProfileForm;
