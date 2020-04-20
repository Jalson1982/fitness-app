import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import moment from 'moment';

const image = require("../../assets/fitness_girl.jpg");

const NextSesion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEXT SESSION</Text>
      <View style={styles.cardContainer}>
        <Image
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.date}>Thu, 23/04</Text>
          <Text style={styles.sessionTitle}>Lower Body</Text>
          <Text style={styles.duration}>Workout - ca. 25 min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    letterSpacing: 1,
    fontSize: widthPercentageToDP('3%'),
    opacity: 0.8,
    paddingLeft:widthPercentageToDP('2.5%'),
    paddingTop: 20
  },
  cardContainer: {
    alignSelf:'center',
    width: widthPercentageToDP("95%"),
    marginTop: 20,
    shadowColor: "#000",
    backgroundColor:'#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  image: {
    width: widthPercentageToDP("95%"),
    height: widthPercentageToDP("60%"),
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  infoContainer: { padding: 20 },
  date: {fontWeight:'600',opacity:0.7,paddingBottom:5, fontSize: widthPercentageToDP('3%')},
  sessionTitle: {fontSize:widthPercentageToDP('5%'), fontWeight:'600',paddingBottom: 5},
  duration: {fontWeight:'300',opacity:0.7, fontSize: widthPercentageToDP('3%')}
});
export default NextSesion;
