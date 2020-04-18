import React, { useRef } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import SubmitButton from "../Common/SubmitButton";

const SixSlide = ({ goToNext }) => {
  const inputRef = useRef();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your current bodyweight?</Text>
        <Text style={styles.description}>
          It's good to remember where the starting point of your journey is,
          both for you and us!
        </Text>

        <View style={styles.metricContainer}>
          <TextInput
            ref={inputRef}
            textAlign={"center"}
            keyboardType="numeric"
            style={styles.textInput}
            placeholder={'-'}
          />
          <Text style={styles.fontBold}>kg</Text>
        </View>
        <SubmitButton title="NEXT" onPress={goToNext} />
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
  description: {
    paddingTop: 20,
    fontSize: 16,
    color: "gray",
    paddingLeft: 20,
    paddingRight: 20,
  },
  metricContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginTop: 20,
    width: widthPercentageToDP("90%"),
  },
  textInput: {
    height: 60,
    borderColor: "gray",
    width: 150,
    fontSize: 45,
    color: "#00BFFF",
    borderBottomWidth: 0.6,
    fontWeight: "800",
  },
  fontBold: { fontWeight: "bold" }
});
export default SixSlide;
