import React from 'react';
import { HomeStyle } from './styles';
import avatarDefault from '../../assets/AvatarDefault.jpg';

export const Home = () => {
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
          <HomeStyle.IconButton onPress={() => null}>
            <HomeStyle.Icon name="power" />
          </HomeStyle.IconButton>
        </HomeStyle.UserWrapper>
      </HomeStyle.Header>
    </HomeStyle.Container>
  );
};
