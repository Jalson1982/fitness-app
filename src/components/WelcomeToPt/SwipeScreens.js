import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourSlide from './FourSlide';
import FiveSlide from './FiveSlide';

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

const SwipeScreens = ({swipeRef, goToNext}) => {
    return (
        <Swiper style={styles.wrapper} scrollEnabled={false} showsButtons={false} showsPagination={false} loop={false} ref={swipeRef}>
        <FirstSlide goToNext={goToNext}/>
        <ThirdSlide goToNext={goToNext}/>
        <FourSlide goToNext={goToNext}/>
        <FiveSlide goToNext={goToNext}/>
        <SecondSlide goToNext={goToNext}/>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
}

export default SwipeScreens;