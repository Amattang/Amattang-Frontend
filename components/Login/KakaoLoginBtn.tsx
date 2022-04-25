import React, { Dispatch, SetStateAction } from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';
import { login, KakaoOAuthToken } from '@react-native-seoul/kakao-login';
import axios from 'axios';
import { setAuthTokens, setAccessToken, getRefreshToken } from 'react-native-axios-jwt';
import { axiosInstance } from './LoginToken';

// return된 access, refresh ->
// access 만료되기 전, refresh로 access 토큰 재발급
// 재발급한 access 토큰 + 새로 발급한 refresh

type Props = {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

const KakaoLoginBtn = ({ setIsLogin }: Props) => {
  const onKakaoLoginHandler = async (): Promise<void> => {
    const access: KakaoOAuthToken = await login();

    console.log(`kakao accessToken : ${access.accessToken}`);

    axiosInstance
      .post(`/login`, {
        accessToken: access.accessToken,
        provider: 'kakao',
      })
      .then(onLoginSuccess)
      .catch(catchError);
  };

  const requestRefresh = (refreshToken: any) => {
    axios
      .post(`/issue/re`, {
        request: 'access',
        token: `Bearer ${refreshToken}`,
      })
      .then(onLoginSuccess)
      .catch(catchError);
  };

  const onLoginSuccess = (res: any) => {
    const res_data = res.data.data;
    let accessToken: string = '';
    let acessTokenExpiresIn: number = 0;
    if (Object.keys(res_data).includes('token')) {
      // 재접속
      accessToken = res_data.token;
      setAccessToken(accessToken);
    } else {
      // 처음 호출
      setAuthTokens({
        accessToken: res_data.accessToken,
        refreshToken: res_data.refreshToken,
      });
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setIsLogin(true);
    // const refreshToken = getRefreshToken();
    // accessToken 만료하기 1분 전에 로그인 연장
    // setTimeout(() => requestRefresh(refreshToken), acessTokenExpiresIn - 60000);
  };

  const catchError = (err: any) => {
    const status = err?.response?.status;
    if (status === undefined) {
      console.error('데이터 오류');
    } else if (status === 400) {
      console.error('400에러');
    } else if (status === 500) {
      console.error('내부 서버 오류');
    }
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
