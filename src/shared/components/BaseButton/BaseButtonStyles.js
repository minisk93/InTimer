import {StyleSheet} from 'react-native';

import {colors, sizes} from 'shared/assets';

export const styles = StyleSheet.create({
  container: {
    height: sizes.baseElementHeight,
    borderRadius: sizes.base,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: sizes.fontMedium,
    color: colors.white,
    fontFamily: 'Electrolize-Regular',
    fontWeight: '400'
  }
});
