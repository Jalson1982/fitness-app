import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourSlide from './FourSlide';
import FiveSlide from './FiveSlide';
import SixSlide from './SixSlide';
import SevenSlide from './SevenSlide';
import EightSlide from './EightSlide';
import NineSlide from './NineSlide';
import TenSlide from './TenSlide';
import ElevenSlide from './ElevenSlide';
import TwelveSlide from './TwelveSlide';
import ThirteenSlide from './ThirteenSlide';
import FifteenSlide from './FifteenSlide';
import SixTeenSlide from './SixTeenSlide';
import SevenTeenSlide from './SevenTeenSlide';
import EighTeenSlide from './EighTeenSlide';
import NineteenSlide from './NineTeenSlide';

const styles = StyleSheet.create({
  wrapper: {marginTop:20},
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
  });

const SwipeScreens = ({swipeRef, randomPrevious, goToNext, appSetupDetails, updateDetails}) => {
  const {birthData, sex, weight, height, metric, fitnessGoal, equipment, experience, sessionTime, workDays,reminder, test} = appSetupDetails;
    return (
        <Swiper style={styles.wrapper} scrollEnabled={false} showsButtons={false} showsPagination={false} loop={false} ref={swipeRef}>
        <FirstSlide goToNext={goToNext}/>
        <ThirdSlide goToNext={goToNext} sex={sex} updateDetails={updateDetails}/>
        <FourSlide goToNext={goToNext} birthData={birthData} updateDetails={updateDetails}/>
        <FiveSlide goToNext={goToNext} metric={metric} updateDetails={updateDetails}/>
        <SixSlide goToNext={goToNext} height={height} updateDetails={updateDetails}  metric={metric}/>
        <SevenSlide goToNext={goToNext} weight={weight} updateDetails={updateDetails} metric={metric}/>
        <SecondSlide goToNext={goToNext}/>
        <EightSlide goToNext={goToNext} test={test} updateDetails={updateDetails}/>
        <NineSlide goToNext={goToNext} test={test} updateDetails={updateDetails}/>
        <TenSlide goToNext={goToNext} test={test} updateDetails={updateDetails}/>
        <ElevenSlide goToNext={goToNext}/>
        <TwelveSlide goToNext={goToNext} fitnessGoal={fitnessGoal} updateDetails={updateDetails}/>
        <ThirteenSlide goToNext={goToNext} equipment={equipment} updateDetails={updateDetails}/>
        <FifteenSlide goToNext={goToNext} experience={experience} updateDetails={updateDetails} />
        <SixTeenSlide goToNext={goToNext} sessionTime={sessionTime} updateDetails={updateDetails}/>
        <SevenTeenSlide goToNext={goToNext} workDays={workDays} updateDetails={updateDetails}/>
        <EighTeenSlide goToNext={goToNext} reminder={reminder } updateDetails={updateDetails}/>
        <NineteenSlide goToNext={goToNext} equipment={equipment} randomPrevious={randomPrevious} updateDetails={updateDetails} appSetupDetails={appSetupDetails}/>
      </Swiper>
    )
}

export default SwipeScreens;