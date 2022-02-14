import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
`;

const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.danger};
  margin-bottom: 16px;
`;

export const InputControlStyle = {
  Container,
  Error,
};
