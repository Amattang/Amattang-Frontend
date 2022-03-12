import React, { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { checkListTypes } from '../../types/checkListTypes';
import { response } from '../../mockData/onBoardingMockUpData';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { DefaultText } from '../../CustomText';
import FloatingBtn from '../../components/CheckListComponent/FloatingBtn';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const [checkLists, setCheckLists] = useState<checkListTypes[]>(response);
  const onMapHandler = () => {
    navigation.navigate('map');
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
          <CheckListComponent isEdit={true} checkLists={checkLists} setCheckLists={setCheckLists} />
        </ScrollView>
      </View>
      <FloatingBtn floatingFunction={floatingFunction} image={'rightArrow'} />
    </>
  );
}

export default OnBoarding;
