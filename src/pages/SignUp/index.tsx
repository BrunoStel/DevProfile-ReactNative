import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { SignUpStyle } from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { InputControl } from '../../components/Form/InputControl';
import { useForm, FieldValues } from 'react-hook-form';
import theme from '../../global/styles/index';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup
    .string()
    .min(8, 'Digite o nome completo')
    .required('Digite o nome completo'),
  email: yup.string().email('Email inválido').required('Informe o email'),
  password: yup
    .string()
    .min(8, 'Mínimo 8 caracteres')
    .required('Informe a senha'),
  passwordConfirmation: yup
    .string()
    .min(8, 'Mínimo 8 caracteres')
    .required('Informe a senha novamente'),
});

export const SignUp: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack } = useNavigation<ScreenNavigationProp>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
      passwordConfirmation: form.passwordConfirmation,
    };
    return data;
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
        <SignUpStyle.Container>
          <SignUpStyle.Content>
            <SignUpStyle.Logo source={logo} />
            <SignUpStyle.Title>Crie sua conta</SignUpStyle.Title>
            <InputControl
              autoCapitalize="none"
              control={control}
              name="name"
              placeholder="Nome completo"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              keyboardType="email-address"
              error={errors.name && errors.name.message}
            />
            <InputControl
              autoCapitalize="none"
              control={control}
              name="email"
              placeholder="Email"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              error={errors.email && errors.email.message}
            />
            <InputControl
              autoCapitalize="none"
              control={control}
              name="password"
              placeholder="Senha"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <InputControl
              autoCapitalize="none"
              control={control}
              name="passwordConfirmation"
              placeholder="Repita a senha"
              placeholderTextColor={theme.colors.light}
              autoCorrect={false}
              secureTextEntry
              error={
                errors.passwordConfirmation &&
                errors.passwordConfirmation.message
              }
            />
            <Button title="Registrar" onPress={handleSubmit(handleSignIn)} />
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
