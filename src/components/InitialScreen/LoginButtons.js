import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const LoginButtons = ({emailLogin}) => {
  return (
    <View style={styles.container}>
      <BorderlessButton borderless={false} style={styles.facebookButton}>
        <View accessible>
          <Text style={styles.buttonTitleWhite}>LOG IN WITH FACEBOOK</Text>
        </View>
      </BorderlessButton>
      <BorderlessButton borderless={false} style={styles.emailButton} onPress={emailLogin}>
        <View accessible>
          <Text style={styles.buttonTitleWhite}>LOG IN WITH EMAIL</Text>
        </View>
      </BorderlessButton>
      <Text style={styles.additionalText}>or</Text>
      <BorderlessButton
        borderless={false}
        style={styles.signupButton}
      >
        <View accessible>
        <Text style={styles.buttonTitleBlack}>SIGN UP</Text>
        </View>
      </BorderlessButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  facebookButton: {
    height: 50,
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b5998",
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonTitleWhite: { color: "#FFFFFF", fontSize: 16, fontWeight:'700' },
  buttonTitleBlack: { color: "#000000", fontSize: 16, fontWeight:'700' },
  emailButton: {
    height: 50,
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45db74",
    borderRadius: 20,
  },
  additionalText: {
    paddingTop: 20,
    color: "#FFFFFF",
    fontSize: 20,
    paddingBottom: 20,
  },
  signupButton: {
    height: 50,
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  }
});

export default LoginButtons;
