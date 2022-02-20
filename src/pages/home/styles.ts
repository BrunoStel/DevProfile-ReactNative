import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Header = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  width: 100%;
  height: ${RFPercentage(17)}px;
  background-color: #424e5e;
  padding-top: ${RFValue(28)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const UserWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  padding-top: 15px;
  padding-left: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserAvatarButton = styled.TouchableOpacity``;

const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 24px;
`;

const UserInfoDetail = styled.View`
  margin-left: 17px;
`;

const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: bold;
`;

const IconButton = styled.TouchableOpacity``;

const Icon = styled(Feather)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.dark};
  padding-right: 20px;
`;

export const HomeStyle = {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatarButton,
  UserAvatar,
  UserInfoDetail,
  UserGreeting,
  UserName,
  IconButton,
  Icon,
};
