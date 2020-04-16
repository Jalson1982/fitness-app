import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { TextField } from "react-native-material-textfield";
import { BorderlessButton } from "react-native-gesture-handler";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SignUpForm = ({
  signUpDetails,
  onChange,
  firstNameRef,
  lastNameRef,
  emailRef,
  verifyEmailRef,
  passwordRef,
  error,
  signUp,
  isLoading
}) => {
  const { firstName, lastName, email, verifyEmail, password } = signUpDetails;
  const { firstNameError, lastNameError, emailError, verifyEmailError, passwordError } = error;
  return (
    <View style={styles.container}>
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        ref={firstNameRef}
        labelTextStyle={{ fontWeight: "bold", marginLeft: -20 }}
        blurOnSubmit={false}
        lineWidth={2}
        value={firstName}
        error={firstNameError ? firstNameError : null}
        onChangeText={(val) => onChange("firstName", val)}
        onSubmitEditing={() => lastNameRef.current.focus()}
        placeholder="First Name"
        returnKeyType="next"
        label="First name"
      />
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        ref={lastNameRef}
        value={lastName}
        error={lastNameError ? lastNameError : null}
        labelTextStyle={{ fontWeight: "bold", marginLeft: -20 }}
        blurOnSubmit={false}
        onChangeText={(val) => onChange("lastName", val)}
        onSubmitEditing={() => emailRef.current.focus()}
        lineWidth={2}
        placeholder="Last Name"
        returnKeyType="next"
        label="Last Name"
      />
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        labelTextStyle={{ fontWeight: "bold", marginLeft: -20 }}
        blurOnSubmit={false}
        value={email}
        autoCapitalize = 'none'
        error={emailError ? emailError : null}
        keyboardType="email-address"
        onChangeText={(val) => onChange("email", val)}
        ref={emailRef}
        onSubmitEditing={() => verifyEmailRef.current.focus()}
        lineWidth={2}
        placeholder="name@example.com"
        returnKeyType="next"
        label="Email"
      />
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        labelTextStyle={{ fontWeight: "bold", marginLeft: -20 }}
        blurOnSubmit={false}
        error={verifyEmailError ? verifyEmailError : null}
        value={verifyEmail}
        autoCapitalize = 'none'
        keyboardType="email-address"
        onChangeText={(val) => onChange("verifyEmail", val)}
        lineWidth={2}
        ref={verifyEmailRef}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder="name@example.com"
        returnKeyType="next"
        label="Confirm email"
      />
      <TextField
        inputContainerStyle={{ paddingLeft: 20 }}
        labelFontSize={14}
        labelTextStyle={{ fontWeight: "bold", marginLeft: -20 }}
        value={password}
        error={passwordError ? passwordError : null}
        onChangeText={(val) => onChange("password", val)}
        ref={passwordRef}
        autoCapitalize = 'none'
        lineWidth={2}
        secureTextEntry={true}
        placeholder="******"
        returnKeyType="done"
        label="Password"
      />
      <BorderlessButton
        borderless={false}
        style={styles.loginButton}
        onPress={signUp}
      >
        <View accessible style={{flexDirection:'row'}}>
          {isLoading && <ActivityIndicator color="#FFFFFF" />}
          <Text style={styles.buttonTitle}>SIGN UP</Text>
        </View>
      </BorderlessButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 30 },
  loginButton: {
    height: 50,
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#45db74",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "700", marginLeft:10 },
  password: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 20,
  },
});

export default SignUpForm;
