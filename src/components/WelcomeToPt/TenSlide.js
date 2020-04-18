import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import SubmitButton from "../Common/SubmitButton.js";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Video } from "expo-av";

const video = require("../../assets/287-1080.mp4");
const TenSlide = ({ goToNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal visible={isVisible} animationType="fade">
        <View style={styles.flex1}>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={styles.closeButton}
          >
            <Icon name="close" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Video
            isLooping
            isMuted
            shouldPlay
            key={3}
            resizeMode={Video.RESIZE_MODE_COVER}
            usePoster
            source={video}
            style={styles.flex1}
          ></Video>
        </View>
      </Modal>
      <View style={styles.videoContainer}>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={styles.playBtnContainer}
        >
          <Icon name="play" color="#FFFFFF" size={90}></Icon>
          <Text style={styles.playBtnTitle}>PLAY VIDEO</Text>
        </TouchableOpacity>
        <Video
          isLooping
          isMuted
          shouldPlay={false}
          key={3}
          resizeMode={Video.RESIZE_MODE_COVER}
          usePoster
          source={video}
          style={[styles.flex1, { opacity: 0.4 }]}
        ></Video>
      </View>
      <View style={styles.flex1}>
        <Text style={styles.title}>Core stability test</Text>
        <Text style={styles.description}>
          Slowly lift your knee upwards and try to hold it in a 90 degree angle. Complete the test on both
          legs and choose the lowest result.
        </Text>
        <View style={styles.metricContainer}>
          <View>
            <Text style={styles.option}>
              1. The knee doesn't reach and 90 degree angle
            </Text>
          </View>
          <View style={styles.check}>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.metricContainer}>
          <View>
            <Text style={styles.option}>
              2. The knee reaches 90 degrees but you can't keep it there
            </Text>
          </View>
          <View style={styles.check}>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.metricContainer}>
          <View>
            <Text style={styles.option}>
              3. The knee reaches 90 degrees and you can keep it there for more than 10 seconds
            </Text>
          </View>
          <View style={styles.check}>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <SubmitButton title="NEXT" onPress={goToNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  flex1: { flex: 1 },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    zIndex: 100,
  },
  playBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
    alignSelf: "center",
  },
  playBtnTitle: { fontSize: 16, color: "#FFFFFF", fontWeight: "700" },
  videoContainer: {
    flex: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  animation: { height: 300, marginTop: 20, flex: 1, alignSelf: "center" },
  title: { marginTop: 30, fontSize: 25, fontWeight: "600", paddingLeft: 10 },
  description: {
    paddingTop: 10,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 20,
    color: "gray",
    paddingBottom: 20,
  },
  metricContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    width: widthPercentageToDP("90%"),
  },
  divider: {
    height: 0.8,
    backgroundColor: "gray",
    width: widthPercentageToDP("90%"),
    opacity: 0.3,
    marginLeft: 10,
  },
  option: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: "700",
    width: widthPercentageToDP("85%"),
  },
  check: { width: 25, margin: 0 },
});
export default TenSlide;