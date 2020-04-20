import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Equipment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SELECT EQUIPMENT</Text>
      <View style={styles.boxes}>
        <View style={styles.box}>
            <MaterialIcon name="dumbbell" size={wp('10')} style={{opacity:0.5}}/>
            <Text style={styles.boxTitle}>GYM</Text>
        </View>
        <View style={styles.box}>
        <MaterialIcon name="dumbbell" size={wp('10')} style={{opacity:0.5}}/>
            <Text style={styles.boxTitle}>POWER BAND</Text>
        </View>
        <View style={[styles.box, {backgroundColor:'#00BFFF'}]}>
        <MaterialIcon name="dumbbell" size={wp('10')} color="#FFFFFF"/>
            <Text style={styles.boxTitleWhite}>BODYWEIGHT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp("3%"),
    paddingLeft: wp("4%"),
  },
  title: {
    fontSize: wp("4%"),
    letterSpacing: 1,
  },
  boxes: {
    flexDirection: "row",
    paddingTop: hp("1%"),
  },
  box: {
    width: wp("29%"),
    marginRight: wp("2%"),
    height: wp("30%"),
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    backgroundColor:'white',
    justifyContent: "center",
    borderRadius:5,
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  boxTitle:{
      fontSize:wp('3.5%'),
      letterSpacing:1,
      opacity:0.9
  },
  boxTitleWhite:{
    fontSize:wp('3.5%'),
    letterSpacing:1,
    color:'#FFFFFF'
}
});
export default Equipment;
