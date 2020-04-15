import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const logo = require('../../assets/logoo2.png');

const Logo = () => {
    return (
    <View style={styles.container}>
   <Image source={logo} style={styles.image}/>
   <Text style={styles.heading}>PT ONLINE</Text>
   <Text style={styles.subheading}>Smart workouts for you</Text>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {flex:0.7, justifyContent:'center', alignItems:'center'},
    image: {height:100,width:100},
    heading:{ fontSize:35, fontWeight:'bold', color:'#FFFFFF', paddingTop:10},
    subheading:{ fontSize: 16, color: '#FFFFFF'}
})

export default Logo;