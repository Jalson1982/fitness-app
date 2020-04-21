import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import ProfileHeader from '../components/Profile/ProfileHeader';
import { useSafeArea } from 'react-native-safe-area-context';
import Stats from '../components/Profile/Stats';
import TrainingAndGoals from '../components/Profile/TrainingAndGoals';
import { ScrollView } from 'react-native-gesture-handler';
import BodyWeight from '../components/Profile/BodyWeight';
import History from '../components/Profile/History';

const Profile = () => {
    const { firstName, lastName } = useSelector((state) => state.userReducer.userDetails);
    const { experience,workDays, fitnessGoal,  weight } = useSelector((state) => state.userReducer.appSetupDetails);
    const insent = useSafeArea().top;
    return (
        <View style={[styles.container,{paddingTop:insent}]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:30}}> 
            <ProfileHeader firstName={firstName} lastName={lastName} />
            <Stats />
            <TrainingAndGoals experience={experience} workDays={workDays} fitnessGoal={fitnessGoal}/>
            <BodyWeight  weight={weight}/>
            <History />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

export default Profile;