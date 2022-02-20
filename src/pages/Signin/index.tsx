import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import { SigninStyle } from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';
import theme from '../../global/styles/index';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any;
}

interface IUser {
  email: string;
  password: string;
}

const formSchema = yup.object({
  email: yup.string().email('Email inválido').required('Informe o email'),
  password: yup.string().required('Informe a senha'),
});

export const Signin: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { navigate } = useNavigation<ScreenNavigationProp>();

  const getLogin = async (data: IUser) => {
    const response = await axios.post(
      'https://clean-node-api-teste.herokuapp.com/api/login',
      data,
    );
    return response.data.acessToken;
  };

  const handleSignIn = async (form: IFormInputs) => {
    try {
      const data = {
        email: form.email.toLocaleLowerCase(),
        password: form.password,
      };
      const token = await getLogin(data);
      if (token) {
        navigate('Home');
      }
      return data;
    } catch (error) {
      alert('Usuário ou senha incorreto');
    }
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
              onSubmitEditing={handleSubmit(handleSignIn)}
              error={errors.email && errors.email.message}
            />
            <InputControl
              autoCapitalize="none"
              control={control}
              name="password"
              placeholder="Password"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              secureTextEntry
              onSubmitEditing={handleSubmit(handleSignIn)}
              error={errors.password && errors.password.message}
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
