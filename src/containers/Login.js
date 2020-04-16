import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from "../components/InitialScreen/Logo";
import { useSafeArea } from "react-native-safe-area-context";
import Terms from "../components/InitialScreen/Terms";
import LoginForm from "../components/Login/LoginForm";
import BackButton from "../components/Common/BackButton";
import { heightPercentageToDP } from "react-native-responsive-screen";

const backgroundImage = require("../assets/fitness-women-sports-gym.jpg");

const Login = ({ navigation }) => {
  const insent = useSafeArea().top;

  function goBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, height: heightPercentageToDP("100%") }}
      contentContainerStyle={{ flex: 1 }}
    >
      <ImageBackground
        source={backgroundImage}
        style={[styles.image, { paddingTop: insent }]}
      >
        <BackButton goBack={goBack} color="#FFFFFF" />
        <Logo />
        <LoginForm />
        <Terms />
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Login;
