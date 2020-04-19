import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubmitButton from "../Common/SubmitButton";
import { BorderlessButton } from "react-native-gesture-handler";

const SevenTeenSlide = ({ goToNext, workDays, updateDetails }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            On what days do you want to work out with PT ONLINE?
          </Text>
          <Text style={styles.description}>
            You can choose 2,3 or 4 workouts per week. You can change day of a
            workout at any time.
          </Text>
          <BorderlessButton
            borderless={false}
            onPress={() => {
              updateDetails(
                "workDays",
                workDays.includes("Monday")
                  ? workDays.filter((w) => w !== "Monday")
                  : [...workDays, "Monday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>Monday</Text>
              </View>
              {workDays.includes("Monday") && (
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
              updateDetails(
                "workDays",
                workDays.includes("Tuesday")
                  ? workDays.filter((w) => w !== "Tuesday")
                  : [...workDays, "Tuesday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>Tuesday</Text>
              </View>
              {workDays.includes("Tuesday") && (
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
              updateDetails(
                "workDays",
                workDays.includes("Wednesday")
                  ? workDays.filter((w) => w !== "Wednesday")
                  : [...workDays, "Wednesday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>
                  Wednesday
                </Text>
              </View>
              {workDays.includes("Wednesday") && (
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
              updateDetails(
                "workDays",
                workDays.includes("Thursday")
                  ? workDays.filter((w) => w !== "Thursday")
                  : [...workDays, "Thursday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>
                  Thursday
                </Text>
              </View>
              {workDays.includes("Thursday") && (
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
              updateDetails(
                "workDays",
                workDays.includes("Friday")
                  ? workDays.filter((w) => w !== "Friday")
                  : [...workDays, "Friday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>Friday</Text>
              </View>
              {workDays.includes("Friday") && (
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
              updateDetails(
                "workDays",
                workDays.includes("Saturday")
                  ? workDays.filter((w) => w !== "Saturday")
                  : [...workDays, "Saturday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>
                  Saturday
                </Text>
              </View>
              {workDays.includes("Saturday") && (
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
              updateDetails(
                "workDays",
                workDays.includes("Sunday")
                  ? workDays.filter((w) => w !== "Sunday")
                  : [...workDays, "Sunday"]
              );
            }}
          >
            <View style={styles.metricContainer}>
              <View>
                <Text style={styles.dateLabel}>Sunday</Text>
              </View>
              {workDays.includes("Sunday") && (
                <View>
                  <Icon name="check" size={25} color="#00BFFF" />
                </View>
              )}
            </View>
          </BorderlessButton>
          <View style={styles.divider} />
        </View>
      </ScrollView>
      <SubmitButton
        title="NEXT"
        onPress={() => {
          if (workDays.length > 0) {
            goToNext();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleContainer: { flex: 1 },
  scrollView: { paddingBottom: 100 },
  dateLabel: { fontSize: 16, fontWeight: "600" },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: 20,
    paddingRight: 20,
  },
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
    height: 50,
    paddingLeft: 20,
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
export default SevenTeenSlide;
