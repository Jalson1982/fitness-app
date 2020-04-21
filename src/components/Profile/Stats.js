import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Stats = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>QUICK STATS</Text>
      <View style={styles.divider} />
      <View style={styles.row}>
        <View style={styles.halfContainer}>
          <Text style={styles.blueText}>-</Text>
          <Text style={styles.date}>Completed sessions</Text>
        </View>
        <View style={styles.horizontalDivider} />
        <View style={styles.halfContainer}>
        <Text style={styles.blueText}>-</Text>
          <Text style={styles.date}>Sessions/week last month</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <View style={styles.halfContainer}>
          <Text style={styles.blueText}>-</Text>
          <Text style={styles.date}>Minutes exercised</Text>
        </View>
        <View style={styles.horizontalDivider} />
        <View style={styles.halfContainer}>
        <Text style={styles.blueText}>-</Text>
          <Text style={styles.date}>Average session time in minutes</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp("3%"),
    paddingRight: wp("3.6%"),
  },
  row: { flexDirection: "row" },
  title:{
    paddingLeft:wp('3%'),
    paddingBottom: hp('2%'),
    opacity:0.8
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: wp("100%"),
    opacity: 0.3,
  },
  horizontalDivider: {
    width: 1,
    backgroundColor: "gray",
    height: hp("15%"),
    opacity: 0.3,
  },
  halfContainer: {
    width: wp("50%"),
    height: hp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
  blueText: {
    color: "#00BFFF",
    fontSize: wp("5%"),
  },
  date: {
    fontSize: wp("3.5%"),
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 5,
    letterSpacing: 1,
    position:'absolute',
    top: hp("8%"),
    textAlign:'center'
  },
});
export default Stats;
