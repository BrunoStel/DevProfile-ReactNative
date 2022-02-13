import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { SigninStyle } from './styles';

export const Signin: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <SigninStyle.Container>
        <SigninStyle.AppName>DevProfile</SigninStyle.AppName>
        <SigninStyle.Content>
          <SigninStyle.Title>Faça o seu logon</SigninStyle.Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Entrar" />
        </SigninStyle.Content>
      </SigninStyle.Container>
    </ScrollView>
  );
};
