import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle
} from 'react-native';

import {colors, globalStyles} from 'shared/assets';
import {styles} from './BaseButtonStyles';

interface BaseButtonProps extends PressableProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
  const {text} = props;

  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        globalStyles.shadow,
        styles.container,
        {opacity: pressed && Platform.OS === 'ios' ? 0.3 : 1},
        props.style
      ]}
      android_ripple={{color: colors.whiteAlpha}}
      onPress={props.onPress}>
      {props.isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default BaseButton;
