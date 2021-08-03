import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';

export default function App() {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName={Home.name} screenOptions={{ headerMode: 'none'}}>
        <Screen name={Home.name} component={Home.component} />
      </Navigator>
    </NavigationContainer>
  );
}