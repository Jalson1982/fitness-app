import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Modal from 'react-native-modal';
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Video } from "expo-av";
import { BorderlessButton } from "react-native-gesture-handler";

const video = require("../../assets/732-1080.mp4");
const NineSlide = ({ goToNext, test, updateDetails }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
       <Modal isVisible={isVisible} style={{margin:0}} animationIn="zoomIn" animationOut="fadeOutDown">
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
        <TouchableWithoutFeedback
          onPress={() => setIsVisible(true)}
        >
        <View style={styles.playBtnContainer}>
          <Icon name="play" color="#FFFFFF" size={90}></Icon>
          <Text style={styles.playBtnTitle}>PLAY VIDEO</Text>
          </View>
        </TouchableWithoutFeedback>
        <Video
          isMuted
          shouldPlay={false}
          resizeMode={Video.RESIZE_MODE_COVER}
          usePoster
          source={video}
          style={[styles.flex1, { opacity: 0.4 }]}
        ></Video>
      </View>
      <ScrollView style={styles.flex1}>
        <Text style={styles.title}>Shoulder mobility test</Text>
        <Text style={styles.description}>
          Hold a shoe between your hands  and move your arms backwards.
        </Text>
        <BorderlessButton borderless={false} onPress={()=>{
          updateDetails('test',{...test,'shoulderMobility':0});
          goToNext();
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={styles.option}>
              1. Arms are anywhere between a 90 and 45 degree angle to the floor
            </Text>
          </View>
          {test.shoulderMobility=== 0 &&   <View style={styles.check}>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          updateDetails('test',{...test,'shoulderMobility':1});
          goToNext();
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={styles.option}>
              2. Arms are beyond a 45 degree angle but don't reach the floor
            </Text>
          </View>
          {test.shoulderMobility=== 1 &&   <View style={styles.check}>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
        <BorderlessButton borderless={false} onPress={()=>{
          updateDetails('test',{...test,'shoulderMobility':2});
          goToNext();
        }}>
        <View style={styles.metricContainer}>
          <View>
            <Text style={styles.option}>
              3. Arms and shoe reach the floor
            </Text>
          </View>
          {test.shoulderMobility=== 2 &&   <View style={styles.check}>
            <Icon name="check" size={25} color="#00BFFF" />
          </View>}
        </View>
        </BorderlessButton>
        <View style={styles.divider} />
      </ScrollView>
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
    height: 1,
    backgroundColor: "gray",
    width: widthPercentageToDP("90%"),
    opacity: 0.15,
    marginLeft: 10,
  },
  option: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: "700",
    width: widthPercentageToDP("85%"),
  },
  check: { width: 25, marginLeft:10 },
});
export default NineSlide;
