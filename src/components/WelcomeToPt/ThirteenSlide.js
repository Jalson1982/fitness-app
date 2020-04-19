import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP } from "react-native-responsive-screen";

const ThirteenSlide = ({ goToNext, equipment, updateDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What equipment do you want to work out most frequently with?
        </Text>
        <Text style={styles.description}>
          Before you start a workout you get to choose one of the euqipment alternatives bellow. Your answer here 
          will set the default alternative.
        </Text>

        <View style={styles.selectContainer}>
          <TouchableOpacity onPress={()=>{
            goToNext();
            updateDetails('equipment',"gym")
          }}>
            <View accessible style={[styles.button,{backgroundColor: !equipment || equipment==='gym' ? '#00BFFF': '#FFFFFF'}]}>
              <MaterialIcon name="dumbbell" size={40} color={!equipment || equipment==='gym' ? "#FFFFFF" : '#000000'}/>
              <Text style={[styles.buttonTitle, {color:!equipment || equipment==='gym' ? "#FFFFFF" : '#000000'}]}>GYM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            goToNext();
            updateDetails('equipment',"power_band")
          }}>
            <View style={[styles.button,{backgroundColor: equipment==='power_band' ? '#00BFFF': '#FFFFFF'}]}>
            <MaterialIcon name="dumbbell" size={40} color={equipment==='power_band' ? "#FFFFFF" : '#000000'}/>
              <Text style={[styles.buttonTitle, {color:equipment==='power_band' ? "#FFFFFF" : '#000000'}]}>POWER BAND</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            goToNext();
            updateDetails('equipment',"body_weight")
          }}>
            <View style={[styles.button,{backgroundColor: equipment==='body_weight' ? '#00BFFF': '#FFFFFF'}]}>
            <MaterialIcon name="dumbbell" size={40} color={equipment==='body_weight' ? "#FFFFFF" : '#000000'}/>
              <Text style={[styles.buttonTitle, {color:equipment==='body_weight' ? "#FFFFFF" : '#000000'}]}>BODYWEIGHT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: { flex: 1 },
  title: { marginTop: 20, fontSize: 25, fontWeight: "600", paddingLeft:20,paddingRight:20 },
  description: { paddingTop: 20, fontSize: 16, color: "gray", paddingLeft:20,paddingRight:20 },
  selectContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  buttonTitle: { paddingTop: 5, fontWeight: "700" },
  button: {
    width: widthPercentageToDP("28%"),
    height: widthPercentageToDP("25%"),
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    marginRight:10,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  maleButtonTitle: { color: "#000000", paddingTop: 5, fontWeight: "700" },
});
export default ThirteenSlide;
