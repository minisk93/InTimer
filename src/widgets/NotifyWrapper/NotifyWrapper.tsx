import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {FadeWrapper, Loader, Message} from 'shared/components';

import {globalStyles, sizes} from 'shared/assets';
import {styles} from './NotifyWrapperStyles';
import {useNotifyWrapper} from './useNotifyWrapper';

interface NotifyWrapperProps {
  children: ReactNode;
}

const NotifyWrapper: React.FC<NotifyWrapperProps> = ({
  children
}: NotifyWrapperProps) => {
  const {displayableMessage, message, isLoading} = useNotifyWrapper();

  return (
    <View style={globalStyles.pageSafeArea}>
      {children}
      <FadeWrapper isVisible={isLoading} style={styles.container}>
        <Loader size={sizes.loader} strokeWidth={sizes.base} />
      </FadeWrapper>
      <FadeWrapper isVisible={!!message} style={styles.container}>
        <Message message={displayableMessage} />
      </FadeWrapper>
    </View>
  );
};

export default NotifyWrapper;
