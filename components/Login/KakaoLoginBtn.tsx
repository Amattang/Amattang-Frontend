import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import {
  login,
  getAccessToken,
  KakaoAccessTokenInfo,
  KakaoProfile,
  getProfile,
  KakaoProfileNoneAgreement,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import { API_HOST } from '../../constant';

const KakaoLoginBtn = ({ setIsLogin }: any) => {
  const onKakaoLoginHandler = async (): Promise<void> => {
    await login();
    const access: KakaoAccessTokenInfo = await getAccessToken();
    // const profile: KakaoProfile | KakaoProfileNoneAgreement = await getProfile();

    const data = {
      accessToken: access.accessToken,
      provider: 'kakao',
    };

    axios
      .post(`${API_HOST}/login`, data, {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-Type': 'application/json',
        // },
      })
      .then((res) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access.accessToken}`;
        console.log(`response : ${JSON.stringify(res)}`);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err);
        const status = err?.response?.status;
        if (status === undefined) {
          console.log('데이터 오류' + JSON.stringify(err));
        } else if (status === 400) {
          console.log('400에러');
        } else if (status === 500) {
          console.log('내부 서버 오류');
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
