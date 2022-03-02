import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';

function Landing({ navigation }: OnBoardingStackProps) {
  const onLoginHandler = () => {
    navigation.navigate('login');
  };

  const onOnBoardingHandler = () => {
    navigation.navigate('onBoarding');
  };

  return (
    <View style={styles.fullScreen}>
      <View style={styles.upperElement}>
        <Text style={styles.mainText}>
          아맞땅과 함께 꼼꼼한 자취생활을
          {'\n'}시작해볼까요?
        </Text>
        <Text style={styles.subText}>
          50여가지의 체크리스트 항목으로
          {'\n'}꿈꾸던 집을 만날 수 있어요
        </Text>
      </View>
      <View style={styles.mainImage}>
        <Image source={require('../../assets/images/landing/landingImage.png')} />
      </View>
      <View style={styles.lowerElement}>
        <Pressable onPress={onLoginHandler} style={[styles.loginBtn, styles.bottomBtn]}>
          <Text style={styles.loginText}>시작하기</Text>
        </Pressable>
        <Pressable onPress={onOnBoardingHandler} style={[styles.onBoardingBtn, styles.bottomBtn]}>
          <Text style={styles.onBoardingText}>아맞땅 맛보기</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Landing;
