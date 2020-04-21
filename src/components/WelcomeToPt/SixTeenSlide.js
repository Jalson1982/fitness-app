import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubmitButton from "../Common/SubmitButton";
import { BorderlessButton } from "react-native-gesture-handler";

const SixTeenSlide = ({ goToNext, sessionTime, updateDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          On average, how much did you exercise per week in the last month?
        </Text>
        <Text style={styles.description}>
          Your answer will affect how challenging your training programme will
          be.
        </Text>
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('sessionTime',0)
        }}>
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                I don't exercise
              </Text>
            </View>
            {sessionTime === 0 && (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            )}
          </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('sessionTime',1)
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              1 session per week
            </Text>
          </View>
          {sessionTime === 1 && (
            <View>
              <Icon name="check" size={25} color="#00BFFF" />
            </View>
          )}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('sessionTime',2)
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              2 sessions per week
            </Text>
          </View>
          {sessionTime === 2 && (
            <View>
              <Icon name="check" size={25} color="#00BFFF" />
            </View>
          )}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('sessionTime',3)
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              3-4 sessions per week
            </Text>
          </View>
          {sessionTime === 3 && (
            <View>
              <Icon name="check" size={25} color="#00BFFF" />
            </View>
          )}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('sessionTime',4)
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              >4 sessions per week
            </Text>
          </View>
          {sessionTime === 4 && (
            <View>
              <Icon name="check" size={25} color="#00BFFF" />
            </View>
          )}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <SubmitButton title="NEXT" onPress={goToNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    height: 60,
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
export default SixTeenSlide;
