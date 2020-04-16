import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpHeader = () => {
    return (
        <View>
            <Text style={styles.title}>Ready to reach your fitness goals?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   title: {
        fontSize: 25,
        fontWeight: '800',
        textAlign:'center',
        paddingTop: 20
   }
})
export default SignUpHeader;