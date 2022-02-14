import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import { SigninStyle } from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';
import theme from '../../global/styles/index';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any;
}

export const Signin: React.FunctionComponent = () => {
  const { handleSubmit, control } = useForm<FieldValues>();

  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

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
            <InputControl
              autoCapitalize="none"
              control={control}
              name="email"
              placeholder="Email"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              keyboardType="email-address"
            />
            <InputControl
              autoCapitalize="none"
              control={control}
              name="password"
              placeholder="Password"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              secureTextEntry
            />
            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
            <SigninStyle.ForgotPasswordButton>
              <SigninStyle.ForgotPasswordTitle>
                Esqueci minha senha
              </SigninStyle.ForgotPasswordTitle>
            </SigninStyle.ForgotPasswordButton>
          </SigninStyle.Content>
        </SigninStyle.Container>
      </ScrollView>
      <SigninStyle.CreateAccountButton onPress={() => navigate('SignUp')}>
        <SigninStyle.Icon name="log-in" />
        <SigninStyle.CreateAccountTitle>
          Criar uma conta
        </SigninStyle.CreateAccountTitle>
      </SigninStyle.CreateAccountButton>
    </KeyboardAvoidingView>
  );
};
