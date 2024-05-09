import React from 'react';
import {
  Pressable,
  PressableProps,
  Platform,
  StyleProp,
  Text,
  ViewStyle
} from 'react-native';
import {colors, globalStyles} from 'shared/assets';
import {styles} from './BaseButtonStyles';

interface BaseButtonProps extends PressableProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

const BaseButton: React.FC<BaseButtonProps> = (props: BaseButtonProps) => {
  const {text} = props;

  return (
    <Pressable
      style={({pressed}) => [
        globalStyles.shadow,
        styles.container,
        {opacity: pressed && Platform.OS === 'ios' ? 0.3 : 1},
        props.style
      ]}
      android_ripple={{color: colors.whiteAlpha}}
      onPress={props.onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default BaseButton;
