import {StyleSheet} from 'react-native';

import {colors} from 'shared/assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.modalBackground,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
