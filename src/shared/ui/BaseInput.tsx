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
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {colors, globalStyles, sizes} from '../assets/theme';
import Icon from './Icon';

interface BaseInputProps extends TextInputProps {
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
  value,
  label,
  placeholder,
  style,
  trailingIcon,
  trailingIconFill,
  trailingIconOnPress,
}: BaseInputProps) => {

  const inputElement = (
    <View>
      <TextInput
        style={[
          styles.input,
          globalStyles.shadow,
          label ? {} : style,
          trailingIcon ? styles.inputEndPadding : {},
        ]}
        placeholder={placeholder || ''}
        placeholderTextColor={colors.grayLight}>
        {value || ''}
      </TextInput>
      {!!trailingIcon && (
        <Icon
          icon={trailingIcon}
          style={styles.trailingIcon}
          fill={trailingIconFill || colors.black}
          onPress={trailingIconOnPress}
        />
      )}
    </View>
  );

  if (label) {
    return (
      <View style={style}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.label}>
          {label}
        </Text>
        {inputElement}
      </View>
    );
  }

  return inputElement;
};

const styles = StyleSheet.create({
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
  inputEndPadding: {
    paddingEnd: sizes.baseX3 + sizes.baseX2,
  },
  label: {
    color: colors.black,
    fontSize: sizes.fontMedium,
    fontWeight: '400',
    fontFamily: 'Aldrich-Regular',
    marginBottom: sizes.baseD2,
  },
  trailingIcon: {
    position: 'absolute',
    top: sizes.base,
    right: sizes.base,
    width: sizes.baseX3,
    height: sizes.baseX3,
  },
});

export default BaseInput;
