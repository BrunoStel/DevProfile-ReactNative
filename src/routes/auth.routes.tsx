import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Signin } from '../pages/Signin';
import { SignUp } from '../pages/SignUp';
import { Page } from '../teste';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="Page"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={Signin} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Page" component={Page} />
    </Auth.Navigator>
  );
};
