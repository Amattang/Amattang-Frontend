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
import ButtonsOfTypeM from '../../components/CheckListComponent/ButtonsOfTypeM';
import ButtonOfMap from '../../components/Onboarding/ButtonOfMap';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const [checkLists, setCheckLists] = useState<checkListTypes[]>(response);

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
            <ButtonOfMap navigation={navigation} />
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
