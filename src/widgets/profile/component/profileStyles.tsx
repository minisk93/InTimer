import { StyleSheet } from "react-native";
import { sizes } from "../../../shared";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
  },
  header: {
    alignSelf: 'center',
  },
  topMarginBig: {
    marginTop: sizes.baseX3,
  },
  topMarginSmall: {
    marginTop: sizes.baseD2,
  },
});
