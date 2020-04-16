import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSafeArea } from 'react-native-safe-area-context';

const SubmitButton = props => {
  const bottomInsent = useSafeArea().bottom;

  const { onPress, title, params, isLoading } = props;
  function submit() {
    if (params && !isLoading) {
      onPress(params);
    }
    onPress();
  }
  return (
    <BorderlessButton borderless={false} onPress={submit} style={[styles.button,{bottom:bottomInsent+10}]}>
      <View accessible style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
    bottom: 10
  }
});

export default SubmitButton;
