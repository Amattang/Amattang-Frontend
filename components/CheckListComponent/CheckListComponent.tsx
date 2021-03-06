import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { checkListTypes } from '../../types/checkListTypes';
import styles from './styles';
import ButtonsOfTypeA from './ButtonsOfTypeA';
import ButtonsOfTypeD from './ButtonsOfTypeD';
import { DefaultText } from '../../CustomText';
import ButtonsOfTypeB from './ButtonsOfTypeB';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import ButtonOfGoToTrash from './ButtonOfGoToTrash';
import ButtonsOfTypeM from './ButtonsOfTypeM';
import ButtonsOfTypeC from './ButtonsOfTypeC';

interface IProps {
  modal?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
  deletedCheckLists?: checkListTypes[];
  setDeletedCheckLists?: Dispatch<SetStateAction<checkListTypes[]>>;
  handlePresentModalPress?: () => void;
  isEdit: boolean;
  checkLists: checkListTypes[];
  checkList: checkListTypes;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  onBoarding: boolean;
}
type ContextType = {
  translateX: number;
  translateY: number;
};

function CheckListComponent({
  modal,
  setModal,
  deletedCheckLists,
  setDeletedCheckLists,
  isEdit,
  checkLists,
  checkList,
  setCheckLists,
  onBoarding,
}: IProps) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY;

      if (event.translationX + context.translateX > 0) {
        translateX.value = 0;
      }
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value > -40;
      if (shouldBeDismissed) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(-80);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  useEffect(() => {
    translateX.value = withTiming(0);
  });

  return (
    <View style={styles.checkListWrapper}>
      <PanGestureHandler
        enabled={!onBoarding && isEdit}
        onGestureEvent={panGesture}
        activeOffsetX={[-10, 10]}
      >
        <Animated.View style={[rStyle]}>
          <Pressable style={styles.whiteCard} key={checkList.questionId}>
            <View style={styles.textWrapWrapper}>
              {checkList.question.split(' ').map((word, index) => (
                <DefaultText key={index} style={[styles.checkListMainTitle, styles.textWrap]}>
                  {word}
                </DefaultText>
              ))}
            </View>

            <View style={styles.subTitles}>
              {checkList.rule !== null && (
                <View style={styles.checkListSubTitle}>
                  <DefaultText style={styles.emoji}>???? </DefaultText>
                  <View style={styles.textWrapWrapper}>
                    {checkList.rule.split(' ').map((word, index) => (
                      <DefaultText key={index} style={[styles.checkListGrayText, styles.textWrap]}>
                        {word}&nbsp;
                      </DefaultText>
                    ))}
                  </View>
                </View>
              )}
              {checkList.description !== null && (
                <View style={styles.checkListSubTitle}>
                  <DefaultText style={styles.emoji}>???? </DefaultText>

                  <View style={styles.textWrapWrapper}>
                    {checkList.description.split(' ').map((word, index) => (
                      <DefaultText key={index} style={[styles.checkListGrayText, styles.textWrap]}>
                        {word}&nbsp;
                      </DefaultText>
                    ))}
                  </View>
                </View>
              )}
            </View>
            <View style={styles.buttonsOfCheckList}>
              {checkList.type === 'A' && (
                <ButtonsOfTypeA
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              )}
              {checkList.type === 'B' && (
                <ButtonsOfTypeB
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              )}
              {checkList.type === 'C' && (
                <ButtonsOfTypeC setModal={setModal} modal={modal} checkList={checkList} />
              )}
              {checkList.type === 'D' && (
                <ButtonsOfTypeD
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              )}
              {checkList.type === 'M' && <ButtonsOfTypeM checkList={checkList} />}
            </View>
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
      <ButtonOfGoToTrash
        deletedCheckLists={deletedCheckLists}
        setDeletedCheckLists={setDeletedCheckLists}
        translateX={translateX}
        rStyle={rStyle}
        isEdit={isEdit}
        checkList={checkList}
        setCheckLists={setCheckLists}
        checkLists={checkLists}
      />
    </View>
  );
}

export default CheckListComponent;
