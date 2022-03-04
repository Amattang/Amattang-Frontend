import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const response = {
    status: 200,
    message: '카테고리 질문 목록 조회',
    data: [
      {
        questionId: 1,
        question: '이중 잠금 장치가 설치 되어 있나요?',
        mainCategory: '외부 시설',
        subCategory: 'null',
        rule: 'null',
        description: '설치를 요구할 수 있어요',
        emoji: ':)',
        type: 'A',
        answer: {
          answerId: 1,
          ans: null,
          redType: false,
        },
      },
      {
        questionId: 2,
        question: '주변 편의시설을 확인하세요',
        mainCategory: '외부 시설',
        subCategory: 'null',
        rule: '',
        description: '주소 입력시 표시되는 지도를 활용하세요',
        emoji: ':)',
        type: 'D',
        answer: {
          answerId: '2',
          ans: [
            {
              type: '병원',
              val: 'false',
            },
            {
              type: '편의점',
              val: 'false',
            },
            {
              type: '마트',
              val: 'false',
            },
            {
              type: '약국',
              val: 'false',
            },
            {
              type: '세탁소',
              val: 'false',
            },
            {
              type: '공원',
              val: 'false',
            },
          ],
        },
      },
    ],
  };
  const onMapHandler = () => {
    navigation.navigate('map');
  };
  return (
    <>
      <View style={styles.onBoardingFullScreen}>
        <View style={styles.upperElement}>
          <Text style={styles.mainText}>우리집을 체크하며 {'\n'}아맞땅을미리 경험해보세요</Text>
        </View>
        <ScrollView style={styles.checkListCards}>
          <View style={styles.whiteCard}>
            <Text style={styles.checkListMainTitle}>주소를 입력하세요</Text>
            <View style={styles.buttonsOfCheckList}>
              <Pressable style={[styles.directInputOfAddress, styles.buttonOfCheckLIst]}>
                <Text style={styles.directInputTextOfAddress}>직접 입력</Text>
              </Pressable>
              <Pressable
                onPress={onMapHandler}
                style={[styles.mapInputOfAddress, styles.buttonOfCheckLIst]}
              >
                <Image
                  style={styles.mapInputImageOfAddress}
                  source={require('../../assets/images/landing/map.png')}
                />
                <Text>현위치</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
      <View></View>
    </>
  );
}

export default OnBoarding;
