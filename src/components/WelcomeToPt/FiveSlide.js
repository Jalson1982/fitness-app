import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubmitButton from "../Common/SubmitButton";

const FiveSlide = ({ goToNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What system of measurument do you prefer?
        </Text>
        <Text style={styles.description}>
          Things can get pretty confusing if we don't get the units right.
        </Text>

        <View style={styles.metricContainer}>
          <View>
            <Text>Metric (kg,cm) </Text>
          </View>
          <View>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.metricContainer}>
          <View>
            <Text>Metric (kg,cm) </Text>
          </View>
          <View>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>
        </View>
        <View style={styles.divider} />
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
    justifyContent: "space-between",
    height: 60,
    width: widthPercentageToDP("90%"),
  },
  divider: {
    height: 0.8,
    backgroundColor: "gray",
    width: widthPercentageToDP("90%"),
    opacity: 0.3,
  },
});
export default FiveSlide;
