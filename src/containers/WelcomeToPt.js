import React, { useState, useRef } from "react";
import { View,  StyleSheet, SafeAreaView } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import ProgressBar from "../components/Common/ProgressBar";
import BackButton from "../components/Common/BackButton";
import SwipeScreens from "../components/WelcomeToPt/SwipeScreens";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAppSetupDetails } from "../state/user/actions";
import WelcomeHeader from "../components/WelcomeToPt/Header";

const WelcomeToPt = () => {
  const insent = useSafeArea().top;
  const [progress, setProgress ] = useState(0);
  const swipeRef = useRef();
  const appSetupDetails = useSelector(state => state.userReducer.appSetupDetails)
  const dispatch = useDispatch();

  function goToNext(){
     setProgress(progress+0.0588);
     swipeRef.current.scrollBy(1);
  }

  function goToPrevious(){
    if(progress !== 0) {
    setProgress(progress - 0.0588);
    swipeRef.current.scrollBy(-1);
    }
  }
  
  function randomPrevious(progressVal, index){
    setProgress(progress - progressVal);
    swipeRef.current.scrollBy(index);
  }
  function updateDetails(name,val) {
    dispatch(updateUserAppSetupDetails(name,val))
  }
  return (
    <View style={[styles.container,{paddingTop:insent}]}>
      <WelcomeHeader goBack={goToPrevious} />
      <ProgressBar progress={progress} />
      <SwipeScreens randomPrevious={randomPrevious} swipeRef={swipeRef} goToNext={goToNext} appSetupDetails={appSetupDetails} updateDetails={updateDetails} />
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
