import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
