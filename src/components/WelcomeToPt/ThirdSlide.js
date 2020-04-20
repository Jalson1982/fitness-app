import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { widthPercentageToDP } from "react-native-responsive-screen";

const ThirdSlide = ({ goToNext, sex, updateDetails }) => {
  function updateAndMoveToNextSlide(val) {
    goToNext();
    updateDetails('sex',val)
  }
  console.log(sex)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What gender would you like your training tailored to?
        </Text>
        <Text style={styles.description}>
          Asking a few questions is needed to customise the workout experience
          to you, bear with us!
        </Text>
        
        <View style={styles.selectContainer}>
          <TouchableOpacity onPress={()=>updateAndMoveToNextSlide('female')}>
            <View accessible style={[styles.button, { backgroundColor: sex === 'female' || !sex ? "#00BFFF" : '#FFFFFF'}]}>
              <IonIcons name="ios-woman" size={40} color={ sex === 'female' || !sex  ? '#FFFFFF' : '#000000'} />
              <Text style={[styles.buttonTitle, {color:  sex === 'female' || !sex ? '#FFFFFF':'#000000'}]}>FEMALE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>updateAndMoveToNextSlide('male')}>
            <View style={[styles.button, { backgroundColor: sex === 'male' ? "#00BFFF" : '#FFFFFF'}]}>
              <MaterialIcon name="human-male" size={40} color={sex === 'male' ? '#FFFFFF' : '#000000'}/>
              <Text style={[styles.buttonTitle, {color: sex === 'male' ? '#FFFFFF':'#000000'}]}>MALE</Text>
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
  title: { marginTop: 20, fontSize: 25, fontWeight: "600",paddingLeft:20,paddingRight:20 },
  description: { paddingTop: 20, fontSize: 16, color: "gray",paddingLeft:20,paddingRight:20 },
  selectContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  femaleButtonTitle: { paddingTop: 5, fontWeight: "700" },
  button: {
    width: widthPercentageToDP("48%"),
    height: widthPercentageToDP("48%"),
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    marginLeft:widthPercentageToDP('1.2%'),
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonTitle: { paddingTop: 5, fontWeight: "700" },
});
export default ThirdSlide;
