import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Explore from "./Explore";
import Listing from "./Listing";

export const assets = [
  require("./assets/tiny-home.jpg"),
  require("./assets/cook-house.jpg"),
  require("./assets/host.jpg")
];

export const fonts = {
  CerealBook: require("./assets/fonts/AirbnbCerealBook.ttf"),
  CerealMedium: require("./assets/fonts/AirbnbCerealMedium.ttf"),
  CerealLight: require("./assets/fonts/AirbnbCerealLight.ttf")
};

export default function Airbnb() {
  const {Navigator, Screen} = createStackNavigator();

  return (
      <Navigator initialRouteName="Explore" screenOptions={{ headerShown: false }}>
        <Screen name="Explore" component={Explore} />
        <Screen name="Listing" component={Listing} />
      </Navigator>
  );
}
