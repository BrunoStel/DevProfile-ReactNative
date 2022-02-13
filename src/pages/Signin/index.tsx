import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { SigninStyle } from './styles';
import logo from '../../assets/logo.png';

export const Signin: React.FunctionComponent = () => {
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <SigninStyle.Container>
          <SigninStyle.Content>
            <SigninStyle.Logo source={logo} />
            <SigninStyle.Title>Faça o seu logon</SigninStyle.Title>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Entrar" />
            <SigninStyle.ForgotPasswordButton>
              <SigninStyle.ForgotPasswordTitle>
                Esqueci minha senha
              </SigninStyle.ForgotPasswordTitle>
            </SigninStyle.ForgotPasswordButton>
          </SigninStyle.Content>
        </SigninStyle.Container>
      </ScrollView>
      <SigninStyle.CreateAccountButton>
        <SigninStyle.Icon name="log-in" />
        <SigninStyle.CreateAccountTitle>
          Criar uma conta
        </SigninStyle.CreateAccountTitle>
      </SigninStyle.CreateAccountButton>
    </>
  );
};
