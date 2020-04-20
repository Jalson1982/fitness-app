import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


const AddButton = () =>{
    return(
        <BorderlessButton
        borderless={false}
        style={styles.button}
      >
          <Text style={styles.buttonTitle}>Add Workout</Text>
      </BorderlessButton>
    )
}

const styles = StyleSheet.create({
    button: {
        height: heightPercentageToDP('5.5'),
        width: widthPercentageToDP('80%'),
        backgroundColor: "#000000",
        alignSelf: "center",
        borderRadius: heightPercentageToDP('2.3%'),
        position: "absolute",
        justifyContent:'center',
        alignItems:'center',
        bottom: 10,
      },
      buttonTitle:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'600'
      }
})
export default AddButton;