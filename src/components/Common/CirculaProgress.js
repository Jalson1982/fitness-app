import React, { useEffect } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const logo = require('../../assets/pt.png');
const CirculaProgress = () => {
    useEffect(()=>{
        spring()
    },[])
    const springValue = new Animated.Value(0);
    function spring() {
        springValue.setValue(0);
        Animated.spring(springValue, {
          toValue: 1,
          friction: 10,
          useNativeDriver: true
        }).start(() => spring());
      }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: widthPercentageToDP("40%"),

      }}
    >
      <Animated.Image source={logo} style={[styles.image, {transform: [{scale: springValue}]}]} resizeMode="contain"/>
       <Text style={styles.title}>LOADING PROGRAMME ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width:300,height:200,marginBottom:50},
  title: {fontSize:20, fontWeight:'bold', opacity:0.7}
})
export default CirculaProgress;
