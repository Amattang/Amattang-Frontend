import React, { useState } from 'react';
import { Image, Pressable, useWindowDimensions, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import KakaoLoginBtn from '../../components/Login/KakaoLoginBtn';
import AppleLoginBtn from '../../components/Login/AppleLoginBtn';
import Cookies from 'universal-cookie';

function Login({ setIsLogin }: any) {
  // const cookies = new Cookies();

  // const setRefreshTokenToCookie = (refreshToken: string) => {
  //   cookies.set('refresh_token', refreshToken, { sameSite: 'strict' });
  //   console.log(cookies.get('refresh_token'));
  // };

  // const logout = () => {
  //   console.log('logout. Clear');
  //   cookies.remove('refresh_token');
  // };

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
        <AppleLoginBtn setIsLogin={setIsLogin} />
        <KakaoLoginBtn setIsLogin={setIsLogin} />
      </View>
    </View>
  );
}

export default Login;
