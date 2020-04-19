import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import { widthPercentageToDP } from "react-native-responsive-screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import SubmitButton from "../Common/SubmitButton";

const FourSlide = ({ goToNext, updateDetails, birthData }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (birthData) {
      setDate(new Date(birthData));
    }
  }, []);
  function onChange(event, date) {
    setDate(date);
  }

  function saveDate() {
    if (date) {
      goToNext();
      updateDetails("birthData", date);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your date of birth?</Text>
        <Text style={styles.description}>
          Even if it's just number, age will at some point have an effect on
          your physical fitness.
        </Text>
        <View style={styles.dateContainer}>
          <DateTimePicker
            value={date}
            maximumDate={new Date()}
            mode={"date"}
            display="calendar"
            onChange={onChange}
          />
        </View>
        <SubmitButton title="NEXT" onPress={saveDate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: { flex: 1 },
  title: { marginTop: 20, fontSize: 25, fontWeight: "600", paddingLeft:20,paddingRight:20 },
  description: {
    paddingTop: 20,
    fontSize: 16,
    color: "gray",
    paddingLeft: 20,
    paddingRight: 20,
  },
  dateContainer: { flex: 1, marginTop: 20, },
});
export default FourSlide;
