import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../containers/InitialScreen";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import Workout from "../containers/Workout";
import WelcomeToPt from "../containers/WelcomeToPt";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const defaultScreenOptions = {
  headerShown: false,
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

export function AppSetup() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Welcome" component={WelcomeToPt} />
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
