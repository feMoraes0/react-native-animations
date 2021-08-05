import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Airbnb from './src/projects/Airbnb';

export default function App() {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName={Home.name} screenOptions={{ headerShown: false }}>
        <Screen name={Home.name} component={Home.component} />
        <Screen name="Airbnb" component={Airbnb} />
      </Navigator>
    </NavigationContainer>
  );
}