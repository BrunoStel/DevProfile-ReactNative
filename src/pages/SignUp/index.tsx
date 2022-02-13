import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { SigninStyle } from './styles';

export const SignUp: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <SigninStyle.Container>
        <SigninStyle.AppName>DevProfile</SigninStyle.AppName>
        <SigninStyle.Content>
          <SigninStyle.Title>Crie sua conta</SigninStyle.Title>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Input placeholder="Repita a senha" />
          <Button title="Registrar" />
        </SigninStyle.Content>
      </SigninStyle.Container>
    </ScrollView>
  );
};
