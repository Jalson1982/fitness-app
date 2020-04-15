import React from "react";
import { Text, StyleSheet, Linking, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Terms = (props) => {
  const br = "\n";
  function openPrivacyUrl() {
    // Linking.openURL(privacyPolicy);
  }
  function openTermsUrl() {
    // Linking.openURL(termsAndCondition);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By signing up you agree to our {br} <Text style={styles.textBold}>Terms and condition</Text> and{" "}
        <Text style={styles.textBold}>Privacy policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    width: wp("85%"),
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
  },
  textBold: {
    width: wp("85%"),
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight:'bold',
    lineHeight: 20,
  },
  underline: {
    textDecorationLine: "underline",
  },
});

export default Terms;
