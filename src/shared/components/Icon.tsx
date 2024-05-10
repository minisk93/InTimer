import React, {useMemo} from 'react';
import {
  ColorValue,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface IconProps extends PressableProps {
  icon: (props: SvgProps) => JSX.Element;
  fill?: ColorValue | undefined;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({
  icon: IconElement,
  fill,
  onPress,
  style
}: IconProps) => {
  const flattenedStyle = useMemo(() => {
    return StyleSheet.flatten(style) || {};
  }, []);

  const {width, height, ...restStyleProps} = flattenedStyle;
  const svgProps: SvgProps = {width, height, fill};

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [{opacity: pressed ? 0.3 : 1}, restStyleProps]}>
        <IconElement {...svgProps} />
      </Pressable>
    );
  }

  return (
    <View style={restStyleProps}>
      <IconElement {...svgProps} />
    </View>
  );
};

export default Icon;
