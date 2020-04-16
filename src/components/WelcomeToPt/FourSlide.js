import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import DateTimePicker from '@react-native-community/datetimepicker';
import SubmitButton from "../Common/SubmitButton";

const FourSlide = ({ goToNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What's your date of birth?
        </Text>
        <Text style={styles.description}>
          Even if it's just number, age will at some point have an effect on your physical fitness.
        </Text>
        <View style={styles.dateContainer}>
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          // onChange={onChange}
        />
        </View>
        <SubmitButton title="NEXT" onPress={goToNext}/>
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
  description: { paddingTop: 20, fontSize: 16, color: "gray", paddingLeft:20 ,paddingRight:20},
  dateContainer:  {flex:1,width:widthPercentageToDP('80%'),marginTop:20}
});
export default FourSlide;
