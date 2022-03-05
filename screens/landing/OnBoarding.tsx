import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { OnBoardingStackProps } from '../../types/navigationTypes';

function OnBoarding({ navigation }: OnBoardingStackProps) {
  const response = {
    data: [
      {
        questionId: 'question1',
        question: '창틀이 깨끗한가요?',
        mainCategory: '외부 시설',
        subCategory: null,
        rule: null,
        description: '곰팡이가 없는지 확인 후 청소를 요청하세요',
        emoji: ':)',
        type: 'A',
        answer: {
          answerId: 'answerId1',
          ans: [
            { type: '예', val: false, redType: false },
            { type: '아니오', val: false, redType: true },
          ],
        },
      },
      {
        questionId: 'question2',
        question: '갈라진 틈이 있나요?',
        mainCategory: '외부 시설',
        subCategory: null,
        rule: null,
        description: '벽의 틈새를 통해 벌레가 출몰한다',
        emoji: ':)',
        type: 'A',
        answer: {
          answerId: 'answerId2',
          ans: [
            { type: '예', val: false, redType: false },
            { type: '아니오', val: false, redType: true },
          ],
        },
      },
      {
        questionId: 'question3',
        question: '변기의 물이 잘 내려가나요?',
        mainCategory: '외부 시설',
        subCategory: '세면대 물을 틀어 놓은 상태로 변기 물을 내려보세요요요요요요 ',
        rule: null,
        description: '오래된 건물의 고층이라면 특히 주의해주세요',
        emoji: ':)',
        type: 'A',
        answer: {
          answerId: 'answerId3',
          ans: [
            { type: '예', val: false, redType: false },
            { type: '아니오', val: false, redType: true },
          ],
        },
      },
      {
        questionId: 'question4',
        question: '이중 잠금 장치가 설치 되어 있나요?',
        mainCategory: '외부 시설',
        subCategory: null,
        rule: null,
        description: '설치를 요구할 수 있어요',
        emoji: ':)',
        type: 'A',
        answer: {
          answerId: 'answerId4',
          ans: [
            { type: '예', val: false, redType: false },
            { type: '아니오', val: false, redType: true },
          ],
        },
      },
      {
        questionId: 'question5',
        question: '주변 편의시설을 확인하세요',
        mainCategory: '외부 시설',
        subCategory: null,
        rule: '',
        description: '주소 입력시 표시되는 지도를 활용하세요',
        emoji: ':)',
        type: 'D',
        answer: {
          answerId: 'answer5',
          ans: [
            {
              type: '병원',
              val: false,
            },
            {
              type: '편의점',
              val: false,
            },
            {
              type: '마트',
              val: false,
            },
            {
              type: '약국',
              val: false,
            },
            {
              type: '공원',
              val: false,
            },
            {
              type: '세탁소',
              val: false,
            },
          ],
        },
      },
    ],
  };
  const [responsedData, setResponsedData] = useState(response.data);
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
          {responsedData.map((data) => (
            <View style={styles.whiteCard} key={data.questionId}>
              {/*<CheckListComponent />*/}
              <Text style={styles.checkListMainTitle}>{data.question}</Text>
              <View style={styles.subTitles}>
                {data.subCategory && (
                  <View style={styles.checkListSubTitle}>
                    <Text style={styles.emoji}>📘 </Text>
                    <Text style={styles.checkListGrayText}>{data.subCategory}</Text>
                  </View>
                )}
                {data.description && (
                  <View style={styles.checkListSubTitle}>
                    <Text style={styles.emoji}>👀 </Text>
                    <Text style={styles.checkListGrayText}>{data.description}</Text>
                  </View>
                )}
              </View>
              <View style={styles.buttonsOfCheckList}>
                {data.type === 'A' &&
                  data.answer.ans.map((answer) => (
                    <Pressable
                      onPress={() =>
                        setResponsedData(
                          responsedData.map((questionItem) =>
                            questionItem.questionId === data.questionId
                              ? {
                                  ...questionItem,
                                  answer: {
                                    ans: [
                                      ...questionItem.answer.ans.map((answerItem) =>
                                        answerItem.type === answer.type
                                          ? { ...answerItem, val: true }
                                          : { ...answerItem, val: false }
                                      ),
                                    ],
                                  },
                                }
                              : { ...questionItem }
                          )
                        )
                      }
                      style={
                        answer.val
                          ? answer.redType
                            ? [styles.typeABtnWrapper, styles.checkListFocusedOrange]
                            : [styles.typeABtnWrapper, styles.checkListFocusedBlue]
                          : [styles.typeABtnWrapper]
                      }
                    >
                      <View>
                        <Text
                          style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}
                        >
                          {answer.type}
                        </Text>
                      </View>
                    </Pressable>
                  ))}
                {data.type === 'B' && <Text>b</Text>}
                {data.type === 'C' && <Text>c</Text>}
                {data.type === 'D' &&
                  data.answer.ans.map((answer) => (
                    <Pressable
                      onPress={() =>
                        setResponsedData(
                          responsedData.map((questionItem) =>
                            questionItem.questionId === data.questionId
                              ? {
                                  ...questionItem,
                                  answer: {
                                    ans: [
                                      ...questionItem.answer.ans.map((answerItem) =>
                                        answerItem.type === answer.type
                                          ? { ...answerItem, val: !answerItem.val }
                                          : { ...answerItem }
                                      ),
                                    ],
                                  },
                                }
                              : { ...questionItem }
                          )
                        )
                      }
                      style={
                        answer.val
                          ? [styles.typeDBtnWrapper, styles.checkListFocusedBlue]
                          : [styles.typeDBtnWrapper]
                      }
                    >
                      <View>
                        <Text
                          style={answer.val ? styles.checkListWhiteText : styles.checkListGrayText}
                        >
                          {answer.type}
                        </Text>
                      </View>
                    </Pressable>
                  ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <Pressable onPress={() => navigation.navigate('login')} style={styles.rightArrowWrapper}>
        <Image source={require('../../assets/images/common/rightArrow.png')} />
      </Pressable>
    </>
  );
}

export default OnBoarding;
