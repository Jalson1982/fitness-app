import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  TextField,
} from "react-native-material-textfield";
import { BorderlessButton } from "react-native-gesture-handler";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        blurOnSubmit={false}
        lineWidth={2}
        tintColor={"#FFFFFF"}
        baseColor={"#FFFFFF"}
        textColor={"#FFFFFF"}
        returnKeyType="next"
        label="Email"
      />
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        blurOnSubmit={false}
        textColor={"#FFFFFF"}
        lineWidth={2}
        returnKeyType="next"
        tintColor={"#FFFFFF"}
        baseColor={"#FFFFFF"}
        label="Password"
      />
       <BorderlessButton borderless={false} style={styles.loginButton} >
        <View accessible>
          <Text style={styles.buttonTitle}>LOG IN WITH EMAIL</Text>
        </View>
      </BorderlessButton>
      <Text style={styles.password}>
          Forgot your password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1,paddingLeft:20,paddingRight:20 },
  loginButton: {
    height: 50,
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45db74",
    borderRadius: 20,
    marginTop:20
  },
  buttonTitle: { color: "#FFFFFF", fontSize: 16, fontWeight:'700' },
  password:{
      fontSize:14,
      fontWeight:'700',
      color:'#FFFFFF',
      textAlign:'center',
      paddingTop:20
  }
});

export default LoginForm;
