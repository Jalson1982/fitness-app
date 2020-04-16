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
      <View style={{flex:1, alignItems:'center'}}>
      <Text style={styles.title}>
        Welcome to PT ONLINE!
      </Text>
      <Text style={styles.description}>Let's get started with your personalised workout programme.</Text>
      </View>
      <SubmitButton title='NEXT' onPress={goToNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  animation: { height: 300, marginTop: 20, flex:1 },
  title: { marginTop: 60, fontSize: 25, fontWeight: "600" },
  description:{paddingTop:20,fontSize:16,textAlign:'center'}
});
export default SecondSlide;
