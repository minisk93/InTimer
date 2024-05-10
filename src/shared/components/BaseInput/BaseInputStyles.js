import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {colors, sizes} from 'shared/assets';

export const styles = StyleSheet.create({
  inputContainer: {
    height: moderateScale(56)
  },
  input: {
    height: sizes.baseElementHeight,
    paddingHorizontal: sizes.base,
    paddingVertical: sizes.base,
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: sizes.base,
    backgroundColor: colors.white,
    color: colors.gray,
    fontSize: sizes.fontMediumBase,
    fontFamily: 'Electrolize-Regular'
  },
  inputError: {
    shadowColor: colors.red,
    borderColor: colors.red
  },
  inputEndPadding: {
    paddingEnd: sizes.baseX3 + sizes.baseX2
  },
  label: {
    color: colors.black,
    fontSize: sizes.fontMedium,
    fontWeight: '400',
    fontFamily: 'Aldrich-Regular'
  },
  labelIos: {
    paddingVertical: sizes.baseD4
  },
  error: {
    fontSize: sizes.fontSmall,
    color: colors.red,
    paddingVertical: sizes.baseD4
  },
  trailingIcon: {
    position: 'absolute',
    top: sizes.base,
    right: sizes.base,
    width: sizes.iconSmall,
    height: sizes.iconSmall
  }
});
