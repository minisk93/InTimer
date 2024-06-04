import {Dimensions, StyleSheet} from 'react-native';

import {colors, sizes} from 'shared/assets';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: sizes.baseX4,
    left: sizes.baseX2,
    padding: sizes.baseX2,
    width: width - sizes.baseX4,
    borderRadius: sizes.base,
    borderWidth: sizes.border,
    backgroundColor: colors.white
  },
  successContainer: {
    borderColor: colors.green
  },
  errorContainer: {
    borderColor: colors.red
  },
  title: {
    fontSize: sizes.fontMedium,
    marginBottom: sizes.baseD2
  },
  successTitle: {
    color: colors.greenLight
  },
  errorTitle: {
    color: colors.redLight
  },
  message: {
    fontSize: sizes.fontSmall,
    color: colors.gray,
    marginTop: sizes.base
  },
  closeIcon: {
    position: 'absolute',
    top: sizes.baseX2,
    right: sizes.baseX2
  }
});
