import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import SubmitButton from "../Common/SubmitButton.js";
import { widthPercentageToDP } from "react-native-responsive-screen";

const ElevenSlide = ({goToNext}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lottiView}>
      <LottieView
        source={require("../../assets/notes.json")}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      </View>
      <View style={{flex:1.3}}>
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
  },
  lottiView: {flex:1,justifyContent:'center', alignItems:'center'},
  animation: { height: widthPercentageToDP('95%'), },
  title: { marginTop: 60, fontSize: 25, fontWeight: "600", paddingLeft:20 },
  description:{paddingTop:10,fontSize:16,paddingLeft:20,paddingRight:20,color:'gray'}
});
export default ElevenSlide;