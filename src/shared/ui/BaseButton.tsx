import React from 'react';
import {
  Pressable,
  PressableProps,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {sizes, colors, globalStyles} from '../assets/theme';

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
        props.style,
      ]}
      android_ripple={{color: colors.whiteAlpha}}
      onPress={props.onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizes.baseElementHeight,
    borderRadius: sizes.base,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes.fontMedium,
    color: colors.white,
    fontFamily: 'Electrolize-Regular',
    fontWeight: '400',
  },
});

export default BaseButton;
