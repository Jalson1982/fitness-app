import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BorderlessButton } from "react-native-gesture-handler";

const TrainingAndGoals = ({ experience, workDays, fitnessGoal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRAINING AND GOALS</Text>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.label}>Experience</Text>
        <Text>{experience}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.label}>Days per week</Text>
        <Text>{workDays.length}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.label}>Goal</Text>
        <Text>Build strength</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>
        Get a customized 4-week training programme by completing mobility tests
        and profile questions. You can do this at any time but keep in mind that
        it will replace your existing programme.
      </Text>
      <View style={styles.divider} />
      <BorderlessButton borderless={false} style={styles.button}>
        <Text style={styles.buttonTitle}>GET TRAINING PROGRAMME</Text>
      </BorderlessButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp("4%"),
  },
  title: {
    paddingLeft: wp("3%"),
    opacity: 0.8,
    paddingBottom: hp("2%"),
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: wp("100%"),
    opacity: 0.3,
  },
  row: {
    flexDirection: "row",
    paddingLeft: wp("3%"),
    paddingRight: wp("3%"),
    flexDirection: "row",
    justifyContent: "space-between",
    height: hp("6%"),
    alignItems: "center",
  },
  label: {
    fontSize: wp("3.5"),
    fontWeight: "700",
  },
  description: {
    paddingLeft: wp("3%"),
    paddingRight: wp("3%"),
    paddingTop: hp("1.5%"),
    letterSpacing: 0.3,
    opacity: 0.8,
    paddingBottom: hp("1.5%"),
  },
  button: {
    height: hp("6%"),
    width: wp("90%"),
    backgroundColor: "#00BFFF",
    alignSelf: "center",
    borderRadius: hp("3%"),
    marginTop: hp("1.5%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp('2%')
  },
  buttonTitle:{
      color:'#FFFFFF',
      fontSize: wp('4%'),
      fontWeight:'600'
  }
});

export default TrainingAndGoals;
