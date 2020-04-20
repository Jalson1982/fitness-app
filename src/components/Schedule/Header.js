import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";

const Header = ({firstName}) => {
  return (
    <View>
      <Text style={styles.title }>Welcome {firstName}!</Text>
      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize:widthPercentageToDP('6%'),
    fontWeight:'bold',
    paddingTop:heightPercentageToDP('2%'),
    paddingLeft:widthPercentageToDP('2.5%'),
    paddingBottom:20
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    alignSelf:'center',
    width: widthPercentageToDP("95%"),
    opacity: 0.15,
  },
})
export default Header;
