import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { sizes } from "shared/assets";

export const authStyles = StyleSheet.create({
  iconLogo: {
    width: moderateScale(170),
    height: moderateScale(170),
    alignSelf: 'center',
    marginBottom: sizes.baseX3,
  },
  textHeader: {
    marginTop: sizes.baseX3,
  },
  inputEmail: {
    marginTop: sizes.baseX2,
  },
  button: {
    marginTop: sizes.baseX2,
  },
});
