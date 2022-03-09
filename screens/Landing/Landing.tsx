import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { DefaultText } from '../../CustomText';

function Landing({ navigation }: OnBoardingStackProps) {
  const onLoginHandler = () => {
    navigation.navigate('login');
  };

  const onOnBoardingHandler = () => {
    navigation.navigate('onBoarding');
  };

  return (
    <View style={styles.landingPageFullScreen}>
      <View style={styles.upperElement}>
        <DefaultText style={styles.mainText}>
          아맞땅과 함께 꼼꼼한 자취생활을
          {'\n'}시작해볼까요?
        </DefaultText>
        <DefaultText style={styles.subText}>
          50여가지의 체크리스트 항목으로
          {'\n'}꿈꾸던 집을 만날 수 있어요
        </DefaultText>
      </View>
      <View style={styles.mainImage}>
        <Image source={require('../../assets/images/landing/landingImage.png')} />
      </View>
      <View style={styles.lowerElement}>
        <Pressable onPress={onLoginHandler} style={[styles.loginBtn, styles.bottomBtn]}>
          <DefaultText style={styles.loginText}>시작하기</DefaultText>
        </Pressable>
        <Pressable onPress={onOnBoardingHandler} style={[styles.onBoardingBtn, styles.bottomBtn]}>
          <DefaultText style={styles.onBoardingText}>아맞땅 맛보기</DefaultText>
        </Pressable>
      </View>
    </View>
  );
}

export default Landing;
