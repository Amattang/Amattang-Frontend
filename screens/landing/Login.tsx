import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

function Login() {
  const onAppleLoginHandler = () => {};

  const onKakaoLoginHandler = () => {};

  return (
    <View style={styles.fullScreen}>
      <View style={styles.upperElement}>
        <Text style={styles.mainText}>
          나만의 체크리스트를 위해
          {'\n'}계정이 필요해요
        </Text>
        <Text style={styles.subText}>로그인 하고 더 많은 체크리스트를 받아보세요</Text>
      </View>
      <View style={styles.loginImage}>
        <Image source={require('../../assets/images/landing/loginImage.png')} />
      </View>
      <View style={styles.lowerElement}>
        <Pressable onPress={onAppleLoginHandler} style={[styles.appleLoginBtn, styles.bottomBtn]}>
          <View style={styles.bottomImg}>
            <Image source={require('../../assets/images/landing/apple.png')} />
          </View>
          <Text style={styles.appleLoginText}>APPLE로 시작하기</Text>
        </Pressable>
        <Pressable onPress={onKakaoLoginHandler} style={[styles.kakaoLoginBtn, styles.bottomBtn]}>
          <View style={styles.bottomImg}>
            <Image source={require('../../assets/images/landing/kakao.png')} />
          </View>
          <Text style={styles.kakaoLoginText}>카카오톡으로 시작하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;
