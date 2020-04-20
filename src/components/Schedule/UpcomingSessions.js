import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { BorderlessButton } from "react-native-gesture-handler";

const UpcomingSession = ({navigateToWorkout}) => {
  const sessions = [
    {
      date: "23/04",
      day: "Thursday",
      title: "Lower Body",
      duration: 25,
    },
    {
      date: "25/04",
      day: "Friday",
      title: "Upper Body",
      duration: 30,
    },
    {
      date: "26/04",
      day: "Sunday",
      title: "Full Body",
      duration: 25,
    },
    {
      date: "29/04",
      day: "Wednesday",
      title: "Upper Body",
      duration: 30,
    },
    {
      date: "30/04",
      day: "Thursday",
      title: "Lower Body",
      duration: 25,
    },
    {
      date: "01/05",
      day: "Friday",
      title: "Upper Body",
      duration: 30,
    },
    {
      date: "03/05",
      day: "Sunday",
      title: "Full Body",
      duration: 25,
    },
    {
      date: "06/05",
      day: "Wednesday",
      title: "Upper body",
      duration: 30,
    },
    {
      date: "07/05",
      day: "Thursday",
      title: "Lower Body",
      duration: 25,
    },
    {
      date: "08/05",
      day: "Friday",
      title: "Upper body",
      duration: 30,
    },
    {
      date: "14/05",
      day: "Thursday",
      title: "Lower Body",
      duration: 25,
    },
    {
      date: "15/05",
      day: "Friday",
      title: "Upper body",
      duration: 30,
    },
    {
      date: "17/05",
      day: "Sunday",
      title: "Full body",
      duration: 25,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPCOMING SESSIONS</Text>
      <View style={styles.divider} />
      {sessions.map((session) => {
        const { date, title, day, duration } = session;
        return (
          <BorderlessButton borderless={false} onPress={navigateToWorkout}>
            <>
              <View style={styles.row}>
                <View style={styles.leftContainer}>
                  <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={styles.boldedText}>{title}</Text>
                </View>
              </View>
              <View style={styles.rowWithMargin}>
                <View style={styles.leftContainer}>
                  <Text style={styles.paddingLeft}>{day.slice(0, 3)}</Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={styles.duration}>Workout - ca.{duration} min</Text>
                </View>
              </View>
              <View style={styles.divider} />
            </>
          </BorderlessButton>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding:widthPercentageToDP('3%')},
  title: { paddingBottom: 20,  letterSpacing: 1,
    opacity: 0.8, fontSize: widthPercentageToDP('3%') },
  row: {
    flexDirection: "row",
    paddingBottom: 0,
    alignItems: "center",
    height: heightPercentageToDP('5%'),
  },
  rowWithMargin: { flexDirection: "row", paddingBottom: 10, marginTop: -10 },
  paddingLeft: { paddingLeft: widthPercentageToDP("1.5%"),fontSize: widthPercentageToDP('3.2') },
  leftContainer: { width: widthPercentageToDP('10%') },
  rightContainer: { paddingLeft: 20,},
  date: {fontSize: widthPercentageToDP('3.2')},
  boldedText: { fontSize: widthPercentageToDP('3.5%'), fontWeight: "bold" },
  duration: {fontSize: widthPercentageToDP('3.2') },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: widthPercentageToDP("93%"),
    opacity: 0.15,
  },
});
export default UpcomingSession;
