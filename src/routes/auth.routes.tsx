import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ToDoPage } from '../pages/ToDoPage';
import { Signin } from '../pages/Signin';
import { SignUp } from '../pages/SignUp';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="ToDoPage"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={Signin} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="ToDoPage" component={ToDoPage} />
    </Auth.Navigator>
  );
};
