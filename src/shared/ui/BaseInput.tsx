import {useField} from 'formik';
import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  Platform,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';
import {colors, globalStyles, sizes} from '../assets/theme';
import Icon from './Icon';

interface BaseInputProps extends TextInputProps {
  name: string;
  value?: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  trailingIcon?: (props: SvgProps) => JSX.Element;
  trailingIconOnPress?:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  trailingIconFill?: ColorValue | undefined;
}

const BaseInput: React.FC<BaseInputProps> = ({
  name,
  label,
  placeholder,
  style,
  trailingIcon,
  trailingIconFill,
  trailingIconOnPress,
  ...restProps
}: BaseInputProps) => {
  const [field, {error, touched}, {setTouched, setValue}] = useField(name);

  const inputElement = (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          globalStyles.shadow,
          error && touched ? styles.inputError : {},
          label ? {} : style,
          trailingIcon ? styles.inputEndPadding : {},
        ]}
        placeholder={placeholder || ''}
        placeholderTextColor={colors.grayLight}
        {...restProps}
        value={field.value || ''}
        onBlur={() => setTouched(!touched)}
        onChangeText={setValue}
      />
      {!!trailingIcon && (
        <Icon
          icon={trailingIcon}
          style={styles.trailingIcon}
          fill={trailingIconFill || colors.black}
          onPress={trailingIconOnPress}
        />
      )}
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  );

  if (label) {
    return (
      <View style={style}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.label, Platform.OS === 'ios' ? styles.labelIos : {}]}>
          {label}
        </Text>
        {inputElement}
      </View>
    );
  }

  return inputElement;
};

const styles = StyleSheet.create({
  inputContainer: {
    height: moderateScale(56),
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
    fontFamily: 'Electrolize-Regular',
  },
  inputError: {
    shadowColor: colors.red,
    borderColor: colors.red,
  },
  inputEndPadding: {
    paddingEnd: sizes.baseX3 + sizes.baseX2,
  },
  label: {
    color: colors.black,
    fontSize: sizes.fontMedium,
    fontWeight: '400',
    fontFamily: 'Aldrich-Regular',
  },
  labelIos: {
    paddingVertical: sizes.baseD4,
  },
  error: {
    fontSize: sizes.fontSmall,
    color: colors.red,
    paddingVertical: sizes.baseD4,
  },
  trailingIcon: {
    position: 'absolute',
    top: sizes.base,
    right: sizes.base,
    width: sizes.iconSmall,
    height: sizes.iconSmall,
  },
});

export default BaseInput;
