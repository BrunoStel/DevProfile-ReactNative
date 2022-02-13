import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { SigninStyle } from './styles';
import logo from '../../assets/logo.png';

export const Signin: React.FunctionComponent = () => {
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <SigninStyle.Container>
          <SigninStyle.Content>
            <SigninStyle.Logo source={logo} />
            <View>
              <SigninStyle.Title>Faça o seu logon</SigninStyle.Title>
            </View>
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
    </KeyboardAvoidingView>
  );
};
