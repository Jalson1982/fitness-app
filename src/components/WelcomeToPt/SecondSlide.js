import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import SubmitButton from "../Common/SubmitButton.js";

const SecondSlide = ({goToNext}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/chinup.json")}
        autoPlay
        style={styles.animation}
      />
      <View style={{flex:1,alignItems:'center'}}>
      <Text style={styles.title}>
        You'll now get 3 exercises tests
      </Text>
      <Text style={styles.description}>Learning about your physical abilities is important for the app to tailor your workouts correctly.</Text>
      </View>
      <SubmitButton title='NEXT' onPress={goToNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  animation: { height: 300, marginTop: 20, flex:1, alignSelf:'center' },
  title: { marginTop: 60, fontSize: 25, fontWeight: "600" },
  description:{paddingTop:10,fontSize:16,textAlign:'center',paddingLeft:20,paddingRight:20,color:'gray'}
});
export default SecondSlide;
