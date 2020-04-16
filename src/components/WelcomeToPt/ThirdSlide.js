import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP } from "react-native-responsive-screen";

const ThirdSlide = ({ goToNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What gender would you like your training tailored to?
        </Text>
        <Text style={styles.description}>
          Asking a few questions is needed to customise the workout experience
          to you, bear with us!
        </Text>

        <View style={styles.selectContainer}>
          <TouchableOpacity onPress={goToNext}>
            <View accessible style={styles.femaleButton}>
              <IonIcons name="ios-woman" size={40} color="#FFFFFF" />
              <Text style={styles.femaleButtonTitle}>FEMALE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNext}>
            <View style={styles.maleButton}>
              <MaterialIcon name="human-male" size={40} />
              <Text style={styles.maleButtonTitle}>MALE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: { flex: 1, alignItems: "center" },
  title: { marginTop: 60, fontSize: 25, fontWeight: "600" },
  description: { paddingTop: 20, fontSize: 16, color: "gray" },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  femaleButton: {
    width: widthPercentageToDP("43%"),
    justifyContent: "center",
    alignItems: "center",
    height: widthPercentageToDP("25%"),
    borderRadius: 5,
    backgroundColor: "#00BFFF",
    marginRight: 20,
  },
  femaleButtonTitle: { color: "#FFFFFF", paddingTop: 5, fontWeight: "700" },
  maleButton: {
    width: widthPercentageToDP("43%"),
    height: widthPercentageToDP("25%"),
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  maleButtonTitle: { color: "#000000", paddingTop: 5, fontWeight: "700" },
});
export default ThirdSlide;
