import React from 'react';
import {
  ColorValue,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface IconProps extends PressableProps {
  size: number;
  icon: (props: SvgProps) => JSX.Element;
  fill?: ColorValue | undefined;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({
  size,
  icon: IconElement,
  fill,
  onPress,
  style
}: IconProps) => {
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [{opacity: pressed ? 0.3 : 1}, style]}>
        <IconElement width={size} height={size} fill={fill} />
      </Pressable>
    );
  }

  return (
    <View style={style}>
      <IconElement width={size} height={size} fill={fill} />
    </View>
  );
};

export default Icon;
