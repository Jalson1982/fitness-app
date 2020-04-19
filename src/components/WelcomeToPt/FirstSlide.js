import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LottieView from "lottie-react-native";
import SubmitButton from "../Common/SubmitButton.js";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useSafeArea, SafeAreaView } from "react-native-safe-area-context";

const logo = require('../../assets/pt.png');

const FirstSlide = ({goToNext}) => {
  return (
    <View style={[styles.container]}>
      <Image source={logo} style={{width:widthPercentageToDP('100%'), height:widthPercentageToDP('50%'),alignSelf:'center'}} resizeMode="contain"/>
      <Text style={styles.title}>
        Welcome to PT ONLINE!
      </Text>
      <Text style={styles.description}>Let's get started with your personalised workout programme.</Text>
      <SubmitButton title='NEXT' onPress={goToNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: widthPercentageToDP('30%')
  },
  animation: { height: 200, marginTop: 20, flex:1 },
  title: { marginTop: 60, fontSize: 25, fontWeight: "600" },
  description:{paddingTop:20,fontSize:16,textAlign:'center'}
});
export default FirstSlide;
