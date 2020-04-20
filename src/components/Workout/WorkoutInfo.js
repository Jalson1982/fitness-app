import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WorkoutInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.row}>
        <View style={styles.halfContainer}>
          <Text style={styles.blueText}>Wed, 13/05</Text>
          <Text style={styles.date}>Date</Text>
        </View>
        <View style={styles.horizontalDivider} />
        <View style={styles.halfContainer}>
        <Text style={styles.blueText}>30 min</Text>
          <Text style={styles.date}>Estimated duration</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp("3%"),
    paddingLeft: wp("3.6%"),
    paddingRight: wp("3.6%"),
  },
  row: { flexDirection: "row" },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: wp("93%"),
    opacity: 0.3,
  },
  horizontalDivider: {
    width: 1,
    backgroundColor: "gray",
    height: hp("15%"),

    opacity: 0.3,
  },
  halfContainer: {
    width: wp("46.5%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
  blueText: {
    color: "#00BFFF",
    fontSize: wp("5%"),
  },
  date: {
    fontSize: wp("4%"),
    paddingTop: 5,
    letterSpacing: 1,
  },
});
export default WorkoutInfo;
