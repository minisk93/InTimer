import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {colors, globalStyles, sizes} from '../assets/theme';

interface BaseInputProps extends TextInputProps {
  value?: string;
  label?: string;
  placeholder?: string;
}

const BaseInput: React.FC<BaseInputProps> = (props: BaseInputProps) => {
  const {value, label, placeholder} = props;

  const inputElement = (
    <TextInput
      style={[styles.input, globalStyles.shadow]}
      placeholder={placeholder || ''}
      placeholderTextColor={colors.grayLight}>
      {value || ''}
    </TextInput>
  );

  let inputComponent = inputElement;

  if (label) {
    inputComponent = (
      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.label}>
          {label}
        </Text>
        {inputElement}
      </View>
    );
  }

  return inputComponent;
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
  label: {
    color: colors.black,
    fontSize: sizes.fontMedium,
    fontWeight: '400',
    fontFamily: 'Aldrich-Regular',
    marginBottom: sizes.baseD2,
  },
});

export default BaseInput;
