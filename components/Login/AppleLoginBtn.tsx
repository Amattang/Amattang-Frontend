import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from '../../screens/Landing/styles';

const AppleLoginBtn = ({ setIsLogin }: any) => {
  const onAppleLoginHandler = () => {
    setIsLogin(true);
  };

  return (
    <Pressable onPress={onAppleLoginHandler} style={[styles.appleLoginBtn, styles.bottomBtn]}>
      <View style={styles.bottomImg}>
        <Image source={require('../../assets/images/landing/apple.png')} />
      </View>
      <DefaultText style={styles.appleLoginText}>Apple로 시작하기</DefaultText>
    </Pressable>
  );
};

export default AppleLoginBtn;
