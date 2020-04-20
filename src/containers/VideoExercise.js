import React, { useState, useEffect } from "react";
import { Video } from "expo-av";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const video = require("../assets/287-1080.mp4");
const VideoExercise = ({ isVisible, isLoading, closeModal }) => {
  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0 }}
      animationIn="zoomIn"
      animationOut="fadeOutDown"
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.closeButton}>
          <Icon name="close" size={30} color="#FFFFFF" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.musicNote}>
          <Icon name="music-note" size={30} color="#FFFFFF" />
        </View>
      </TouchableWithoutFeedback>
      {!isLoading ? (
        <View style={{ flex: 1 }}>
          <Video
            isLooping
            isMuted
            shouldPlay
            resizeMode={Video.RESIZE_MODE_COVER}
            usePoster
            source={video}
            style={[{ flex: 1 }]}
          ></Video>
        </View>
      ) : (
        <View
          style={styles.indicator}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 50,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    zIndex: 100,
  },
  musicNote:{
    position: "absolute",
    top: 50,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    zIndex: 100,
  },
  indicator: { flex: 1, alignItems: "center", justifyContent: "center" }
});
export default VideoExercise;
