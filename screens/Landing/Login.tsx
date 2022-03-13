import React, { useState } from 'react';
import { Alert, Image, Pressable, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import {
  KakaoOAuthToken,
  login,
  getAccessToken,
  KakaoAccessTokenInfo,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';

function Login({ setIsLogin }: any) {
  const onAppleLoginHandler = () => {
    setIsLogin(true);
  };

  const onKakaoLoginHandler = async (): Promise<void> => {
    await login();
    const access: KakaoAccessTokenInfo = await getAccessToken();

    const data = {
      accessToken: access.accessToken,
      provider: 'kakao',
    };

    // console.log(data);

    axios
      .post('/login', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(`response : ${res}`);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err);
        const status = err?.response?.status;
        if (status === undefined) {
          console.dir('데이터 오류' + JSON.stringify(err));
        } else if (status === 400) {
          console.dir('400에러');
        } else if (status === 500) {
          console.dir('내부 서버 오류');
        }
      });
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
