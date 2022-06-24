import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { TBContext } from '../context';
import LogIn from '../screens/LogIn';

const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = { headerShown: false };

const Router = () => {
  const { bearerToken } = useContext(TBContext);

  return (
    <NavigationContainer>
      {!bearerToken && (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
