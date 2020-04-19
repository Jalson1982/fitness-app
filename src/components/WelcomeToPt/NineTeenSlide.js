import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import moment from "moment";
import { widthPercentageToDP } from "react-native-responsive-screen";
import SubmitButton from "../Common/SubmitButton";

const NineteenSlide = ({
  appSetupDetails,
  randomPrevious,
}) => {
  const {
    sex,
    birthData,
    metric,
    height,
    weight,
    fitnessGoal,
    equipment,
    experience,
    sessionTime,
    workDays,
    test,
  } = appSetupDetails;
  function goToEditProfile() {
    randomPrevious(0.94, -16);
  }
  function goToGoals() {
    randomPrevious(0.35, -6);
  }
  function goToTests() {
    randomPrevious(0.588, -10);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile summary</Text>
          <Text style={styles.description}>
            Check that all inputs are correct.
          </Text>
        </View>
        <View style={styles.cardsContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.textRow}>
              <View>
                <Text style={styles.cardHeadings}>PROFILE</Text>
              </View>
              <View>
                <TouchableOpacity onPress={goToEditProfile}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Selected gender</Text>
              </View>
              <View>
                <Text>{sex}</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Date of birth</Text>
              </View>
              <View>
                <Text>{moment(birthData).format("DD.MMMM YYYY")}</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>System of measurement</Text>
              </View>
              <View>
                <Text>
                  {metric === "i" ? "Metric (in, lb)" : "Metric (cm, kg)"}
                </Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Body weight</Text>
              </View>
              <View>
                <Text>{weight}</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Height</Text>
              </View>
              <View>
                <Text>{height}</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.textRow}>
              <View>
                <Text style={styles.cardHeading}>GOALS AND PREFERENCES</Text>
              </View>
              <View>
                <TouchableOpacity onPress={goToGoals}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Goal</Text>
              </View>
              <View>
                <Text>
                  {fitnessGoal === "get_in_shape"
                    ? "Get fitter"
                    : "Lose weight"}
                </Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Default equipment</Text>
              </View>
              <View>
                <Text>
                  {equipment === "body_weight" ? "Body weight" : "Dumb"}
                </Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Experience</Text>
              </View>
              <View>
                <Text>{experience}</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Current activity</Text>
              </View>
              <View>
                <Text>{sessionTime} per week</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Choosen workout days</Text>
              </View>
              <View>
                <Text>{workDays.map((d) => d.slice(0, 3) + ",")}</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.textRow}>
              <View>
                <Text style={styles.cardHeading}>TESTS</Text>
              </View>
              <View>
                <TouchableOpacity onPress={goToTests}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Ankle mobility</Text>
              </View>
              <View>
                <Text>{test.ankleMobility + 1}/3</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Shoulder mobility</Text>
              </View>
              <View>
                <Text>{test.shoulderMobility + 1}/3</Text>
              </View>
            </View>
            <View style={styles.textRow}>
              <View>
                <Text>Core stability</Text>
              </View>
              <View>
                <Text>{test.coreStability + 1}/3</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <SubmitButton title="GENERATE YOUR PROGRAMME" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: { paddingBottom: 100 },
  cardsContainer: { flex: 1, paddingLeft: 20, paddingRight: 20 },
  cardContainer: {
    backgroundColor: "#F8F8FF",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardHeading: { fontWeight: "700", opacity: 0.5 },
  edit: { color: "#00BFFF", fontSize: 16 },

  titleContainer: { flex: 0.19, alignItems: "center" },
  title: { marginTop: 20, fontSize: 25, fontWeight: "600" },
  description: {
    paddingTop: 20,
    fontSize: 16,
    color: "gray",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:20
  },

});
export default NineteenSlide;
