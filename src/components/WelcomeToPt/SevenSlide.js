import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import SubmitButton from "../Common/SubmitButton";

const SevenSlide = ({ goToNext, weight, updateDetails, metric }) => {
  const [val,setVal] = useState(weight);
  function onChange(val) {
    setVal(val);
  }
  function saveWeight() {
    if(val) {
    goToNext();
    updateDetails('weight',val);
    }
  }
  const inputRef = useRef();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>How tall are you?</Text>
        <Text style={styles.description}>
          This give us a better understanding of your physical profile.
        </Text>

        <View style={styles.metricContainer}>
          <TextInput
            ref={inputRef}
            textAlign={"center"}
            keyboardType="numeric"
            value={val}
            style={styles.textInput}
            placeholder={'-'}
            onChangeText={val => onChange(val)}
          />
          <Text style={styles.fontBold}>{metric === 'm' ? 'cm' : 'in'}</Text>
        </View>
        <SubmitButton title="NEXT" onPress={saveWeight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: { flex: 1 },
  title: { marginTop: 20, fontSize: 25, fontWeight: "600",paddingLeft:20,paddingRight:20 },
  description: {
    paddingTop: 20,
    fontSize: 16,
    color: "gray",
    paddingLeft: 20,
    paddingRight: 20,
  },
  metricContainer: {
    flexDirection: "row",
    alignSelf:'center',
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
export default SevenSlide;
