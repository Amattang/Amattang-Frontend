import React from 'react';
import { View, Image, Pressable, Linking, ScrollView } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from './styles';

function ProfileSettingComponent() {
  return (
    <>
      <ScrollView>
        <View style={styles.profileSettingOuterWrapper}>
          <View style={styles.profileSettingInnerWrapper}>
            <DefaultText style={styles.profileSettingName}>name: 최봉수</DefaultText>

            <View style={styles.horizontalLine} />

            <View>
              <View style={styles.horizontalLine} />

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
                onPress={() => Linking.openURL('https://www.instagram.com/a_ma_ttang/')}
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
                  Linking.openURL('https://www.notion.so/2caa1719b6f74f228137d662d32dd374')
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
                  Linking.openURL('https://www.notion.so/85d38b79533142c9afa20a92614d9803')
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
              <View style={styles.profileSettingBottomElements}>
                <Pressable style={styles.profileSettingEachElementWrapper}>
                  <DefaultText style={styles.profileSettingEachElementText}>
                    버전정보 1.0
                  </DefaultText>
                </Pressable>
                <Pressable style={styles.profileSettingEachElementWrapper}>
                  <DefaultText style={styles.profileSettingEachElementText}>로그아웃</DefaultText>
                </Pressable>
                <Pressable style={styles.profileSettingEachElementWrapper}>
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
