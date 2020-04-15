import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Logo from "../components/InitialScreen/Logo";
import { useSafeArea } from "react-native-safe-area-context";
import Terms from "../components/InitialScreen/Terms";
import LoginForm from "../components/Login/LoginForm";
import BackButton from "../components/Common/BackButton";

const backgroundImage = require("../assets/fitness-women-sports-gym.jpg");

const Login = ({navigation}) => {
  const insent = useSafeArea().top;

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={[styles.image, { paddingTop: insent }]}
      >
        <BackButton goBack={goBack}/>
        <Logo />
        <LoginForm />
        <Terms />
      </ImageBackground>
    </View>
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
