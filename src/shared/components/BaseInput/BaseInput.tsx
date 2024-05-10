import {useField} from 'formik';
import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Platform,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {colors, globalStyles} from 'shared/assets';
import Icon from '../Icon';
import {styles} from './BaseInputStyles';

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
          trailingIcon ? styles.inputEndPadding : {}
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

export default BaseInput;
