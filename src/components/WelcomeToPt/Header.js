import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TouchableComponent from "../Common/TouchableComponent";
import ProgressBar from "../Common/ProgressBar";
import { useSafeArea } from "react-native-safe-area-context";

const logo = require("../../assets/pt.png");

const WelcomeHeader = ({ goBack, color }) => {
  const insent = useSafeArea().top;
  const [disabled, setDisabled] = useState(false);
  function handleOnPress(...args) {
    if (disabled) {
      return;
    } else {
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 500);
      goBack && goBack(...args);
    }
  }
  return (
    <View>
    <View style={[styles.container]}>
    <TouchableComponent  onPress={handleOnPress}>
      <View style={{ width: 100, paddingLeft: 20 }}>
        <Icon name="ios-arrow-back" size={30} color={'gray'} />
      </View>
    </TouchableComponent>
    <Image
        source={logo}
        style={{ height: 50, width: 200 }}
        resizeMode="contain"
      />
      <View style={{ width: 100 }} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default WelcomeHeader;
