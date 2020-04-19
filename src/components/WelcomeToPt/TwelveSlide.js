import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubmitButton from "../Common/SubmitButton";
import { BorderlessButton } from "react-native-gesture-handler";

const TwelveSlide = ({ goToNext, fitnessGoal, updateDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your primary fitness goal?</Text>
        <Text style={styles.description}>
          Your answer will affect how the app designs the workouts in your
          training programme.
        </Text>
        <BorderlessButton
          borderless={false}
          onPress={() => {
            goToNext();
            updateDetails("fitnessGoal", "lose_weight")}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
                Lose weight
              </Text>
              <Text style={{ fontWeight: "200" }}>Burn fat and get lean</Text>
            </View>
            {fitnessGoal === "lose_weight" && (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            )}
          </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton
          borderless={false}
          onPress={() => {
            goToNext();
            updateDetails("fitnessGoal", "gain_muscle")}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
                Build srength
              </Text>
              <Text style={{ fontWeight: "200" }}>
                Gain muscle and get stronger
              </Text>
            </View>
            {fitnessGoal === "gain_muscle" && (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            )}
          </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton
          borderless={false}
          onPress={() => {
            goToNext();
            updateDetails("fitnessGoal", "get_in_shape")}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
                Get fitter
              </Text>
              <Text style={{ fontWeight: "200" }}>
                get in shape and feel strong
              </Text>
            </View>
            {fitnessGoal === "get_in_shape" && (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            )}
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
    justifyContent: "flex-start",
  },
  titleContainer: { flex: 1 },
  title: { marginTop: 20, fontSize: 25, fontWeight: "600", paddingLeft: 20 },
  description: {
    paddingTop: 20,
    fontSize: 16,
    color: "gray",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  metricContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "space-between",
    height: 60,
    width: widthPercentageToDP("90%"),
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: widthPercentageToDP("90%"),
    opacity: 0.15,
    marginLeft: 10,
  },
});
export default TwelveSlide;
