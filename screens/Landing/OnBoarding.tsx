import React, { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { checkListTypes } from '../../types/checkListTypes';
import { response } from '../../mockData/onBoardingMockUpData';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { DefaultText } from '../../CustomText';
import FloatingBtn from '../../components/CheckListComponent/FloatingBtn';
import { requestPermission } from '../../utils/LocationPermission';
import ModalAddress from '../../components/Map/ModalAddress';
import Geolocation from 'react-native-geolocation-service';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const [checkLists, setCheckLists] = useState<checkListTypes[]>(response);

  const floatingFunction = () => {
    navigation.navigate('login');
  };

  // 현재위치 찾기
  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        navigation.navigate('map', {
          activeType: true,
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // 허가 있어야 map으로 이동
  const onMapHandler = () => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        goGeoLocation();
      }
    });
  };

  return (
    <>
      <View style={styles.onBoardingFullScreen}>
        <View style={styles.upperElement}>
          <DefaultText style={styles.mainText}>
            우리집을 체크하며 {'\n'}아맞땅을 미리 경험해보세요
          </DefaultText>
        </View>
        <ScrollView>
          <View style={styles.whiteCard}>
            <DefaultText style={styles.checkListMainTitle}>주소를 입력하세요</DefaultText>
            <View style={styles.buttonsOfCheckList}>
              <ModalAddress />
              <Pressable
                onPress={onMapHandler}
                style={[styles.mapInputOfAddress, styles.buttonOfCheckList]}
              >
                <Image
                  style={styles.mapInputImageOfAddress}
                  source={require('../../assets/images/landing/map.png')}
                />
                <DefaultText>현위치</DefaultText>
              </Pressable>
            </View>
          </View>
          {checkLists.map((checkList, index) => (
            <CheckListComponent
              key={index}
              onBoarding={true}
              checkList={checkList}
              isEdit={true}
              checkLists={checkLists}
              setCheckLists={setCheckLists}
            />
          ))}
        </ScrollView>
      </View>
      <FloatingBtn floatingFunction={floatingFunction} image={'rightArrow'} />
    </>
  );
}

export default OnBoarding;
