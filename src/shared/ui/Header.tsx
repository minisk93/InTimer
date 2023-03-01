import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, ViewStyle} from 'react-native';
import {colors, sizes} from '../assets/theme';

const headerSize = {
  huge: sizes.fontHuge,
  big: sizes.fontBig,
  medium: sizes.fontMedium,
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

const styles = StyleSheet.create({
  header: {
    color: colors.gray,
    fontFamily: 'Aldrich-Regular',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export {Header as default, headerSize};
