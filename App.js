import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./screen/WelcomeScreen";
import Home from "./screen/Home";
import Card from "./component/Card";
import Detail from "./screen/Detail";
import AddEvent from "./screen/AddEvent";
import Profile from "./screen/Profile";
const AppStackNavigator = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Home: { screen: Home },
    Card: { screen: Card },
    DetailScreen: { screen: Detail },
    AddEvent: { screen: AddEvent },
    Profile: { screen: Profile }
  },
  { headerMode: "none" }
);

export default createAppContainer(AppStackNavigator);
