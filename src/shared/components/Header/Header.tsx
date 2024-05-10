import React from 'react';
import {StyleProp, Text, TextProps, ViewStyle} from 'react-native';

import {sizes} from 'shared/assets';
import {styles} from './HeaderStyles';

const headerSize = {
  huge: sizes.fontHuge,
  big: sizes.fontBig,
  medium: sizes.fontMedium
} as const;

interface HeaderProps extends TextProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  size?: keyof typeof headerSize;
}

const Header: React.FC<HeaderProps> = ({text, size, style, ...restProps}) => {
  return (
    <Text
      style={[styles.header, {fontSize: headerSize[size || 'medium']}, style]}>
      {text}
      {restProps.children}
    </Text>
  );
};

export {Header as default, headerSize};
