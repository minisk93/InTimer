import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const baseSize = moderateScale(8);

export const sizes = {
  baseD4: baseSize / 4,
  baseD2: baseSize / 2,
  base: baseSize,
  baseX2: baseSize * 2,
  baseX3: baseSize * 3,
  baseX4: baseSize * 4,

  fontTiny: moderateScale(10),
  fontSmall: moderateScale(12),
  fontMediumBase: moderateScale(14),
  fontMedium: moderateScale(16),
  fontBig: moderateScale(18),
  fontHuge: moderateScale(24),

  iconSmall: moderateScale(24),

  baseElementHeight: moderateScale(38),
};

export const colors = {
  black: '#000000',
  blue: '#1F329D',
  gray: '#4E4E4E',
  grayLight: '#828282',
  green: '#9ACA00',
  white: '#FFFFFF',
  whiteAlpha: '#FFFFFF33',
  red: '#E60000',
};

export const globalStyles = StyleSheet.create({
  pageSafeArea: {
    backgroundColor: colors.white,
    flex: 1,
  },
  page: {
    padding: sizes.baseX3,
    flex: 1,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: sizes.base,
    shadowOpacity: 0.7,
    elevation: 15,
  },
});
