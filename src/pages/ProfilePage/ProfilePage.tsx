import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {ProfilePageProps} from 'shared/types';
import {globalStyles} from 'shared/assets';
import {ProfileForm} from 'widgets';

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
