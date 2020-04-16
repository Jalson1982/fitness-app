import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { useSafeArea} from 'react-native-safe-area-context';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Logo from "../components/InitialScreen/Logo";
import LoginButtons from "../components/InitialScreen/LoginButtons";
import Terms from "../components/InitialScreen/Terms";

const backgroundImage = require("../assets/fitness-women-sports-gym.jpg");

const InitialScreen = ({navigation}) => {
    const insent = useSafeArea().top;
    function navigateToEmailLogin() {
      navigation.navigate("Login");
    }
    function navigateToSignUp() {
      navigation.navigate("SignUp");
    }
    async function facebookLogin() {
      try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
        if (result.isCancelled) {
        } else {
          // get the access token
          const data = await AccessToken.getCurrentAccessToken();
  
          if (!data) {
            // handle this however suites the flow of your app
          } else {
            const { accessToken } = data;
            // const url = `${apiEndpoint}v1/auth/facebook`;
            /*dispatch(login(url, qs.stringify({ exchangeToken: accessToken }))).then(() => {
              logEvent('Signed in with Facebook');
            });*/
          }
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={[styles.image,{paddingTop:insent}]}
      >
        <Logo />
        <LoginButtons emailLogin={navigateToEmailLogin} signUp={navigateToSignUp}/>
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
export default InitialScreen;
