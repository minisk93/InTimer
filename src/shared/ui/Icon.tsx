import React, {useMemo} from 'react';
import {
  ColorValue,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface IconProps extends PressableProps {
  icon: (props: SvgProps) => JSX.Element;
  fill?: ColorValue | undefined;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const {icon, fill, onPress, style} = props;

  const flattenedStyle = useMemo(() => {
    return StyleSheet.flatten(style) || {};
  }, []);

  const {width, height, ...restStyleProps} = flattenedStyle;
  const svgProps: SvgProps = {width, height, fill};

  const IconElement = icon;
  const WrapComponent = onPress ? Pressable : View;

  return (
    <WrapComponent onPress={onPress} style={restStyleProps}>
      <IconElement {...svgProps} />
    </WrapComponent>
  );
};

export default Icon;
