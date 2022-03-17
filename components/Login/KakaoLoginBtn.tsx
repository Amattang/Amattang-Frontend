import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import { login, KakaoOAuthToken } from '@react-native-seoul/kakao-login';
import axios from 'axios';
import { isLoggedIn, setAuthTokens } from 'react-native-axios-jwt';
import { axiosInstance } from './LoginToken';

const KakaoLoginBtn = ({ setIsLogin }: any) => {
  const onKakaoLoginHandler = async (): Promise<void> => {
    console.log(await isLoggedIn());
    if (await isLoggedIn()) {
      setIsLogin(true);
      return;
    }
    const access: KakaoOAuthToken = await login();

    const data = {
      accessToken: access.accessToken,
      provider: 'kakao',
    };

    axiosInstance
      .post(`/login`, data)
      .then((res) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access.accessToken}`;
        console.log(`response : ${JSON.stringify(res.data.data)}`);
        setAuthTokens({
          accessToken: res.data.data.accessToken,
          refreshToken: res.data.data.refreshToken,
        });
        setIsLogin(true);
      })
      .catch((err) => {
        // console.log(err);
        const status = err?.response?.status;
        if (status === undefined) {
          console.error('데이터 오류');
        } else if (status === 400) {
          console.error('400에러');
        } else if (status === 500) {
          console.error('내부 서버 오류');
        }
      });
  };

  return (
    <Pressable onPress={onKakaoLoginHandler} style={[styles.kakaoLoginBtn, styles.bottomBtn]}>
      <View style={styles.bottomImg}>
        <Image source={require('../../assets/images/landing/kakao.png')} />
      </View>
      <DefaultText style={styles.kakaoLoginText}>카카오톡으로 시작하기</DefaultText>
    </Pressable>
  );
};

export default KakaoLoginBtn;