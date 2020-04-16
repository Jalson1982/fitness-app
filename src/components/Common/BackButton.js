import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TouchableComponent from "./TouchableComponent";
import { useSafeArea } from "react-native-safe-area-context";

const BackButton = ({ goBack, color }) => {
  return (
    <TouchableComponent
      style={styles.container}
      onPress={goBack}
    >
      <Icon name="ios-arrow-back" size={30} color={color} />
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft:20}
});
export default BackButton;
