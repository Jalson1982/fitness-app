import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./src/navigation/navigation";

const Stack = createStackNavigator();

const App = () => {
  const isAuthenticated = useSelector(
    state => state.userReducer.isAuthenticated
  );
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {!isAuthenticated && <Stack.Screen name="Intro" component={AuthScreen}></Stack.Screen>}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
