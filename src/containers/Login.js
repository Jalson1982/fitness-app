import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from "../components/InitialScreen/Logo";
import { useSafeArea } from "react-native-safe-area-context";
import isEmail from "validator/lib/isEmail";
import Terms from "../components/InitialScreen/Terms";
import LoginForm from "../components/Login/LoginForm";
import BackButton from "../components/Common/BackButton";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { loginUser } from "../state/user/actions";
import { useDispatch } from "react-redux";

const backgroundImage = require("../assets/fitness-women-sports-gym.jpg");

const Login = ({ navigation }) => {
  const insent = useSafeArea().top;
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    firstName: "John",
    lastName: "Travolta",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    emailError: null,
    passwordError: null,
  });

  function goBack() {
    navigation.goBack();
  }

  function onChange(name, value) {
    setLoginDetails({ ...loginDetails, [name]: value });
  }

  function login() {
    if (!loginDetails.email) {
      setError({ ...error, emailError: "Email can not be empty" });
    } else if (!isEmail(loginDetails.email)) {
      setError({ ...error, emailError: "Email is not ok" });
    } else if (!loginDetails.password) {
      setError({
        ...error,
        emailError: null,
        passwordError: "Password can not be blank",
      });
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        dispatch(loginUser(loginDetails));
      }, 3000);
    }
  }
  return (
    <KeyboardAwareScrollView
    enableOnAndroid
      style={{ flex: 1, height: heightPercentageToDP("100%") }}
      contentContainerStyle={{ flex: 1 }}
      
    >
      <ImageBackground
        source={backgroundImage}
        style={[styles.image, { paddingTop: insent }]}
      >
        <BackButton goBack={goBack} color="#FFFFFF" />
        <Logo />
        <LoginForm
          loginDetails={loginDetails}
          error={error}
          onChange={onChange}
          login={login}
          isLoading={isLoading}
        />
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
