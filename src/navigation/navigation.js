import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Platform } from "react-native";
import InitialScreen from "../containers/InitialScreen";
import Login from "../containers/Login";
import SignUp from "../containers/SignuUp";
import Workout from "../containers/Workout";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const defaultScreenOptions = {
    headerShown: false
  };

export function AuthScreen() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
      ></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
    </Stack.Navigator>
  );
}

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Workout} />
      <Tab.Screen name="Settings" component={Workout} />
    </Tab.Navigator>
  );
}
