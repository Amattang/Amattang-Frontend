import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';

function Login({ setIsLogin }: any) {
  const onAppleLoginHandler = () => {
    setIsLogin(true);
  };

  const onKakaoLoginHandler = () => {
    setIsLogin(true);
  };

  return (
    <View style={styles.landingPageFullScreen}>
      <View style={styles.upperElement}>
        <DefaultText style={styles.mainText}>
          나만의 체크리스트를 위해
          {'\n'}계정이 필요해요
        </DefaultText>
        <DefaultText style={styles.subText}>
          로그인 하고 더 많은 체크리스트를 받아보세요
        </DefaultText>
      </View>
      <View style={styles.loginImage}>
        <Image source={require('../../assets/images/landing/loginImage.png')} />
      </View>
      <View style={styles.lowerElement}>
        <Pressable onPress={onAppleLoginHandler} style={[styles.appleLoginBtn, styles.bottomBtn]}>
          <View style={styles.bottomImg}>
            <Image source={require('../../assets/images/landing/apple.png')} />
          </View>
          <DefaultText style={styles.appleLoginText}>Apple로 시작하기</DefaultText>
        </Pressable>
        <Pressable onPress={onKakaoLoginHandler} style={[styles.kakaoLoginBtn, styles.bottomBtn]}>
          <View style={styles.bottomImg}>
            <Image source={require('../../assets/images/landing/kakao.png')} />
          </View>
          <DefaultText style={styles.kakaoLoginText}>카카오톡으로 시작하기</DefaultText>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;
