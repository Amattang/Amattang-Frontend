import React, { useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { checkList } from '../../types/checkListTypes';
import { response } from '../../mockData/onBoardingMockUpData';
import CheckListComponent from '../../components/CheckListComponent/CheckListComponent';
import { DefaultText } from '../../CustomText';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const [checkLists, setCheckLists] = useState<checkList[]>(response);
  const onMapHandler = () => {
    navigation.navigate('map');
  };

  return (
    <>
      <View style={styles.onBoardingFullScreen}>
        <View style={styles.upperElement}>
          <DefaultText style={styles.mainText}>
            우리집을 체크하며 {'\n'}아맞땅을 미리 경험해보세요
          </DefaultText>
        </View>
        <ScrollView style={styles.checkListCards}>
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
          <CheckListComponent checkLists={checkLists} setCheckLists={setCheckLists} />
        </ScrollView>
      </View>
      <Pressable onPress={() => navigation.navigate('login')} style={styles.rightArrowWrapper}>
        <Image source={require('../../assets/images/common/rightArrow.png')} />
      </Pressable>
    </>
  );
}

export default OnBoarding;
