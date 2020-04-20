import React, {useState} from "react";
import { View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import Header from "../components/Workout/Header";
import WorkoutInfo from "../components/Workout/WorkoutInfo";
import Equipment from "../components/Workout/Equipment";
import ExerciseList from "../components/Workout/ExerciseList";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import VideoExercise from "./VideoExercise";

const Workout = ({navigation}) => {
  const insent = useSafeArea().top;
  const [isLoading, setIsLoading ] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
      setIsVisible(true);
      setIsLoading(true);
      setTimeout(()=>{
          setIsLoading(false);
      },500)
  }
  function closeModal() {
      setIsVisible(false);
  }
  return (
    <View style={{ flex: 1, paddingTop: insent }}>
    <VideoExercise isLoading={isLoading} isVisible={isVisible} closeModal={closeModal}/>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <WorkoutInfo />
        <Equipment />
        <ExerciseList openModal={openModal} />
      </ScrollView>
    </View>
  );
};

export default Workout;
