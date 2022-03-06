import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';
import { checkList } from '../../types/checkListTypes';
import { response } from './onBoardingMockUpData';
import CheckListComponent from '../../components/checkListComponent/CheckListComponent';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const [checkLists, setCheckLists] = useState<checkList[]>(response);
  const onMapHandler = () => {
    navigation.navigate('map');
  };

  return (
    <>
      <View style={styles.onBoardingFullScreen}>
        <View style={styles.upperElement}>
          <Text style={styles.mainText}>우리집을 체크하며 {'\n'}아맞땅을 미리 경험해보세요</Text>
        </View>
        <ScrollView style={styles.checkListCards}>
          <View style={styles.whiteCard}>
            <Text style={styles.checkListMainTitle}>주소를 입력하세요</Text>
            <View style={styles.buttonsOfCheckList}>
              <Pressable
                onPress={() => console.log('여기에 누르면 이제 지도 검색 궈궈')}
                style={[styles.directInputOfAddress, styles.buttonOfCheckList]}
              >
                <Text style={styles.directInputTextOfAddress}>직접 입력</Text>
              </Pressable>
              <Pressable
                onPress={onMapHandler}
                style={[styles.mapInputOfAddress, styles.buttonOfCheckList]}
              >
                <Image
                  style={styles.mapInputImageOfAddress}
                  source={require('../../assets/images/landing/map.png')}
                />
                <Text>현위치</Text>
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
