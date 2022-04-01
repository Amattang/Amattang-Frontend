import React, { Dispatch, SetStateAction } from 'react';
import { View, Image, Pressable, Linking, ScrollView } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from './styles';
import { clearAuthTokens } from 'react-native-axios-jwt';
import axios from 'axios';
interface IProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

function ProfileSettingComponent({ setIsLogin }: IProps) {
  const onWithdrawalHandler = async () => {
    try {
      await axios.delete('/user');
      clearAuthTokens();
      setIsLogin(false);
      console.log('t');
    } catch (error) {
      console.log(error);
    }
  };
  const onLogoutHandler = () => {
    clearAuthTokens();
    setIsLogin(false);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.profileSettingOuterWrapper}>
          <View style={styles.profileSettingInnerWrapper}>
            <View>
              <DefaultText style={styles.profileSettingTitle}>고객센터</DefaultText>
              <Pressable
                onPress={() => Linking.openURL('http://pf.kakao.com/_Numxeb')}
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  개선사항 / 피드백
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>

              <Pressable
                onPress={() => Linking.openURL('https://www.instagram.com/a.ma.ttang/')}
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  공식 인스타그램
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>

              <View style={styles.horizontalLine} />

              <DefaultText style={styles.profileSettingTitle}>고객센터</DefaultText>

              <Pressable
                onPress={() =>
                  Linking.openURL('https://ninth-ceramic-fb9.notion.site/682290c00bc843a7be307c5784dfa767')
                }
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  서비스 이용약관
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  Linking.openURL('https://ninth-ceramic-fb9.notion.site/973338c94f9a4e92ac202bad64363bd2')
                }
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  개인정보 처리방침
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>
              {/*<Pressable*/}
              {/*  onPress={() => Linking.openURL('https://www.naver.com')}*/}
              {/*  style={styles.profileSettingEachElementWrapper}*/}
              {/*>*/}
              {/*  <DefaultText style={styles.profileSettingEachElementText}>*/}
              {/*    오픈소스 라이선스*/}
              {/*  </DefaultText>*/}
              {/*  <Image source={require('../../assets/images/common/rightArrow.png')} />*/}
              {/*</Pressable>*/}
              <View style={styles.horizontalLine} />

              <View style={styles.profileSettingBottomElements}>
                <Pressable style={styles.profileSettingEachElementWrapper}>
                  <DefaultText style={styles.profileSettingEachElementText}>
                    버전정보 1.0
                  </DefaultText>
                </Pressable>
                <Pressable
                  style={styles.profileSettingEachElementWrapper}
                  onPress={onLogoutHandler}
                >
                  <DefaultText style={styles.profileSettingEachElementText}>로그아웃</DefaultText>
                </Pressable>
                <Pressable
                  onPress={onWithdrawalHandler}
                  style={styles.profileSettingEachElementWrapper}
                >
                  <DefaultText style={[styles.profileSettingEachElementText, styles.redText]}>
                    회원탈퇴
                  </DefaultText>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default ProfileSettingComponent;
