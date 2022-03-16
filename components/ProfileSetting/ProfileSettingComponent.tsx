import React, { useEffect, useState } from 'react';
import { Switch, View, Platform, Image, Pressable, Linking, ScrollView } from 'react-native';
import { DefaultText } from '../../CustomText';
import styles from './styles';
import { PERMISSIONS, request } from 'react-native-permissions';
import { mainBlue } from '../../color';

function ProfileSettingComponent() {
  const [onCameraAccess, setOnCameraAccess] = useState(false);
  const [onGalleryAccess, setOnGalleryAccess] = useState(false);
  const [onLocationAccess, setOnLocationAccess] = useState(false);

  useEffect(() => {
    onCameraAccessHandler();
    onGalleryAccessHandler();
    onLocationAccessHandler();
  }, []);

  const onCameraAccessHandler = async () => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.CAMERA).then(() => setOnCameraAccess(true));
    }
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.CAMERA).then(() => setOnCameraAccess(true));
    }
  };

  const onGalleryAccessHandler = async () => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(() => setOnGalleryAccess(true));
    }
    if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(() => setOnCameraAccess(true));
    }
  };

  const onLocationAccessHandler = async () => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(() => setOnGalleryAccess(true));
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(() => setOnGalleryAccess(true));
    }
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(() => setOnLocationAccess(true));
      request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then(() => setOnLocationAccess(true));
      request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(() => setOnLocationAccess(true));
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.profileSettingOuterWrapper}>
          <View style={styles.profileSettingInnerWrapper}>
            <DefaultText style={styles.profileSettingName}>name: 최봉수</DefaultText>

            <View style={styles.horizontalLine} />

            <DefaultText style={styles.profileSettingTitle}>접근성</DefaultText>

            <View>
              <View style={styles.profileSettingEachElementWrapper}>
                <DefaultText style={styles.profileSettingEachElementText}>카메라</DefaultText>
                <Switch
                  value={onCameraAccess}
                  onChange={onCameraAccessHandler}
                  disabled={onCameraAccess}
                  trackColor={{ false: 'black', true: mainBlue }}
                />
              </View>
              <View style={styles.profileSettingEachElementWrapper}>
                <DefaultText style={styles.profileSettingEachElementText}>갤러리</DefaultText>
                <Switch
                  value={onGalleryAccess}
                  onChange={onGalleryAccessHandler}
                  disabled={onGalleryAccess}
                  trackColor={{ false: 'black', true: mainBlue }}
                />
              </View>
              <View style={styles.profileSettingEachElementWrapper}>
                <DefaultText style={styles.profileSettingEachElementText}>위치접근</DefaultText>
                <Switch
                  value={onLocationAccess}
                  onChange={onLocationAccessHandler}
                  disabled={onLocationAccess}
                  trackColor={{ false: 'black', true: mainBlue }}
                />
              </View>
              <View style={styles.horizontalLine} />

              <DefaultText style={styles.profileSettingTitle}>고객센터</DefaultText>
              <Pressable
                onPress={() => Linking.openURL('https://www.naver.com')}
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  개선사항 / 피드백
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL('https://www.naver.com')}
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
                onPress={() => Linking.openURL('https://www.naver.com')}
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  서비스 이용약관
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL('https://www.naver.com')}
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  개인정보 처리방침
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL('https://www.naver.com')}
                style={styles.profileSettingEachElementWrapper}
              >
                <DefaultText style={styles.profileSettingEachElementText}>
                  오픈소스 라이선스
                </DefaultText>
                <Image source={require('../../assets/images/common/rightArrow.png')} />
              </Pressable>
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
