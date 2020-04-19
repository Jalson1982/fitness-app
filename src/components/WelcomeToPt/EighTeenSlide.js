import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RNPickerSelect from "react-native-picker-select";
import SubmitButton from "../Common/SubmitButton";
import { BorderlessButton } from "react-native-gesture-handler";

const EighTeenSlide = ({ goToNext, reminder, updateDetails }) => {
  const pickerRef = useRef(null);
  const [time, setTime] = useState();
  const items = [
    { label: "0:00", value: "0:00" },
    { label: "0:30", value: "0:30" },
    { label: "1:00", value: "1:00" },
    { label: "1:30", value: "1:30" },
    { label: "2:00", value: "2:00" },
    { label: "2:30", value: "2:30" },
    { label: "3:00", value: "3:00" },
    { label: "3:30", value: "3:30" },
    { label: "4:00", value: "4:00" },
    { label: "4:30", value: "4:30" },
    { label: "5:00", value: "5:00" },
    { label: "5:30", value: "5:30" },
    { label: "6:00", value: "6:00" },
    { label: "6:30", value: "6:30" },
    { label: "7:00", value: "7:00" },
    { label: "7:30", value: "7:30" },
    { label: "8:00", value: "8:00" },
    { label: "08:30", value: "8:30" },
    { label: "09:00", value: "9:00" },
    { label: "09:30", value: "9:30" },
    { label: "10:00", value: "10:00" },
    { label: "10:30", value: "10:30" },
    { label: "11:00", value: "11:00" },
    { label: "11:30", value: "11:30" },
    { label: "12:00", value: "12:00" },
    { label: "12:30", value: "12:30" },
    { label: "13:00", value: "13:00" },
    { label: "13:30", value: "13:30" },
    { label: "14:00", value: "14:00" },
    { label: "14:30", value: "14:30" },
    { label: "15:00", value: "15:00" },
    { label: "15:30", value: "15:30" },
    { label: "16:00", value: "16:00" },
    { label: "16:30", value: "16:30" },
    { label: "17:00", value: "17:00" },
    { label: "17:30", value: "17:30" },
    { label: "18:00", value: "18:00" },
    { label: "18:30", value: "18:30" },
    { label: "19:00", value: "19:00" },
    { label: "19:30", value: "19:30" },
    { label: "20:00", value: "20:00" },
    { label: "20:30", value: "20:30" },
    { label: "21:00", value: "21:00" },
    { label: "21:30", value: "21:30" },
    { label: "22:00", value: "22:00" },
    { label: "22:30", value: "22:30" },
    { label: "23:00", value: "23:00" },
    { label: "23:30", value: "23:30" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Never miss a workout?</Text>
        <Text style={styles.description}>
          Let the app help you follow through by sending reminder notifications
          for upcoming workouts.
        </Text>
        <Text
          style={{
            paddingTop: 20,
            paddingLeft: 20,
            paddingBottom: 10,
            color: "gray",
            fontWeight: "700",
          }}
        >
          TIME OF REMINDER
        </Text>
        <View style={styles.divider} />
        <BorderlessButton
          borderless={false}
          onPress={() => {
            goToNext();
            updateDetails("reminder", 6)}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Early morning sam day  <Text style={{opacity:0.6,fontSize:15}}>(around 06:30)</Text>
              </Text>
            </View>
            {reminder === 6 && (
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
            updateDetails("reminder", 9)}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Late morning same day <Text style={{opacity:0.6,fontSize:15}}>(around 09:00)</Text>
              </Text>
            </View>
            {reminder === 9 && (
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
            updateDetails("reminder", 20)}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Evening before  <Text style={{opacity:0.6,fontSize:15}}>(around 20:30)</Text>
              </Text>
            </View>
            {reminder === 20 && (
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
            pickerRef.current.togglePicker();
          }}
        >
          <View style={styles.metricContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", paddingRight: 10 }}
              >
                Custom time{" "}
               {reminder !== 6 &&
                  reminder !== 9 &&
                  reminder !== 20 &&
                  reminder !== 0 && reminder ?
                  <Text style={{opacity:0.6,fontSize:15}}>({reminder})</Text> : null}
              </Text>
              <RNPickerSelect
                style={{
                  inputIOSContainer: { ontSize: 20 },
                  inputIOS: {
                    fontSize: 16,
                    fontWeight: "500",
                    display: "none",
                  },
                }}
                ref={pickerRef}
                placeholder=""
                value={time}
                onDonePress={() => {
                  updateDetails("reminder", time);
                  goToNext();
                }}
                onValueChange={(value) => setTime(value)}
                items={items}
              />
            </View>
            {reminder &&
            reminder !== 6 &&
            reminder !== 9 &&
            reminder !== 20 &&
            reminder !== 0 ? (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            ) : null}
          </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton
          borderless={false}
          onPress={() => {
            goToNext();
            updateDetails("reminder", 0)}}
        >
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                No reminders
              </Text>
            </View>
            {reminder === 0 && (
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
    alignItems: "center",
  },
  titleContainer: { flex: 1 },
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
export default EighTeenSlide;
