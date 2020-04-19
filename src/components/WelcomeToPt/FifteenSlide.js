import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubmitButton from "../Common/SubmitButton";
import { BorderlessButton } from "react-native-gesture-handler";

const FifteenSlide = ({ goToNext, experience, updateDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>How much gym experience do you have?</Text>
        <Text style={styles.description}>
          Your answer will affect how difficult exercises the app includes in
          your training programme.
        </Text>
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('experience',"begginer")
        }}>
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>Begginer</Text>
            </View>
            {experience === "begginer" && (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            )}
          </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('experience',"intermediate")
        }}>
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Intermediate
              </Text>
            </View>
            {experience === "intermediate" && (
              <View>
                <Icon name="check" size={25} color="#00BFFF" />
              </View>
            )}
          </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          goToNext();
          updateDetails('experience',"experienced")
        }}>
          <View style={styles.metricContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Experienced
              </Text>
            </View>
            {experience === "experienced" && (
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
export default FifteenSlide;
