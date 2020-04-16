import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";
import { widthPercentageToDP } from "react-native-responsive-screen";

const ProgressBar = ({progress}) => {
  return (
    <View style={{ paddingLeft: widthPercentageToDP('4%'), paddingRight: widthPercentageToDP('4%'), marginTop: 20 }}>
      <Progress.Bar
        progress={progress}
        borderRadius={8}
        color="#00BFFF"
        width={widthPercentageToDP("92%")}
        useNativeDriver
        height={2}
        unfilledColor="#DCDCDC"
        borderColor="transparent"
      />
    </View>
  );
};

export default ProgressBar;
