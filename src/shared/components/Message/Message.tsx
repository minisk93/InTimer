import React from 'react';
import {Text, View} from 'react-native';

import {UiMessage, UiMessageType} from 'shared/types';

import {CloseIcon, colors, sizes} from 'shared/assets';
import Icon from '../Icon';
import {styles} from './MessageStyles';
import {useMessage} from './useMessage';

interface MessageProps {
  message: UiMessage | null;
}

const Message: React.FC<MessageProps> = ({message}: MessageProps) => {
  const closeMessage = useMessage();
  const isSuccess = message?.type === UiMessageType.Success;

  return (
    <View
      style={[
        styles.container,
        isSuccess ? styles.successContainer : styles.errorContainer
      ]}>
      {message?.title && (
        <Text
          style={[
            styles.title,
            isSuccess ? styles.successTitle : styles.errorTitle
          ]}>
          {message.title}
        </Text>
      )}
      <Icon
        icon={CloseIcon}
        size={sizes.iconTiny}
        style={styles.closeIcon}
        fill={colors.gray}
        onPress={closeMessage}
      />
      <Text style={styles.message}>{message?.message}</Text>
    </View>
  );
};

export default Message;
