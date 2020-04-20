import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TouchableComponent from "../Common/TouchableComponent";
import ProgressBar from "../Common/ProgressBar";
import { useSafeArea } from "react-native-safe-area-context";
import { widthPercentageToDP } from "react-native-responsive-screen";

const logo = require("../../assets/pt.png");

const Header = ({ goBack, color }) => {
  const insent = useSafeArea().top;

  return (
    <View>
      <View style={[styles.container]}>
        <TouchableComponent>
          <View style={styles.rowContainer}>
            <Icon
              name="ios-arrow-back"
              size={widthPercentageToDP("8%")}
              color={"gray"}
            />
          </View>
        </TouchableComponent>
        <Text style={styles.title}>Upper body</Text>
        <View style={styles.centerContainer}>
          <Text style={styles.edit}>Edit</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContainer: {
    width: widthPercentageToDP("10%"),
    paddingLeft: widthPercentageToDP("3%"),
  },
  centerContainer: { width: widthPercentageToDP("12%") },
  title: {
    fontSize: widthPercentageToDP("4%"),
  },
  edit: {
    alignSelf: "flex-end",
    fontSize: widthPercentageToDP("4%"),
    paddingRight: widthPercentageToDP("3%"),
    fontWeight: "300",
  },
});
export default Header;
