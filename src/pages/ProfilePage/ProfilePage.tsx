import React from 'react';

import {PageWrapper} from 'shared/components';
import {ProfilePageProps} from 'shared/types';
import {ProfileForm} from 'widgets';

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <PageWrapper>
      <ProfileForm />
    </PageWrapper>
  );
};

export default ProfilePage;
