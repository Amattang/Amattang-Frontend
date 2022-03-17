import React, { useEffect, useState } from 'react';
import { Image, PermissionsAndroid, Platform, Pressable, ScrollView, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { checkListTypes } from '../../types/checkListTypes';
import { response } from '../../mockData/onBoardingMockUpData';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { DefaultText } from '../../CustomText';
import FloatingBtn from '../../components/CheckListComponent/FloatingBtn';
import Geolocation from 'react-native-geolocation-service';
import { IHere } from '../../types/mapTypes';
import { requestPermission } from '../../utils/LocationPermission';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const [checkLists, setCheckLists] = useState<checkListTypes[]>(response);

  // 내 현재 위치 찾기
  const [here, setHere] = useState<IHere | undefined>(undefined);

  const goGeoLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        setHere({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    goGeoLocation();
  }, []);

  const onMapHandler = () => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        navigation.navigate('map', { here: here });
      }
    });
  };

  const floatingFunction = () => {
    navigation.navigate('login');
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
              <Pressable
                onPress={() => console.log('여기에 누르면 이제 지도 검색 궈궈')}
                style={[styles.directInputOfAddress, styles.buttonOfCheckList]}
              >
                <DefaultText style={styles.directInputTextOfAddress}>직접 입력</DefaultText>
              </Pressable>
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
          {checkLists.map((checkList) => (
            <CheckListComponent
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
