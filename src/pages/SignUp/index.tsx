import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { SignUpStyle } from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const SignUp: React.FunctionComponent = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();

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
        <SignUpStyle.Container>
          <SignUpStyle.Content>
            <SignUpStyle.Logo source={logo} />
            <SignUpStyle.Title>Crie sua conta</SignUpStyle.Title>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Input placeholder="Repita a senha" />
            <Button title="Registrar" />
          </SignUpStyle.Content>
        </SignUpStyle.Container>
      </ScrollView>
      <SignUpStyle.BackToSignIn onPress={() => goBack()}>
        <SignUpStyle.Icon name="arrow-left" />
        <SignUpStyle.BackToSignInTitle>
          Voltar para logon
        </SignUpStyle.BackToSignInTitle>
      </SignUpStyle.BackToSignIn>
    </KeyboardAvoidingView>
  );
};
