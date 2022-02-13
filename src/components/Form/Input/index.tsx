import React from 'react';
import { TextInputProps } from 'react-native';
import { InputStyle } from './styles';
import theme from '../../../global/styles/index';

export const Input: React.FunctionComponent<TextInputProps> = ({
  ...otherProps
}) => {
  return (
    <InputStyle.Container
      placeholderTextColor={theme.colors.light}
      {...otherProps}
    />
  );
};
