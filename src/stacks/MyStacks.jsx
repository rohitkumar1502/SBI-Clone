import {} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewUser from '../components/Regpage/NewUser';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();
const MyStacks = () => {
  return (
    <Stack.Navigator initialRouteName="NewUser">
      <Stack.Screen
        name="SignUp"
        component={NewUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyStacks;
