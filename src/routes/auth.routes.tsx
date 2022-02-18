import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Signin } from '../pages/Signin';
import { SignUp } from '../pages/SignUp';
import { ToDoPageRegister } from '../pages/ToDoPageRegister';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={Signin} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="ToDoPage" component={ToDoPageRegister} />
    </Auth.Navigator>
  );
};
