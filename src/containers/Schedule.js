import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";
import Header from "../components/Schedule/Header";
import { useSelector } from "react-redux";
import NextSesion from "../components/Schedule/NextSession";
import { ScrollView } from 'react-native-gesture-handler';
import UpcomingSession from "../components/Schedule/UpcomingSessions";
import AddButton from "../components/Schedule/AddButton";

const Schedule = ({navigation}) => {
  const { firstName } = useSelector((state) => state.userReducer.userDetails);
  const insent = useSafeArea().top;
  function navigateToWorkout() {
    navigation.navigate('Workout');
  }
  return (
    <View style={{ flex: 1, paddingTop: insent }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
        <Header firstName={firstName} />
        <NextSesion />
        <UpcomingSession navigateToWorkout={navigateToWorkout}/>
      </ScrollView>
      <AddButton />
    </View>
  );
};

export default Schedule;
