import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import SubmitButton from "../Common/SubmitButton.js";

const ElevenSlide = ({goToNext}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/notes.json")}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <View style={{flex:1}}>
      <Text style={styles.title}>
        Seems like some movements might be a bit challenging
      </Text>
      <Text style={styles.description}>Don't worry, now that we've identified this the app will choose exercises that you can do and also incorporate
      exercises that will help you improve.
      </Text>
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
  title: { marginTop: 60, fontSize: 25, fontWeight: "600", paddingLeft:20 },
  description:{paddingTop:10,fontSize:16,paddingLeft:20,paddingRight:20,color:'gray'}
});
export default ElevenSlide;