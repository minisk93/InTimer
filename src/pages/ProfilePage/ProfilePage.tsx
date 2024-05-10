import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ProfilePageProps} from 'shared/types';
import {ProfileForm} from 'widgets';

import {globalStyles} from 'shared/assets';

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <SafeAreaView style={globalStyles.pageSafeArea}>
      <View style={[globalStyles.page]}>
        <ProfileForm />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
