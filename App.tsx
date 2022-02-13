import React from 'react';
import { Home } from './src/pages/home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Signin } from './src/pages/Signin';
import { SignUp } from './src/pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    </NavigationContainer>
  );
}
