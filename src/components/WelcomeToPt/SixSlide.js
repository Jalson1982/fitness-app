import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import SubmitButton from "../Common/SubmitButton";

const SixSlide = ({ goToNext, height, updateDetails, metric}) => {
  const [val,setVal] = useState(height);
  function onChange(val) {
    setVal(val);
  }
  function saveHeight() {
    if(val) {
      goToNext();
      updateDetails('height',val);
    }
  }
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
            value={val}
            keyboardType="numeric"
            style={styles.textInput}
            placeholder={'-'}
            onChangeText={(val) => onChange(val)}
          />
          <Text style={styles.fontBold}>{ metric==='m' ? 'kg' : 'lb'}</Text>
        </View>
        <SubmitButton title="NEXT" onPress={saveHeight} />
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
    height: heightPercentageToDP('10%'),
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
