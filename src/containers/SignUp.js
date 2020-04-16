import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeArea } from "react-native-safe-area-context";
import isEmail from "validator/lib/isEmail";
import BackButton from "../components/Common/BackButton";
import { heightPercentageToDP } from "react-native-responsive-screen";
import SignUpHeader from "../components/SignUp/SignUpHeader";
import SignUpForm from "../components/SignUp/SignUpForm";
import { useDispatch } from "react-redux";
import { signUp as signUpAction } from "../state/user/actions";

const SignUp = ({ navigation }) => {
  const insent = useSafeArea().top;
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const verifyEmailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    verifyEmail: "",
    password: "",
  });
  const [error, setError] = useState({
    firstNameError: null,
    lastNameError: null,
    emailError: null,
    verifyEmailError: null,
    passwordError: null,
  });
  const [isLoading, setIsLoading ] = useState(false);

  function goBack() {
    navigation.goBack();
  }

  function onChange(name, value) {
    setSignUpDetails({ ...signUpDetails, [name]: value });
  }

  function signUp() {
    if (!signUpDetails.firstName) {
      setError({ ...error, firstNameError: "First name can not be empty!" });
      firstNameRef.current.focus();
    } else if (!signUpDetails.lastName) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: "Last name can not be empty",
      });
      lastNameRef.current.focus();
    } else if (!signUpDetails.email) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: "Email can not be empty",
      });
      emailRef.current.focus();
    } else if (!isEmail(signUpDetails.email)) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: "Email format not valid",
      });
      emailRef.current.focus();
    } else if (!signUpDetails.verifyEmail) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        verifyEmailError: "Email can not be empty",
      });
      verifyEmailRef.current.focus();
    } else if (!isEmail(signUpDetails.verifyEmail)) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        verifyEmailError: "Email format not valid",
      });
      verifyEmailRef.current.focus();
    } else if (signUpDetails.verifyEmail.toLowerCase() !== signUpDetails.email.toLowerCase()) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: "Email and verify email are not the same.",
        verifyEmailError: "Email and verify email are not the same.",
      });
      emailRef.current.focus();
    } else if (!signUpDetails.password) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        verifyEmailError: null,
        passwordError: "Password can not be empty",
      });
      passwordRef.current.focus();
    } else if (signUpDetails.password.length < 6) {
      setError({
        ...error,
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        verifyEmailError: null,
        passwordError: "Password must be at least 6 characters long",
      });
      passwordRef.current.focus();
    } else {
      setIsLoading(true);
      setError({
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        verifyEmailError: null,
        passwordError: null,
      });;
      setTimeout(()=>{
        setIsLoading(false);
        dispatch(signUpAction(signUpDetails))
      }, 3000)
    }
  }
  return (
    <KeyboardAwareScrollView
      scrollEnabled
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, height: heightPercentageToDP("100%") }}
      contentContainerStyle={{ flex: 1, paddingTop: insent }}
      extraScrollHeight={15}
    >
      <BackButton color="gray" goBack={goBack} />
      <SignUpHeader />
      <SignUpForm
        signUpDetails={signUpDetails}
        onChange={onChange}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        verifyEmailRef={verifyEmailRef}
        passwordRef={passwordRef}
        signUp={signUp}
        error={error}
        isLoading={isLoading}
      />
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

export default SignUp;
