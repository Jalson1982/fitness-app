import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BorderlessButton } from "react-native-gesture-handler";

const image = require("../../assets/fitness_girl.jpg");
const ExerciseList = ({navigateToVideo}) => {
  const exerciseList = [
    { image, title: "Running in place" },
    { image, title: "Bent over around the world" },
    { image, title: "Walk out to push-up" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OVERVIEW</Text>
      <View style={styles.textRow}>
        <View style={styles.textBox}>
          <Text style={styles.number}>1</Text>
        </View>
        <Text style={styles.regularText}>WARMUP</Text>
      </View>
      <View style={styles.divider} />
      {exerciseList.map((exercise) => {
        return (
          <>
            <TouchableWithoutFeedback onPress={navigateToVideo}>  
            <View style={styles.imageRow}>
              <Image
                source={exercise.image}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.divider} />
          </>
        );
      })}
      <View style={styles.textRow}>
        <View style={styles.textBox}>
          <Text style={styles.number}>2</Text>
        </View>
        <Text style={styles.regularText}>SUPERSET</Text>
      </View>
      <View style={styles.divider} />
      {exerciseList.map((exercise) => {
        return (
          <>
           <TouchableWithoutFeedback onPress={navigateToVideo}>   
            <View style={styles.imageRow}>
              <Image
                source={exercise.image}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.divider} />
          </>
        );
      })}
      <View style={styles.textRow}>
        <View style={styles.textBox}>
          <Text style={styles.number}>3</Text>
        </View>
        <Text style={styles.regularText}>SUPERSET</Text>
      </View>
      <View style={styles.divider} />
      {exerciseList.map((exercise) => {
        return (
          <>
            <TouchableWithoutFeedback onPress={navigateToVideo}>   
            <View style={styles.imageRow}>
              <Image
                source={exercise.image}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.divider} />
          </>
        );
      })}
      <View style={styles.textRow}>
        <View style={styles.textBox}>
          <Text style={styles.number}>4</Text>
        </View>
        <Text style={styles.regularText}>SUPERSET</Text>
      </View>
      <View style={styles.divider} />
      {exerciseList.map((exercise) => {
        return (
          <>
          <BorderlessButton borderless={false} onPress={navigateToVideo}>  
            <View style={styles.imageRow}>
              <Image
                source={exercise.image}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            </View>
        </BorderlessButton>
            <View style={styles.divider} />
          </>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp("4%"),
    paddingTop: hp("2%"),
  },
  title: {
    fontSize: wp("4%"),
    letterSpacing: 1,
  },
  textRow: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
  },
  textBox: {
    width: wp("5%"),
    height: wp("5%"),
    backgroundColor: "#00BFFF",
    opacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  number: {
    color: "#FFFFFF",
    fontSize: wp("3%"),
  },
  regularText: {
    alignSelf: "center",
    paddingLeft: wp("3%"),
    fontSize: wp("3.5%"),
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: wp("93%"),
    opacity: 0.3,
  },
  imageRow: {
    flexDirection: "row",
  },
  image: {
    width: wp("20%"),
    height: wp("22%"),
  },
  exerciseTitle:{
      alignSelf:'center',
      paddingLeft: wp('3%'),
      fontSize: wp('4%'),
      fontWeight: 'bold'
  }
});
export default ExerciseList;
