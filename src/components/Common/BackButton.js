import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TouchableComponent from "./TouchableComponent";

const BackButton = ({ goBack, color }) => {
  const [ disabled, setDisabled ] = useState(false);
  function handleOnPress(...args) {
    if (disabled) {
      return;
    }
    else {
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 500);
      goBack && goBack(...args);
    }
  }
  return (
    <TouchableComponent
      style={styles.container}
      onPress={handleOnPress}
    >
      <Icon name="ios-arrow-back" size={30} color={color} />
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft:20}
});
export default BackButton;
