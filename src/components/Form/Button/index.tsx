import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonStyle } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  fontSize?: number;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  fontSize,
  ...otherProps
}) => {
  return (
    <ButtonStyle.Container {...otherProps}>
      <ButtonStyle.Title style={{ fontSize: fontSize }}>
        {title}
      </ButtonStyle.Title>
    </ButtonStyle.Container>
  );
};
