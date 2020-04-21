import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BorderlessButton } from "react-native-gesture-handler";

const History = ({ weight }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HISTORY</Text>
      <View style={styles.divider} />
        <Text style={styles.label}>Your history of sessions will be shown here</Text>
      <View style={styles.divider} />
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
  label: {
    fontSize: wp("3.5"),
    paddingLeft: wp('3%'),
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%')
  }
});

export default History;