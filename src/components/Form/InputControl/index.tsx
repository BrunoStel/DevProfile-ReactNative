import React from 'react';
import { TextInputProps } from 'react-native';
import { InputControlStyle } from './styles';
import { Controller, Control } from 'react-hook-form';
import { InputStyle } from '../Input/styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined;
}

export const InputControl: React.FunctionComponent<Props> = ({
  control,
  name,
  error,
  ...otherProps
}) => {
  return (
    <InputControlStyle.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputStyle.Container
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />
        )}
        name={name}
      />
      {error && <InputControlStyle.Error>{error}</InputControlStyle.Error>}
    </InputControlStyle.Container>
  );
};
