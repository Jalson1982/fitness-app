import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import InitialScreen from "../containers/InitialScreen";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import WelcomeToPt from "../containers/WelcomeToPt";
import AnimatedTabBar from "@gorhom/animated-tabbar";
import HomeSVG from '../components/Svg/homeSvg';
import LikeSVG from '../components/Svg/likeSvg';
import ProfileSVG from '../components/Svg/profileSvg';
import Schedule from "../containers/Schedule";
import Workout from "../containers/Workout";
import VideoExercise from "../containers/VideoExercise";
import Menu from "../containers/Menu";
import Profile from "../containers/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabs = {
  Home: {
    labelStyle: {
      color: '#45db74',
    },
    icon: {
      component: HomeSVG,
      activeColor: '#45db74',
      inactiveColor: '#FFFFFF',
    },
    background: {
      activeColor: '#FFFFFF',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
  Menu: {
    labelStyle: {
      color: '#45db74',
    },
    icon: {
      component: LikeSVG,
      activeColor: '#45db74',
      inactiveColor: '#FFFFFF',
    },
    background: {
      activeColor: '#FFFFFF',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: '#45db74',
    },
    icon: {
      component: ProfileSVG,
      activeColor: '#45db74',
      inactiveColor: '#FFFFFF',
    },
    background: {
      activeColor: '#FFFFFF',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
};


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

export function ModalVideo() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="VideoExercise" component={VideoExercise} ></Stack.Screen>
    </Stack.Navigator>
  )
}
export function Workouts() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Workout" component={Workout} />
    </Stack.Navigator>
  )
}
export function TabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      style: {
        backgroundColor: '#45db74',
      },
    }}
    tabBar={props => (
      <AnimatedTabBar
        isRTL={true}
        iconSize={20}
        duration={500}
        tabs={tabs}
        {...props}
      />
    )}
  >

    <Tab.Screen
      name="Menu"
      options={{
        tabBarLabel: 'Menu',
      }}
      initialParams={{
        backgroundColor: '#000',
      }}
      component={Menu}
    />
    <Tab.Screen
      name="Profile"
      options={{
        tabBarLabel: 'Profile',
      }}
      initialParams={{
        backgroundColor: '#000',
      }}
      component={Profile}
    />
     <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: 'Studio',
      }}
      initialParams={{
        backgroundColor: '#000',
      }}
      component={Workouts}
    />
     </Tab.Navigator>
  );
}


export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="ModalVideo" component={ModalVideo} options={{...TransitionPresets.ModalTransition}}/>
    </Stack.Navigator>
  )
}