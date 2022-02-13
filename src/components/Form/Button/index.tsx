import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonStyle } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  ...otherProps
}) => {
  return (
    <ButtonStyle.Container {...otherProps}>
      <ButtonStyle.Title>{title}</ButtonStyle.Title>
    </ButtonStyle.Container>
  );
};
