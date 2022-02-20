import React from 'react';
import { HomeStyle } from './styles';
import avatarDefault from '../../assets/AvatarDefault.jpg';
import { Button } from '../../components/Form/Button';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const Home = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const exit = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente sair', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => navigate('SignIn'),
      },
    ]);
  };

  return (
    <HomeStyle.Container>
      <HomeStyle.Header>
        <HomeStyle.UserWrapper>
          <HomeStyle.UserInfo>
            <HomeStyle.UserAvatarButton onPress={() => null}>
              <HomeStyle.UserAvatar source={avatarDefault} />
            </HomeStyle.UserAvatarButton>
            <HomeStyle.UserInfoDetail>
              <HomeStyle.UserGreeting>Olá, </HomeStyle.UserGreeting>
              <HomeStyle.UserName>Bruno</HomeStyle.UserName>
            </HomeStyle.UserInfoDetail>
          </HomeStyle.UserInfo>
          <HomeStyle.IconButton onPress={() => exit()}>
            <HomeStyle.Icon name="power" />
          </HomeStyle.IconButton>
        </HomeStyle.UserWrapper>
      </HomeStyle.Header>
      <Button
        title={'Minhas tarefas'}
        fontSize={20}
        onPress={() => navigate('ToDoPage')}
      />
    </HomeStyle.Container>
  );
};
