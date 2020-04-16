import React, { useState, useRef } from "react";
import { View,  StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import ProgressBar from "../components/Common/ProgressBar";
import BackButton from "../components/Common/BackButton";
import SwipeScreens from "../components/WelcomeToPt/SwipeScreens";

const WelcomeToPt = () => {
  const insent = useSafeArea().top;
  const [progress, setProgress ] = useState(0);
  const swipeRef = useRef();

  function goToNext(){
     setProgress(progress+0.05);
     swipeRef.current.scrollBy(1);
  }

  function goToPrevious(){
    setProgress(progress - 0.05);
    swipeRef.current.scrollBy(-1);
  }
  return (
    <View style={[styles.container, { paddingTop: insent }]}>
      <BackButton color="gray" goBack={goToPrevious}/>
      <ProgressBar progress={progress}/>
      <SwipeScreens swipeRef={swipeRef} goToNext={goToNext}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
});

export default WelcomeToPt;
