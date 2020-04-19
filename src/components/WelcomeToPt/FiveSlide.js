import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubmitButton from "../Common/SubmitButton";
import { BorderlessButton } from "react-native-gesture-handler";

const FiveSlide = ({ goToNext, metric , updateDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What system of measurument do you prefer?
        </Text>
        <Text style={styles.description}>
          Things can get pretty confusing if we don't get the units right.
        </Text>
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('metric','m')}}>
        <View style={styles.metricContainer}>
          <View>
            <Text>Metric (kg, cm) </Text>
          </View>
          {metric === 'm' &&
          <View>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('metric','i')}}>
        <View style={styles.metricContainer}>
          <View>
            <Text>Imperial (lb, in) </Text>
          </View>
          {metric === 'i' &&
          <View>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
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
    paddingBottom:20
  },
  metricContainer: {
    flexDirection: "row",
    paddingLeft:20,
    paddingRight:20,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: widthPercentageToDP("90%"),
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    marginLeft:20,
    width: widthPercentageToDP("88%"),
    opacity: 0.15,
  },
});
export default FiveSlide;
