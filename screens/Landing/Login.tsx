import React, { useState } from 'react';
import { Image, Platform, Pressable, useWindowDimensions, View } from 'react-native';
import styles from './styles';
import { DefaultText } from '../../CustomText';
import KakaoLoginBtn from '../../components/Login/KakaoLoginBtn';
import AppleLoginBtn from '../../components/Login/AppleLoginBtn';

function Login({ setIsLogin }: any) {
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
        {Platform.OS === 'ios' ? <AppleLoginBtn setIsLogin={setIsLogin} /> : null}
        <KakaoLoginBtn setIsLogin={setIsLogin} />
      </View>
    </View>
  );
}

export default Login;
