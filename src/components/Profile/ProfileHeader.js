import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileHeader = ({ firstName, lastName}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{firstName} {lastName}</Text>
            <Icon name="settings-outline" size={wp('6%')} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: wp('3%'),
        paddingTop: hp('2%'),
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: wp('5%'),
        fontWeight:'600',
        letterSpacing:0.5
    },
    icon:{
        paddingRight: wp('3%'),
        opacity:0.5
    }
})

export default ProfileHeader;