import React, { useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSafeArea } from 'react-native-safe-area-context';

const SubmitButton = props => {
  const bottomInsent = useSafeArea().bottom;

  const { onPress, title, isLoading } = props;
  const [ disabled, setDisabled ] = useState(false);
  function handleOnPress(...args) {
    if (disabled) {
      return;
    }
    else {
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 100);
      onPress && onPress(...args);
    }
  }
  return (
    <BorderlessButton borderless={false} onPress={handleOnPress} style={[styles.button,{bottom:bottomInsent+10}]}>
      <View accessible style={styles.innerContainer}>
        {isLoading && <ActivityIndicator color="#FFFFFF" />}
        <Text style={styles.btnTitle}>{title}</Text>
      </View>
    </BorderlessButton>
  );
};

const styles = StyleSheet.create({
  btnTitle: {
    fontSize:16,
    color: '#FFFFFF',
    lineHeight: 20,
    marginLeft: 5,
    fontWeight:'800'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#45db74',
    height: 50,
    width: wp('80%'),
    borderRadius: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    marginBottom:20
  },
  innerContainer: { flexDirection: 'row', justifyContent: 'center' }
});

export default SubmitButton;
