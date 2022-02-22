import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Home } from '../pages/home';
import { Signin } from '../pages/Signin';
import { SignUp } from '../pages/SignUp';
import { ToDoPageRegister } from '../pages/ToDoPageRegister';
import { tokenSelector } from '../store/signIn/signInSelectors';

const Auth = createNativeStackNavigator();
const App = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  const token = useSelector(tokenSelector);

  if (token) {
    return (
      <App.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Auth.Screen name="Home" component={Home} />
        <Auth.Screen name="ToDoPage" component={ToDoPageRegister} />
      </App.Navigator>
    );
  }
  return (
    <Auth.Navigator
      initialRouteName="Signin"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={Signin} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
