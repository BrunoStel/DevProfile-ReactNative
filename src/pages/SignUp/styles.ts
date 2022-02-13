import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const AppName = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 20px;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
  align-items: center;
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 24px;
`;

export const SigninStyle = {
  Container,
  Content,
  Title,
  AppName,
};
