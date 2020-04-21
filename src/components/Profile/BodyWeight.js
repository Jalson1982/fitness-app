import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BorderlessButton } from "react-native-gesture-handler";

const BodyWeight = ({ weight }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BODY WEIGHT</Text>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.label}>Current weight</Text>
        <Text>{weight} kg</Text>
      </View>
      <View style={styles.divider} />
      <BorderlessButton borderless={false} style={styles.button}>
        <Text style={styles.buttonTitle}>UPDATE BODYWEIGHT</Text>
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

export default BodyWeight;
