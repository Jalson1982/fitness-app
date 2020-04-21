import React, {useState} from "react";
import { View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import Header from "../components/Workout/Header";
import WorkoutInfo from "../components/Workout/WorkoutInfo";
import Equipment from "../components/Workout/Equipment";
import ExerciseList from "../components/Workout/ExerciseList";
import { ScrollView } from "react-native-gesture-handler";

const Workout = ({navigation}) => {
  const insent = useSafeArea().top;

  function navigateToVideo() {
    navigation.navigate('ModalVideo');
  }

  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={{ flex: 1, paddingTop: insent }}>
      <Header goBack={goBack}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <WorkoutInfo />
        <Equipment />
        <ExerciseList navigateToVideo={navigateToVideo} />
      </ScrollView>
    </View>
  );
};

export default Workout;
